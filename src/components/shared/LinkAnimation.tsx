"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useLayoutRef, useNavContext } from "~/context/LayoutRefContext";
import { loadingAnimationPageOut } from "~/utils/loadingAnimation";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

interface LinkAnimationProps extends LinkProps, AnchorProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export default function LinkAnimation({
  children,
  label,
  ...props
}: LinkAnimationProps) {
  const { layoutRef } = useLayoutRef();
  const { setCurrentNavLabel } = useNavContext();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (props.href === pathname) return;

    setCurrentNavLabel(`${label}`);

    loadingAnimationPageOut({
      layoutRef,
      onComplete: () => {
        router.push(`${props.href}`);
      },
    });
  };

  return (
    <Link {...props} onNavigate={(e) => handleNavigate(e)}>
      {children}
    </Link>
  );
}
