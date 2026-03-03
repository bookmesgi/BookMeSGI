import "./Radio.css";
import type { InputHTMLAttributes } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Radio({ label, className = "", id, ...props }: RadioProps) {
  return (
    <label className={`radio ${className}`.trim()} htmlFor={id}>
      <input type="radio" id={id} className="radio-input" {...props} />
      <span className="radio-dot" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
}
