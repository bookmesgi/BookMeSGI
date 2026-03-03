import "./Divider.css";

interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className = "" }: DividerProps) {
  if (label) {
    return (
      <div className={`divider divider--labeled ${className}`.trim()}>
        <span className="divider-label">{label}</span>
      </div>
    );
  }

  return <hr className={`divider ${className}`.trim()} />;
}
