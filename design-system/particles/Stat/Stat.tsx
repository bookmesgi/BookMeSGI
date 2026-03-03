import "./Stat.css";
import type { ReactNode } from "react";

type StatTrend = "up" | "down" | "neutral";

interface StatProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: StatTrend;
  icon?: ReactNode;
  className?: string;
}

export function Stat({
  label,
  value,
  trend,
  trendDirection = "neutral",
  icon,
  className = "",
}: StatProps) {
  return (
    <div className={`stat ${className}`.trim()}>
      {icon && <div className="stat-icon">{icon}</div>}
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      {trend && (
        <p className={`stat-trend stat-trend--${trendDirection}`}>{trend}</p>
      )}
    </div>
  );
}
