import { useState } from "react";
import {
  Button,
  BadgeIcon,
  Badge,
  Checkbox,
  Input,
  Select,
  Label,
  FormField,
  Textarea,
  Switch,
  Radio,
  Divider,
  Avatar,
  Card,
  Stat,
  Table,
  Modal,
  Pagination,
  useToast,
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
const BOOKS = [
  { id: 1, titre: "Le Petit Prince",     auteur: "Saint-Exupéry",      genre: "Roman",  stock: 12 },
  { id: 2, titre: "L'Étranger",           auteur: "Albert Camus",        genre: "Roman",  stock: 3  },
  { id: 3, titre: "Les Misérables",       auteur: "Victor Hugo",         genre: "Roman",  stock: 0  },
  { id: 4, titre: "Astérix le Gaulois",   auteur: "Goscinny & Uderzo",   genre: "BD",     stock: 7  },
  { id: 5, titre: "Pensées",              auteur: "Blaise Pascal",       genre: "Essai",  stock: 2  },
];

export default function ComponentsPage() {
  const [modalOpen, setModalOpen]   = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [radioValue, setRadioValue]   = useState("roman");
  const { toast } = useToast();

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

      {/* -------- TEXTAREA -------- */}
      <section className="ds-section" id="textarea">
        <h2 className="ds-section-title">Textarea</h2>
        <div className="ds-fields-grid">
          <FormField label="Description" htmlFor="desc">
            <Textarea id="desc" placeholder="Résumé du livre…" />
          </FormField>

          <FormField label="Notes internes" htmlFor="notes" error="Champ obligatoire.">
            <Textarea id="notes" variant="error" placeholder="Usage interne uniquement" />
          </FormField>

          <FormField label="Remarques" htmlFor="rem" warning="Limite de 500 caractères.">
            <Textarea id="rem" variant="warning" rows={3} />
          </FormField>

          <FormField label="Archivé" htmlFor="arch">
            <Textarea id="arch" disabled placeholder="Non modifiable" />
          </FormField>
        </div>
      </section>

      {/* -------- SWITCH / RADIO / DIVIDER -------- */}
      <section className="ds-section" id="controles">
        <h2 className="ds-section-title">Switch, Radio &amp; Divider</h2>

        <Divider label="Switch" />
        <div className="ds-row ds-row--col">
          <Switch label="Disponible en ligne" defaultChecked id="sw-1" />
          <Switch label="Notifications activées" id="sw-2" />
          <Switch label="Option désactivée" disabled id="sw-3" />
        </div>

        <Divider label="Radio" />
        <div className="ds-row ds-row--col">
          {(["roman", "essai", "bd", "poesie"] as const).map((v) => (
            <Radio
              key={v}
              id={`radio-${v}`}
              name="genre-radio"
              value={v}
              label={({ roman: "Roman", essai: "Essai", bd: "Bande dessinée", poesie: "Poésie" } as Record<string, string>)[v]}
              checked={radioValue === v}
              onChange={() => setRadioValue(v)}
            />
          ))}
        </div>

        <Divider />
        <Divider label="Séparateur labelé" />
      </section>

      {/* -------- AVATAR -------- */}
      <section className="ds-section" id="avatars">
        <h2 className="ds-section-title">Avatar</h2>
        <div className="ds-row">
          <Avatar name="Marie Dupont"      size="sm" />
          <Avatar name="Marie Dupont"      size="md" />
          <Avatar name="Marie Dupont"      size="lg" />
          <Avatar name="Jean-Pierre Martin" size="md" />
          <Avatar name="Alice"             size="md" />
          <Avatar                          size="md" />
        </div>
      </section>

      {/* -------- STAT -------- */}
      <section className="ds-section" id="stats">
        <h2 className="ds-section-title">Statistiques</h2>
        <div className="ds-fields-grid">
          <Stat label="Livres en catalogue"    value="1 284" trend="+ 42 ce mois"  trendDirection="up"      />
          <Stat label="Commandes en attente"   value="17"    trend="− 3 vs hier"   trendDirection="down"    />
          <Stat label="Taux de retour"         value="4,2 %" trend="stable"        trendDirection="neutral" />
          <Stat label="Chiffre d'affaires"     value="8 640 €" trend="+ 12 % ce mois" trendDirection="up"  />
        </div>
      </section>

      {/* -------- CARD -------- */}
      <section className="ds-section" id="cards">
        <h2 className="ds-section-title">Cards</h2>
        <div className="ds-fields-grid">
          <Card title="Fiche livre">
            <p style={{ margin: 0 }}>
              Le Comte de Monte-Cristo — Alexandre Dumas.<br />
              Roman d'aventures paru en 1844.
            </p>
          </Card>

          <Card
            title="Avec pied de page"
            footer={
              <>
                <Button variant="ghost">Annuler</Button>
                <Button variant="forest">Confirmer</Button>
              </>
            }
          >
            <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
              Carte avec actions dans le footer.
            </p>
          </Card>

          <Card>
            <p style={{ margin: 0 }}>Carte sans titre, contenu seul.</p>
          </Card>
        </div>
      </section>

      {/* -------- TABLE + PAGINATION -------- */}
      <section className="ds-section" id="table">
        <h2 className="ds-section-title">Table &amp; Pagination</h2>
        <Table
          columns={[
            { key: "titre",  header: "Titre" },
            { key: "auteur", header: "Auteur" },
            { key: "genre",  header: "Genre" },
            {
              key: "stock",
              header: "Stock",
              render: (row) => (
                <Badge variant={row.stock > 5 ? "success" : row.stock > 0 ? "warning" : "error"}>
                  {row.stock > 0 ? `${row.stock} ex.` : "Rupture"}
                </Badge>
              ),
            },
          ]}
          data={BOOKS}
          keyExtractor={(row) => String(row.id)}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={8}
          onPageChange={setCurrentPage}
        />
      </section>

      {/* -------- MODAL -------- */}
      <section className="ds-section" id="modal">
        <h2 className="ds-section-title">Modal</h2>
        <div className="ds-row">
          <Button variant="forest" onClick={() => setModalOpen(true)}>
            Ouvrir la modale
          </Button>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Supprimer le livre"
          footer={
            <>
              <Button variant="paper-outline" onClick={() => setModalOpen(false)}>
                Annuler
              </Button>
              <Button
                variant="error"
                onClick={() => {
                  setModalOpen(false);
                  toast("Livre supprimé.", "error");
                }}
              >
                Supprimer
              </Button>
            </>
          }
        >
          Êtes-vous sûr de vouloir supprimer <strong>Les Misérables</strong> du
          catalogue ? Cette action est irréversible.
        </Modal>
      </section>

      {/* -------- TOAST -------- */}
      <section className="ds-section" id="toast">
        <h2 className="ds-section-title">Toast</h2>
        <div className="ds-row">
          <Button variant="sage"          onClick={() => toast("Commande enregistrée avec succès.", "success")}>
            Succès
          </Button>
          <Button variant="error"         onClick={() => toast("Une erreur est survenue.", "error")}>
            Erreur
          </Button>
          <Button variant="paper-outline" onClick={() => toast("Stock faible pour ce titre.", "warning")}>
            Avertissement
          </Button>
          <Button variant="ghost"         onClick={() => toast("Synchronisation en cours…", "info")}>
            Info
          </Button>
        </div>
      </section>

    </main>
  );
}
