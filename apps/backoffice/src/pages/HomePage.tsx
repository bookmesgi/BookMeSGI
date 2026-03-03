import {
  Badge,
  Input,
  Select,
  FormField,
  Card,
  Pagination,
} from "@design-system";
import { useState } from "react";

type StatusBadge = "success" | "warning" | "sage" | "binding";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState<StatusBadge | null>(
    null,
  );

  const toggleStatus = (status: StatusBadge) =>
    setSelectedStatus((prev) => (prev === status ? null : status));

  return (
    <main className="showcase">
      <div className="ds-section">
        <p className="ds-subtitle">
          BookSGI, notre librairie en ligne, votre destination pour découvrir de
          nouveaux livres et auteurs. N'hésitez pas à explorer notre catalogue
          et à commander vos livres préférés !
        </p>
      </div>

      <section className="ds-section" id="recherche">
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
      </section>

      <section className="ds-section" id="badges">
        <h2 className="ds-section-title">Statut</h2>
        <div className="ds-row">
          <Badge
            variant="success"
            onClick={() => toggleStatus("success")}
            selected={selectedStatus === "success"}>
            En stock
          </Badge>
          <Badge
            variant="warning"
            onClick={() => toggleStatus("warning")}
            selected={selectedStatus === "warning"}>
            Bientôt épuisé
          </Badge>
          <Badge
            variant="sage"
            onClick={() => toggleStatus("sage")}
            selected={selectedStatus === "sage"}>
            Nouveauté
          </Badge>
          <Badge
            variant="binding"
            onClick={() => toggleStatus("binding")}
            selected={selectedStatus === "binding"}>
            Coup de cœur
          </Badge>
        </div>
      </section>

      <section className="ds-section" id="cards">
        <h2 className="ds-section-title">Cards</h2>
        <div className="ds-fields-grid">
          <Card title="Hunger Games: L'embrasement">
            <p style={{ margin: 0 }}>
              Roman d'aventures paru en 2010.
              <br />
              <br />
              <b>Suzanne Collins.</b>
            </p>
            <br />
            <Badge variant="binding">Coup de cœur</Badge>
          </Card>
          <Card title="Le Comte de Monte-Cristo">
            <p style={{ margin: 0 }}>
              {" "}
              Roman d'aventures paru en 1844.
              <br />
              <br />
              <b>Alexandre Dumas.</b>
            </p>
            <br />
            <Badge variant="success">En stock</Badge>
          </Card>
          <Card title="La femme de ménage">
            <p style={{ margin: 0 }}>
              Roman d'aventures paru en 1930.
              <br />
              <br />
              <b>Georges Simenon.</b>
            </p>
            <br />
            <br />
            <Badge variant="sage">Nouveauté</Badge>
          </Card>
          <Card title="Le Petit Prince">
            <p style={{ margin: 0 }}>
              Roman d'aventures paru en 1943.
              <br />
              <br />
              <b>Antoine de Saint-Exupéry.</b>
            </p>
            <br />
            <Badge variant="warning">Bientôt épuisé</Badge>
          </Card>
          <Card title="L'Étranger">
            <p style={{ margin: 0 }}>
              Roman d'aventures paru en 1942.
              <br />
              <br />
              <b>Albert Camus.</b>
            </p>
            <br />
            <Badge variant="success">En stock</Badge>
          </Card>
          <Card title="Le Rouge et le Noir">
            <p style={{ margin: 0 }}>
              Roman d'aventures paru en 1830.
              <br />
              <br />
              <b>Stendhal.</b>
            </p>
            <br />
            <Badge variant="binding">Coup de cœur</Badge>
          </Card>
        </div>
        <div className="ds-row ds-row--center">
          <Pagination
            currentPage={currentPage}
            totalPages={8}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}
