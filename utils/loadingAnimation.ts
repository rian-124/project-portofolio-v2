import gsap from "gsap";
import React from "react";

export const loadingAnimationPageIn = ({
  layoutRef,
}: {
  layoutRef: React.RefObject<HTMLDivElement | null>;
}) => {
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
    gsap.to("h1", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
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
    const tl = gsap.timeline({ onComplete });

    if (layoutRef) {
      const h1 = layoutRef.current?.querySelector("h1");

      tl.fromTo(
        layoutRef.current,
        { y: "300%" },
        {
          y: "0%",
          duration: 2,
          ease: "power3.inOut",
        }
      );

      tl.fromTo(
        ".nav-rounded-2",
        {
          scaleY: 0.7,
          duration: 4,
        },
        { scaleY: 0, duration: 1, ease: "power3.inOut" }
      );

      if (h1) {
        gsap.fromTo(
          h1,
          {
            opacity: 0,
            duration: 4,
          },
          {
            opacity: 2,
            duration: 4,
            ease: "power2.out",
          }
        );
      }
    } else {
      if (onComplete) onComplete();
    }
  });
};
