"use client";

import { usePathname } from "next/navigation";
import PillNav from "../shared/PillNav";

export default function Navbar() {
  const pathName = usePathname();

  const navigationLinks = [
    { label: "🚀 Home", href: "/" },
    { label: "🤩 About", href: "/about" },
    { label: "👨‍🎓 Education", href: "/education" },
    { label: "💪 Project", href: "/project" },
    { label: "📲 Contact", href: "/contact" },
  ];

  return (
    <PillNav
      items={navigationLinks}
      activeHref={pathName}
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={false}
    />
  );
}
