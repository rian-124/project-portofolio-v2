"use client";

import { loadingAnimationPagein } from "@/utils/loadingAnimation";
import { useEffect, useState } from "react";
import LoadingOverlay from "./components/common/LoadingOverlay";

export default function Template({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    loadingAnimationPagein();

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative">
      {/* Overlay full screen */}
      <LoadingOverlay />
      {/* Semua konten page */}
      {showContent && <div className="relative z-0">{children}</div>}
    </div>
  );
}
