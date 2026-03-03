import "./FormField.css";
import { Label, HelperText } from "../../atoms/Label/Label";
import type { ReactNode } from "react";

interface FormFieldProps {
  label?: string;
  helper?: string;
  error?: string;
  warning?: string;
  required?: boolean;
  optional?: boolean;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  helper,
  error,
  warning,
  required,
  optional,
  htmlFor,
  children,
  className = "",
}: FormFieldProps) {
  const helperContent = error || warning || helper;
  const helperVariant = error ? "error" : warning ? "warning" : "default";
  const labelVariant = error
    ? "error"
    : warning
      ? "warning"
      : required
        ? "required"
        : optional
          ? "optional"
          : "default";

  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <Label htmlFor={htmlFor} variant={labelVariant}>
          {label}
        </Label>
      )}
      {children}
      {helperContent && (
        <HelperText variant={helperVariant}>{helperContent}</HelperText>
      )}
    </div>
  );
}
