import "./Select.css";
import type { SelectHTMLAttributes } from "react";

type SelectVariant = "default" | "error" | "warning" | "disabled";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: SelectVariant;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({
  variant = "default",
  options,
  placeholder,
  className = "",
  disabled,
  ...props
}: SelectProps) {
  const variantClass = disabled
    ? "select-disabled"
    : variant !== "default"
      ? `select-${variant}`
      : "";
  const wrapperVariantClass = disabled
    ? "select-wrapper-disabled"
    : variant !== "default"
      ? `select-wrapper-${variant}`
      : "";

  return (
    <div className={`select-wrapper ${wrapperVariantClass}`.trim()}>
      <select
        className={`select ${variantClass} ${className}`.trim()}
        disabled={disabled}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
