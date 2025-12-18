import gsap from "gsap";
import React from "react";

export const loadingAnimationPageIn = ({
  layoutRef,
}: {
  layoutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const h1 = layoutRef.current?.querySelector("h1");
  const ctx = gsap.context(() => {
    gsap.to(layoutRef.current, {
      y: "-140%",
      duration: 1.5,
      ease: "power4.Out",
    });
    gsap.to(".nav-rounded-1", {
      scaleY: 0,
      duration: 0.6,
      ease: "power4.Out",
    });
    if (h1) {
      gsap.to(h1, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  });
  return ctx;
};

export const loadingAnimationPageOut = ({
  layoutRef,
  onComplete,
}: {
  layoutRef: React.RefObject<HTMLDivElement | null>;
  onComplete?: () => void;
}) => {
  gsap.context(() => {
    if (layoutRef?.current) {
      const h1 = layoutRef.current.querySelector("h1");
      gsap.fromTo(
        layoutRef.current,
        { y: "140%" },
        {
          y: "0%",
          duration: 1,
          ease: "power3.inOut",
          onComplete,
        }
      );

      gsap.fromTo(
        ".nav-rounded-2",
        { scale: 0 },
        { scale: 2, duration: 0.5, ease: "power3.inOut" }
      );

      if (h1) {
        gsap.fromTo(
          h1,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
  });
};
