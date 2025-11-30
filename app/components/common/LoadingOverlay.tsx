import { useLayoutRef, useNavContext } from "@/context/LayoutRefContext";
import UseIsoMorphicLayoutEffect from "@/hooks/UseIsoMorphicLayoutEffect";
import { loadingAnimationPageIn } from "@/utils/loadingAnimation";
import { usePathname } from "next/navigation";

export default function LoadingOverlay() {
  const { layoutRef } = useLayoutRef();
  const { currentNavLabel } = useNavContext();

  UseIsoMorphicLayoutEffect(() => {
    const ctx = loadingAnimationPageIn({ layoutRef });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={layoutRef}
        className="fixed inset-0 z-[6] flex justify-center bg-yellow-500 items-center will-change-transform [-webkit-perspective:1000]"
      >
        <div className="nav-rounded-1 h-[120%] w-[100%] bg-yellow-500  -bottom-[60%]  rounded-[200%_200%] absolute "></div>
        <div className="nav-rounded-2 h-[120%] w-[100%] bg-yellow-500  -top-[60%]  rounded-[200%_200%] absolute "></div>
        <h1 className="text-9xl font-mono text-black text-center font-bold will-change-transform [-webkit-perspective:1000]">
          {currentNavLabel.toUpperCase() || "🚀 HOME"}
        </h1>
      </div>
    </>
  );
}
