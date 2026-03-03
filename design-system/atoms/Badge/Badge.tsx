import "./Badge.css";
import type { ReactNode, MouseEventHandler } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "forest"
  | "sage"
  | "binding"
  | "info";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  selected?: boolean;
}

export function Badge({
  variant = "default",
  children,
  className = "",
  onClick,
  href,
  selected = false,
}: BadgeProps) {
  const base = `badge badge-${variant}`;
  const interactive = onClick || href ? " badge--interactive" : "";
  const selectedCls = selected ? " badge--selected" : "";
  const cls = `${base}${interactive}${selectedCls} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <span className={cls}>{children}</span>;
}
