import "./Textarea.css";
import type { TextareaHTMLAttributes } from "react";

type TextareaVariant = "default" | "error" | "warning";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
}

export function Textarea({
  variant = "default",
  rows = 4,
  className = "",
  disabled,
  ...props
}: TextareaProps) {
  const variantClass = disabled
    ? "textarea-disabled"
    : variant !== "default"
      ? `textarea-${variant}`
      : "";

  return (
    <textarea
      rows={rows}
      className={`textarea ${variantClass} ${className}`.trim()}
      disabled={disabled}
      {...props}
    />
  );
}
