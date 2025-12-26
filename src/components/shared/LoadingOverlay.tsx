"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLayoutRef, useNavContext } from "~/context/LayoutRefContext";
import { loadingAnimationPageIn } from "~/utils/loadingAnimation";
import { removeEmoji } from "~/utils/removeEmoji";

export default function LoadingOverlay() {
  const { layoutRef } = useLayoutRef();
  const { currentNavLabel } = useNavContext();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const lastPath = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .toUpperCase();

  useEffect(() => {
    setMounted(true);
    const ctx = loadingAnimationPageIn({ layoutRef });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={layoutRef}
        className="fixed inset-0 z-[6] flex justify-center bg-yellow-500 items-center will-change-transform [-webkit-perspective:1000]"
      >
        <div className="nav-rounded-1 h-[120%] w-[100%] bg-yellow-500  -bottom-[60%]  rounded-[200%_200%] absolute "></div>
        <div className="nav-rounded-2 h-[120%] w-[100%] bg-yellow-500  -top-[60%]  rounded-[200%_200%] absolute "></div>
        <h1 className="md:text-9xl text-7xl font-mono text-black text-center font-bold will-change-transform [-webkit-perspective:1000]">
          {mounted
            ? removeEmoji(currentNavLabel.toUpperCase())
            : lastPath}
        </h1>
      </div>
    </>
  );
}
