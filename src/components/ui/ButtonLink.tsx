import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href?: string;
  children: React.ReactNode;
  className: string;
  onClick?: () => void
}

export default function ButtonLink({
  href,
  children,
  className,
  onClick
}: ButtonLinkProps) {
  return (
    <Link
      href={href || ""}
      className={`p-2 ${className} border-black rounded-xl border-2 border-b-[10px] hover:scale-110 transition duration-200`
    }
    onClick={onClick}
    >
      {children}
    </Link>
  );
}
