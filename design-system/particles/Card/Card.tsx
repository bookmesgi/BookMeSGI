import "./Card.css";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Card({ title, children, footer, className = "" }: CardProps) {
  return (
    <div className={`card ${className}`.trim()}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
