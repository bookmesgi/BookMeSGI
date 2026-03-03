import "./Navbar.css";
import type { ReactNode } from "react";

interface NavbarItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavbarProps {
  items?: NavbarItem[];
  brandName?: string;
  brandIcon?: ReactNode;
  /** Slot pour ajouter des boutons d'action (connexion, panier…) */
  actions?: ReactNode;
  className?: string;
}

export default function Navbar({
  items = [],
  brandName = "LIBRAIRIE",
  brandIcon,
  actions,
  className = "",
}: NavbarProps) {
  return (
    <nav className={`navbar ${className}`.trim()} aria-label="Navigation principale">
      {/* Marque / Logo */}
      <div className="navbar-brand">
        <span className="navbar-logo">
          {brandIcon ?? (
            <>
              <span className="navbar-logo-icon">{brandName[0]}</span>
              {brandName.slice(1)}
            </>
          )}
        </span>
      </div>

      {/* Liens de navigation */}
      {items.length > 0 && (
        <ul className="navbar-nav" role="list">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={`navbar-link${item.active ? " navbar-link-active" : ""}`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Actions (boutons, avatar…) */}
      {actions && <div className="navbar-actions">{actions}</div>}
    </nav>
  );
}
