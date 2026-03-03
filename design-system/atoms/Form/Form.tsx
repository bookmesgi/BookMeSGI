import "./Form.css";
import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

/* ==========================================
   CHECKBOX
========================================== */

type CheckboxVariant = "default" | "error" | "warning" | "disabled";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
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
        <svg viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}

/* ==========================================
   INPUT
========================================== */

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

/* ==========================================
   SELECT
========================================== */

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
        {...props}>
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

/* ==========================================
   FORM GROUP (Layout helper)
========================================== */

interface FormGroupProps {
  label?: string;
  helper?: string;
  error?: string;
  warning?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormGroup({
  label,
  helper,
  error,
  warning,
  children,
  className = "",
}: FormGroupProps) {
  const helperText = error || warning || helper;
  const helperClass = error
    ? "form-helper-error"
    : warning
      ? "form-helper-warning"
      : "";

  return (
    <div className={`form-group ${className}`.trim()}>
      {label && <label className="form-label">{label}</label>}
      {children}
      {helperText && (
        <span className={`form-helper ${helperClass}`.trim()}>
          {helperText}
        </span>
      )}
    </div>
  );
}
