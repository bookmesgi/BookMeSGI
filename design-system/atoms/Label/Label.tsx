import "./Label.css";
import type { LabelHTMLAttributes, ReactNode } from "react";

type LabelVariant = "default" | "required" | "optional" | "error" | "warning";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: LabelVariant;
  children: ReactNode;
}

export function Label({
  variant = "default",
  children,
  className = "",
  ...props
}: LabelProps) {
  const variantClass = variant !== "default" ? `label-${variant}` : "";

  return (
    <label className={`label ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}

type HelperVariant = "default" | "error" | "warning";

interface HelperTextProps {
  variant?: HelperVariant;
  children: ReactNode;
  className?: string;
}

export function HelperText({
  variant = "default",
  children,
  className = "",
}: HelperTextProps) {
  const variantClass = variant !== "default" ? `helper-${variant}` : "";

  return (
    <span className={`helper-text ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}
