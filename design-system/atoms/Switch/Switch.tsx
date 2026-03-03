import "./Switch.css";
import type { InputHTMLAttributes } from "react";

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Switch({ label, className = "", id, ...props }: SwitchProps) {
  return (
    <label className={`switch ${className}`.trim()} htmlFor={id}>
      <input type="checkbox" id={id} className="switch-input" {...props} />
      <span className="switch-track">
        <span className="switch-thumb" />
      </span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
}
