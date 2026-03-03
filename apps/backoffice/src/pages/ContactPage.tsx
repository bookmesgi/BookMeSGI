import { useState, FormEvent } from "react";
import { FormField, Input, Select, Button } from "../../../../design-system";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulaire envoyé:", formData);
      alert("Votre message a été envoyé avec succès !");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (
    field: keyof typeof formData,
    value: string
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

        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", marginTop: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`input ${errors.message ? "input-error" : ""}`}
              placeholder="Votre message..."
              rows={6}
              style={{ resize: "vertical", fontFamily: "inherit" }}
            />
          </FormField>

          <div style={{ marginTop: "1.5rem" }}>
            <Button type="submit" variant="forest">
              Envoyer le message
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}