import "./Input.css";
import type { InputHTMLAttributes } from "react";

type InputVariant = "default" | "error" | "warning" | "disabled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

export function Input({
  variant = "default",
  className = "",
  disabled,
  ...props
}: InputProps) {
  const variantClass = disabled
    ? "input-disabled"
    : variant !== "default"
      ? `input-${variant}`
      : "";

  return (
    <input
      className={`input ${variantClass} ${className}`.trim()}
      disabled={disabled}
      {...props}
    />
  );
}
