import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`text-yellow-500 ${className} font-bold font-mono text-4xl`}
    >
      {children}
    </h1>
  );
}
