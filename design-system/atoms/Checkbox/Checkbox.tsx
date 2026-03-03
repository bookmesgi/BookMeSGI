import "./Checkbox.css";
import type { InputHTMLAttributes } from "react";

type CheckboxVariant = "default" | "error" | "warning" | "disabled";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: CheckboxVariant;
  label?: string;
}

export function Checkbox({
  variant = "default",
  label,
  className = "",
  disabled,
  ...props
}: CheckboxProps) {
  const variantClass = disabled
    ? "checkbox-disabled"
    : variant !== "default"
      ? `checkbox-${variant}`
      : "";

  return (
    <label className={`checkbox ${variantClass} ${className}`.trim()}>
      <input
        type="checkbox"
        className="checkbox-input"
        disabled={disabled}
        {...props}
      />
      <span className="checkbox-box">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}
