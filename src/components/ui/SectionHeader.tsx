import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  isUppercase: boolean;
}

export default function SectionHeader({
  children,
  isUppercase,
}: SectionHeaderProps) {
  return (
    <div className="py-10 md:w-[16rem]">
      <div className="space-y-3 flex items-center flex-col">
        <div className="py-[2px] bg-yellow-500 w-42 h-1 rounded-full"></div>
        <div className="py-[3px] bg-white w-42 h-1 rounded-full self-start"></div>
      </div>
      <div className="p-3">
        <h1 className={`text-4xl ${isUppercase ? "uppercase" : ""} text-yellow-500 text-center font-mono font-bold`}>
          {children}
        </h1>
      </div>
    </div>
  );
}
