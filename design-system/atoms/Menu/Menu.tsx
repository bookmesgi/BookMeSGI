import "./Menu.css";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuProps {
  items?: MenuItem[];
  brandName?: string;
  className?: string;
}

export default function Menu({
  items = [
    { label: "ACCUEIL", href: "#" },
    { label: "COLLECTIONS", href: "#" },
    { label: "CONTACT", href: "#" },
  ],
  brandName = "LIBRAIRIE",
  className = "",
}: MenuProps) {
  const hasContent = items.length > 0 || brandName;

  return (
    <nav className={`menu ${!hasContent ? "menu-empty" : ""} ${className}`}>
      {brandName && (
        <div className="menu-brand">
          <span className="menu-logo">
            <span className="menu-logo-icon">L</span>
            {brandName.slice(1)}
          </span>
        </div>
      )}

      {items.length > 0 && (
        <ul className="menu-nav">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="menu-link font-heading text-paper">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
