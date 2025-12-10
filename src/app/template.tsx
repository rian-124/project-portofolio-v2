"use client";
import { useEffect, useState } from "react";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import { useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const pathname = useRouter();

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Overlay full screen */}
      <LoadingOverlay />
      {/* Semua konten page */}
      {showContent && <div id="main-content" className="relative z-0">{children}</div>}
    </div>
  );
}
