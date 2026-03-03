import {
  hello,
  Menu,
  Button,
  BadgeIcon,
  Checkbox,
  Input,
  Select,
} from "@bookmesgi/designsystem";
import "@bookmesgi/designsystem/dist/index.css";
import "./App.css";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="content">
        <h1>Backoffice</h1>
        <p>{hello()}</p>

        <section>
          <h2>Boutons</h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}>
            <Button variant="forest">BUTTON</Button>
            <Button variant="forest-outline">BUTTON</Button>
            <Button variant="paper">BUTTON</Button>
            <Button variant="paper-outline">BUTTON</Button>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="badge-forest" icon={<BadgeIcon />}>
              SINGLE
            </Button>
            <Button variant="badge-error" icon={<BadgeIcon />}>
              SINGLE
            </Button>
            <Button variant="badge-warning" icon={<BadgeIcon />}>
              SINGLE
            </Button>
          </div>
        </section>

        <section>
          <h2>Formulaires</h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox variant="error" defaultChecked />
            <Checkbox variant="warning" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "300px",
            }}>
            <Input placeholder="Texte par défaut..." />
            <Input variant="error" defaultValue="Erreur" />
            <Input variant="warning" defaultValue="Attention" />
            <Select
              options={[
                { value: "roman", label: "Roman" },
                { value: "essai", label: "Essai" },
              ]}
              placeholder="Sélectionner..."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
