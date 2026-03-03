import "./Badge.css";
import type { ReactNode } from "react";

/**
 * Badge — indicateur visuel de statut (non cliquable).
 * Pour les boutons avec icône, utiliser le composant Button.
 */

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
}

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}
