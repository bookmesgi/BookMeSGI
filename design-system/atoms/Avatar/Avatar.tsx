import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, src, size = "md", className = "" }: AvatarProps) {
  return (
    <div
      className={`avatar avatar--${size} ${className}`.trim()}
      aria-label={name}
      title={name}
    >
      {src ? (
        <img src={src} alt={name ?? ""} className="avatar-img" />
      ) : (
        <span className="avatar-initials">{name ? getInitials(name) : "?"}</span>
      )}
    </div>
  );
}
