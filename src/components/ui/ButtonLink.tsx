import Link, { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

interface ButtonLinkProps extends LinkProps, AnchorProps {
  children: React.ReactNode;
  className: string;
}

export default function ButtonLink({
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`p-2 ${className} border-black rounded-xl border-2 border-b-[10px] hover:scale-110 transition duration-200`
    }
    >
      {children}
    </Link>
  );
}
