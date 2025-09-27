'use client';

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const PillNav = dynamic(() => import('./common/PillNav'), {
  loading: () => <p className="text-white">Loading component ...</p>,
  ssr: false,
})

export default function Navbar() {
  const pathName = usePathname();

  const navigationLinks = [
            { label: "🚀 Home", href: "/" },
            { label: "🤩 About", href: "/about" },
            { label: "👨‍🎓 Education", href: "/education" },
            { label: "💪 Project", href: "/project" },
            { label: "✍ Resume", href: "/Resume" },
            { label: "📲 Contact", href: "/Contact" },
          ];

  return (
    <nav className="flex justify-center items-center p-5">
      <div className="relative flex justify-center bg-amber-300 p-7 md:w-[768px] w-xl rounded-xl border-2 border-b-[10px] border-black">
        <PillNav
          items={navigationLinks}
          activeHref={pathName}
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation= {false}
        />
      </div>
    </nav>
  );
}
