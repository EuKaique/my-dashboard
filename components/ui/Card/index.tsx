"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div
      className="bg-[var(--menu-surface)] rounded-lg p-4 border border-[var(--neutral-400)] w-full"
    >
      {props.children}
    </div>
  );
};
