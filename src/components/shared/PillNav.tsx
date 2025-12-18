"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { loadingAnimationPageOut } from "~/utils/loadingAnimation";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutRef, useNavContext } from "~/context/LayoutRefContext";
import { GiHamburgerMenu } from "react-icons/gi";
import MagneticEffect from "../providers/MagneticEffect";
import { motion } from "framer-motion";
import { removeEmoji } from "~/utils/removeEmoji";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import LinkAnimation from "./LinkAnimation";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const hasLoadedRef = useRef(false);
  const router = useRouter();
  const { layoutRef } = useLayoutRef();
  const { setCurrentNavLabel } = useNavContext();
  const [showHumberger, setShowHumberger] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => {
      layout(), onScroll();
    };

    const onScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile || window.scrollY > 70) {
        setShowHumberger(true);
      } else {
        setShowHumberger(false);
      }
    };
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation && !hasLoadedRef.current) {
      hasLoadedRef.current = true;
      const navItems = navItemsRef.current;

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  } as React.CSSProperties;

  return (
    <div className="relative z-[5] w-full left-0 flex justify-center items-center p-3">
      <nav
        className={`w-1/2 md:border-b-8 md:border-black md:bg-yellow-500 p-2 rounded-xl flex items-center justify-center box-border px-4 md:px-0 ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref == item.href;

              const pillStyle: React.CSSProperties = {
                background: isActive
                  ? "var(--base, #000)"
                  : "var(--pill-bg, #fff)",
                color: isActive
                  ? "var(--hover-text, #fff)"
                  : "var(--pill-text, #fff)",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: isActive
                        ? "var(--pill-bg, #fff)"
                        : "var(--base, #000)",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: isActive
                          ? "var(--pill-text, #000)"
                          : "var(--hover-text, #fff)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-xs leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <LinkAnimation
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      label={item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </LinkAnimation>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => !isActive && handleEnter(i)}
                      onMouseLeave={() => !isActive && handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: showHumberger ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="fixed md:right-20 right-5 top-2 z-[99]"
        >
          {/* Spinner border */}
          <div className="absolute inset-0 border-2 border-dashed rounded-full animate-spin-slow md:p-16 p-8 md:mt-0 mt-2"></div>
          {/* Button di atas spinner */}
          <MagneticEffect>
            <button
              className="relative z-[10] cursor-pointer flex-col gap-2 bg-black md:w-20 md:h-20 w-16 h-16 rounded-full flex justify-center items-center group"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <div className="bg-white rounded-full w-10 h-[2px]"></div>
              <div className={`bg-white rounded-full ${ isMenuOpen ? 'w-10' :  'w-7' } group-hover:w-10 transition-all duration-300 h-[2px]`}></div>
              <div className={`bg-white rounded-full ${ isMenuOpen ? 'w-10' :  'w-4' } group-hover:w-10 transition-all duration-300  h-[2px]`}></div>
            </button>
          </MagneticEffect>
        </motion.div>
      </nav>
      <motion.div
        initial={{ pointerEvents: "none", visibility: "hidden" }}
        animate={
          isOverlayVisible
            ? { pointerEvents: "auto", visibility: "visible" }
            : { pointerEvents: "none", visibility: "hidden" }
        }
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-40"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isMenuOpen ? 100 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-yellow-500 size-16 absolute right-16 top-10 rounded-full"
          onAnimationStart={() => {
            if (isMenuOpen) setIsOverlayVisible(true);
          }}
          onAnimationComplete={() => {
            if (!isMenuOpen) setIsOverlayVisible(false);
          }}
        ></motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onAnimationStart={() => {
            if (isMenuOpen) setIsOverlayVisible(true);
          }}
          onAnimationComplete={() => {
            if (!isMenuOpen) setIsOverlayVisible(false);
          }}
          className="absolute z-[99] w-screen h-screen flex justify-center items-center flex-col gap-10"
        >
          <motion.ul
            className="text-6xl font-mono text-black font-bold flex flex-col items-center justify-center gap-8"
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {items.map((item) => (
              <MagneticEffect key={item.href}>
                <motion.li
                  variants={{
                    hidden: { y: -20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 50, damping: 12 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <LinkAnimation
                    href={item.href}
                    label={item.label}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {removeEmoji(item.label.toUpperCase())}
                  </LinkAnimation>
                </motion.li>
              </MagneticEffect>
            ))}
          </motion.ul>
          <ul className="flex items-center gap-3">
            <MagneticEffect>
              <li className="p-2 rounded-full border hover:bg-black transition-colors duration-300">
                <a href="">
                  <FiGithub size={32} />
                </a>
              </li>
            </MagneticEffect>
            <MagneticEffect>
              <li className="p-2 rounded-full border hover:bg-black transition-colors duration-300">
                <a href="">
                  <SlSocialLinkedin size={32} />
                </a>
              </li>
            </MagneticEffect>
            <MagneticEffect>
              <li className="p-2 rounded-full border hover:bg-black transition-colors duration-300">
                <a href="">
                  <FaInstagram size={32} />
                </a>
              </li>
            </MagneticEffect>
            <MagneticEffect>
              <li className="p-2 rounded-full border hover:bg-black transition-colors duration-300">
                <a href="">
                  <PiTiktokLogoLight size={32} />
                </a>
              </li>
            </MagneticEffect>
          </ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default PillNav;
