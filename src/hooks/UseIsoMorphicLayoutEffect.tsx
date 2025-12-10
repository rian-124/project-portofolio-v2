import { useEffect, useLayoutEffect } from "react";

const UseIsoMorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
export default UseIsoMorphicLayoutEffect;