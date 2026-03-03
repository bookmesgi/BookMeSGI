import {
  Button,
  BadgeIcon,
  Badge,
  Checkbox,
  Input,
  Select,
  Label,
  FormField,
} from "@design-system";

function Swatch({ bg, name }: { bg: string; name: string }) {
  return (
    <div className="ds-swatch-item">
      <div className="ds-swatch" style={{ backgroundColor: bg }} />
      <span className="ds-swatch-label">{name}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="showcase">
      <div className="ds-section">
        <p className="ds-subtitle">
          BookSGI, notre librairie en ligne, votre destination pour découvrir de
          nouveaux livres et auteurs. N'hésitez pas à explorer notre catalogue
          et à commander vos livres préférés !
        </p>
      </div>

        <h2 className="ds-section-title">Recherche</h2>
        <div className="ds-fields-grid">
          <FormField label="Titre du livre" htmlFor="titre">
            <Input id="titre" placeholder="Ex. : Le Comte de Monte-Cristo" />
          </FormField>

          <FormField label="Auteur" htmlFor="auteur">
            <Input id="auteur" placeholder="Prénom Nom" />
          </FormField>
          <FormField label="Genre" htmlFor="genre">
            <Select
              id="genre"
              options={[
                { value: "roman", label: "Roman" },
                { value: "essai", label: "Essai" },
                { value: "bd", label: "Bande dessinée" },
                { value: "poesie", label: "Poésie" },
              ]}
              placeholder="Sélectionner un genre…"
            />
          </FormField>
        </div>

      <section className="ds-section" id="badges">
        <h2 className="ds-section-title">Statut</h2>
        <div className="ds-row">
          <Badge variant="forest">Disponible</Badge>
          <Badge variant="success">En stock</Badge>
          <Badge variant="warning">Bientôt épuisé</Badge>
          <Badge variant="sage">Nouveauté</Badge>
          <Badge variant="binding">Coup de cœur</Badge>
        </div>
      </section>
    </main>
  );
}
