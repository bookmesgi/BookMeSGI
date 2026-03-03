import "./Button.css";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "forest"
  | "forest-outline"
  | "paper"
  | "paper-outline"
  | "primary"
  | "disabled"
  | "badge-forest"
  | "badge-error"
  | "badge-warning";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  variant = "forest",
  children,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const isBadge = variant.startsWith("badge-");

  const variantClass = disabled ? "btn-disabled" : `btn-${variant}`;
  const badgeClass = isBadge ? "btn-badge" : "";

  return (
    <button
      className={`btn ${variantClass} ${badgeClass} ${className}`.trim()}
      disabled={disabled}
      {...props}>
      {icon && <span className="btn-badge-icon">{icon}</span>}
      {children}
    </button>
  );
}

// Icône badge par défaut
export const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);
