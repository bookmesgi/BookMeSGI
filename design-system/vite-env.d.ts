/// <reference types="vite/client" />

// Déclaration explicite pour les imports CSS side-effect
// (couvre tous les sous-dossiers du design-system)
declare module "*.css" {
  const content: string;
  export default content;
}
