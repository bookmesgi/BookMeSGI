// CSS global
import "./global.css";
import "./helper.css";

/* ==========================================
   ATOMS
========================================== */
export { default as Button, BadgeIcon } from "./atoms/Button/Button";
export { Checkbox } from "./atoms/Checkbox/Checkbox";
export { Input } from "./atoms/Input/Input";
export { Select } from "./atoms/Select/Select";
export { Label, HelperText } from "./atoms/Label/Label";
export { Badge } from "./atoms/Badge/Badge";

/* ==========================================
   PARTICLES (molecules)
========================================== */
export { FormField } from "./particles/FormField/FormField";
// Alias rétro-compat
export { FormField as FormGroup } from "./particles/FormField/FormField";

/* ==========================================
   ORGANISMS
========================================== */
export { default as Navbar } from "./organisms/Navbar/Navbar";
// Alias rétro-compat (Menu → Navbar)
export { default as Menu } from "./organisms/Navbar/Navbar";

/* ==========================================
   UTILS
========================================== */
export const hello = () => "Hello, World!";