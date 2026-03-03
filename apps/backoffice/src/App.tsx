import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Button } from "@design-system";
import "./App.css";
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <BrowserRouter>
      {/* Navbar fixée en haut */}
      <Navbar
        brandName="LIBRAIRIE"
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact"},
          { label: "Composants", href: "/components" }
        ]}
        actions={
          <Button
            variant="paper"
            onClick={toggleTheme}
            aria-label="Changer de thème">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </Button>
        }
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
