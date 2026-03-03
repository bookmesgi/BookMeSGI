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

/* ==========================================
   Petit sous-composant : swatch couleur
========================================== */
function Swatch({ bg, name }: { bg: string; name: string }) {
  return (
    <div className="ds-swatch-item">
      <div className="ds-swatch" style={{ backgroundColor: bg }} />
      <span className="ds-swatch-label">{name}</span>
    </div>
  );
}

/* ==========================================
   Page composants — Design System showcase
========================================== */
export default function ComponentsPage() {
  return (
    <main className="showcase">

      {/* En-tête */}
      <div className="ds-section">
        <h1 className="ds-title">Design System — Librairie</h1>
        <p className="ds-subtitle">
          Référentiel des composants visuels. Utilise le bouton dans la barre
          de navigation pour basculer entre le mode clair et le mode sombre.
        </p>
      </div>

      {/* -------- PALETTE -------- */}
      <section className="ds-section" id="palette">
        <h2 className="ds-section-title">Palette</h2>
        <div className="ds-swatches">
          <Swatch bg="var(--color-paper)" name="Paper" />
          <Swatch bg="var(--color-binding)" name="Binding" />
          <Swatch bg="var(--color-sage)" name="Sage" />
          <Swatch bg="var(--color-forest)" name="Forest" />
          <Swatch bg="var(--color-ink)" name="Ink" />
          <Swatch bg="var(--color-success)" name="Succès" />
          <Swatch bg="var(--color-error)" name="Erreur" />
          <Swatch bg="var(--color-warning)" name="Alerte" />
        </div>
      </section>

      {/* -------- BOUTONS -------- */}
      <section className="ds-section" id="boutons">
        <h2 className="ds-section-title">Boutons</h2>

        <Label>Verts — Forest</Label>
        <div className="ds-row">
          <Button variant="forest">Forest plein</Button>
          <Button variant="forest-outline">Forest outline</Button>
          <Button variant="primary">Primary (CTA)</Button>
        </div>

        <Label>Cuirs — Binding</Label>
        <div className="ds-row">
          <Button variant="binding">Binding plein</Button>
          <Button variant="binding-outline">Binding outline</Button>
        </div>

        <Label>Sauges — Sage</Label>
        <div className="ds-row">
          <Button variant="sage">Sage plein</Button>
          <Button variant="sage-outline">Sage outline</Button>
        </div>

        <Label>Clairs — Paper</Label>
        <div className="ds-row">
          <Button variant="paper">Paper plein</Button>
          <Button variant="paper-outline">Paper outline</Button>
        </div>

        <Label>Utilitaires</Label>
        <div className="ds-row">
          <Button variant="error">Supprimer</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Désactivé</Button>
        </div>

        <Label>Badges statut (avec icône)</Label>
        <div className="ds-row">
          <Button variant="badge-forest" icon={<BadgeIcon />}>
            Nouveau
          </Button>
          <Button variant="badge-warning" icon={<BadgeIcon />}>
            Promo
          </Button>
          <Button variant="badge-error" icon={<BadgeIcon />}>
            Rupture
          </Button>
        </div>
      </section>

      {/* -------- BADGES -------- */}
      <section className="ds-section" id="badges">
        <h2 className="ds-section-title">Badges de statut</h2>
        <div className="ds-row">
          <Badge variant="forest">Disponible</Badge>
          <Badge variant="success">En stock</Badge>
          <Badge variant="warning">Bientôt épuisé</Badge>
          <Badge variant="error">Rupture</Badge>
          <Badge variant="sage">Nouveauté</Badge>
          <Badge variant="binding">Coup de cœur</Badge>
          <Badge variant="info">À commander</Badge>
          <Badge variant="default">Inconnu</Badge>
        </div>
      </section>

      {/* -------- CHAMPS -------- */}
      <section className="ds-section" id="catalogue">
        <h2 className="ds-section-title">Champs de saisie</h2>
        <div className="ds-fields-grid">
          <FormField label="Titre du livre" htmlFor="titre">
            <Input id="titre" placeholder="Ex. : Le Comte de Monte-Cristo" />
          </FormField>

          <FormField label="Auteur" htmlFor="auteur">
            <Input id="auteur" placeholder="Prénom Nom" />
          </FormField>

          <FormField
            label="ISBN"
            htmlFor="isbn"
            helper="Format : 978-X-XXXX-XXXX-X"
          >
            <Input id="isbn" placeholder="978-…" />
          </FormField>

          <FormField label="Quantité" htmlFor="qte">
            <Input id="qte" type="number" placeholder="0" />
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

          <FormField label="Langue" htmlFor="langue">
            <Select
              id="langue"
              options={[
                { value: "fr", label: "Français" },
                { value: "en", label: "Anglais" },
                { value: "es", label: "Espagnol" },
              ]}
              placeholder="Sélectionner…"
            />
          </FormField>
        </div>

        {/* États de validation */}
        <div className="ds-fields-grid" style={{ marginTop: "0.5rem" }}>
          <FormField
            label="Prix (€)"
            htmlFor="prix"
            error="Valeur invalide — entrez un nombre positif."
          >
            <Input id="prix" variant="error" defaultValue="abc" />
          </FormField>

          <FormField
            label="Référence interne"
            htmlFor="ref"
            warning="Ce code existe déjà dans le catalogue."
          >
            <Input id="ref" variant="warning" defaultValue="LIV-0042" />
          </FormField>

          <FormField label="Fournisseur" htmlFor="fourn">
            <Input id="fourn" disabled placeholder="Non renseigné" />
          </FormField>
        </div>
      </section>

      {/* -------- CASES À COCHER -------- */}
      <section className="ds-section" id="checkboxes">
        <h2 className="ds-section-title">Cases à cocher</h2>
        <div className="ds-row ds-row--col">
          <Checkbox label="Disponible en ligne" defaultChecked />
          <Checkbox label="Réservé en magasin" />
          <Checkbox label="Ouvrage traduit" defaultChecked />
          <Checkbox label="Accepter les conditions générales" variant="error" />
          <Checkbox label="Me notifier par e-mail" variant="warning" />
          <Checkbox label="Option désactivée" disabled />
        </div>
      </section>

      {/* -------- FORMULAIRE COMPLET -------- */}
      <section className="ds-section" id="commandes">
        <h2 className="ds-section-title">Formulaire — Nouvelle commande</h2>
        <div className="ds-form">
          <div className="ds-form-row">
            <FormField label="Prénom" required htmlFor="f-prenom">
              <Input id="f-prenom" placeholder="Marie" />
            </FormField>
            <FormField label="Nom" required htmlFor="f-nom">
              <Input id="f-nom" placeholder="Dupont" />
            </FormField>
          </div>

          <FormField label="Adresse e-mail" required htmlFor="f-email">
            <Input id="f-email" type="email" placeholder="marie@exemple.fr" />
          </FormField>

          <FormField label="Livre commandé" required htmlFor="f-livre">
            <Select
              id="f-livre"
              options={[
                { value: "1", label: "Le Petit Prince" },
                { value: "2", label: "L'Étranger" },
                { value: "3", label: "Les Misérables" },
              ]}
              placeholder="Choisir un titre…"
            />
          </FormField>

          <FormField
            label="Remarques"
            optional
            htmlFor="f-remarques"
            helper="Dédicace, format, livraison…"
          >
            <Input id="f-remarques" placeholder="Ex. : dédicace souhaitée" />
          </FormField>

          <Checkbox label="Je souhaite recevoir la newsletter" />

          <div className="ds-form-actions">
            <Button variant="paper-outline">Annuler</Button>
            <Button variant="forest">Enregistrer la commande</Button>
          </div>
        </div>
      </section>

    </main>
  );
}
