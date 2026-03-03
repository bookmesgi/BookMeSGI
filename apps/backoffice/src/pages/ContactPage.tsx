import { useState, type FormEvent } from "react";
import { FormField, Input, Select, Button, Radio, Checkbox, Textarea, useToast } from "@design-system";

export default function ContactPage() {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    acceptConditions: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.civility) {
      newErrors.civility = "Veuillez sélectionner votre civilité";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.subject) {
      newErrors.subject = "Le sujet est requis";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }
    if (!formData.acceptConditions) {
      newErrors.acceptConditions = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulaire envoyé:", formData);
      
      // Afficher le toast de succès
      toast("Votre message a été envoyé avec succès !", "success");
      
      // Réinitialiser le formulaire
      setFormData({
        civility: "",
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        acceptConditions: false,
      });
    } else {
      toast("Veuillez corriger les erreurs dans le formulaire.", "error");
    }
  };

  const handleChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const subjectOptions = [
    { value: "info", label: "Demande d'information" },
    { value: "support", label: "Support technique" },
    { value: "partnership", label: "Partenariat" },
    { value: "other", label: "Autre" },
  ];

  return (
    <main className="showcase">
      <div className="ds-section">
        <h1 className="ds-title">Contact</h1>
        <p className="ds-subtitle">
          Pour toute question ou demande d'assistance, remplissez le formulaire ci-dessous.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <FormField
            label="Civilité"
            required
            error={errors.civility}
          >
            <div className="ds-row">
              <Radio
                id="civility-mr"
                name="civility"
                value="mr"
                label="Monsieur"
                checked={formData.civility === "mr"}
                onChange={(e) => handleChange("civility", e.target.value)}
              />
              <Radio
                id="civility-mme"
                name="civility"
                value="mme"
                label="Madame"
                checked={formData.civility === "mme"}
                onChange={(e) => handleChange("civility", e.target.value)}
              />
            </div>
          </FormField>

          <div className="ds-form-row">
            <FormField
              label="Prénom"
              required
              htmlFor="firstName"
              error={errors.firstName}
            >
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                variant={errors.firstName ? "error" : "default"}
                placeholder="Votre prénom"
              />
            </FormField>

            <FormField
              label="Nom"
              required
              htmlFor="lastName"
              error={errors.lastName}
            >
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                variant={errors.lastName ? "error" : "default"}
                placeholder="Votre nom"
              />
            </FormField>
          </div>

          <FormField
            label="Email"
            required
            htmlFor="email"
            error={errors.email}
          >
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              variant={errors.email ? "error" : "default"}
              placeholder="votre.email@exemple.com"
            />
          </FormField>

          <FormField
            label="Sujet"
            required
            htmlFor="subject"
            error={errors.subject}
          >
            <Select
              id="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              variant={errors.subject ? "error" : "default"}
              options={subjectOptions}
              placeholder="Sélectionnez un sujet"
            />
          </FormField>

          <FormField
            label="Message"
            required
            htmlFor="message"
            error={errors.message}
            helper="Décrivez votre demande en détail"
          >
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              variant={errors.message ? "error" : "default"}
              placeholder="Votre message..."
              rows={6}
            />
          </FormField>

          <FormField
            error={errors.acceptConditions}
          >
            <Checkbox
              label="J'accepte les conditions générales d'utilisation et la politique de confidentialité"
              checked={formData.acceptConditions}
              onChange={(e) => handleChange("acceptConditions", e.target.checked)}
              variant={errors.acceptConditions ? "error" : "default"}
            />
          </FormField>

          <div className="ds-form-actions">
            <Button type="submit" variant="forest">
              Envoyer le message
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}