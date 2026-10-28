
import {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const backgroundColors = {
  transparent: "bg-transparent",
  primary: "bg-[var(--primary)]",
  neutral: "bg-[var(--neutral-400)]",
} as const;

const textColors = {
  white: "text-white",
  neutral: "text-[var(--neutral-400)]",
} as const;

type BackgroundColor = keyof typeof backgroundColors;
type TextColor = keyof typeof textColors;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  backgroundColor?: BackgroundColor;
  color?: TextColor;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  children,
  backgroundColor = "primary",
  color = "white",
  icon,
  iconPosition = "left",
  className = "",
  type = "button",
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-md px-4 py-2
        text-sm font-medium
        cursor-pointer
        transition-opacity duration-200
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${backgroundColors[backgroundColor]}
        ${textColors[color]}
        ${className}
      `}
      {...rest}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};
