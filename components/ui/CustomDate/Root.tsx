"use client";

import { ReactNode } from "react";

interface RootProps {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="relative flex items-center justify-between text-[var(--neutral-400)] text-xs bg-[var(--menu-hover)] w-[195px] shrink-0 rounded-md">
      {children}
    </div>
  );
};
