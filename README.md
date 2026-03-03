# BookMeSGI

# Compiler Module : 
```shell 
cd apps/backoffice
npm i
npm run dev -d
```

# ⚛️ Introduction à l'Atomic Design

L'**Atomic Design** (le Design Atomique) est une méthodologie conçue par Brad Frost. Elle est très utilisée pour créer et maintenir des **Design Systems** et structurer les interfaces utilisateur, en particulier avec des bibliothèques orientées composants (React, Vue.js, Angular, etc.).

Le principe s'inspire de la chimie : dans la nature, la matière est composée d'atomes, qui s'assemblent pour former des molécules, qui elles-mêmes forment des organismes plus complexes. 

Cette méthodologie divise une interface web en **5 niveaux de complexité distincts** :

## 1. Les Atomes (Atoms)
Ce sont les éléments constitutifs de base de votre interface. Ils ne peuvent pas être décomposés davantage sans perdre leur utilité.
* **Exemples :** Un bouton (`<button>`), un champ de saisie texte (`<input>`), un label, une icône, ou même des notions abstraites comme une palette de couleurs.
* **Côté code :** Un composant `Button` très simple et générique.

## 2. Les Molécules (Molecules)
Une molécule est un groupe d'atomes assemblés pour accomplir une fonction simple. Elles ont une responsabilité précise et commencent à avoir leur propre comportement.
* **Exemples :** Un **formulaire de recherche**. Il est composé d'un label (atome), d'un champ de saisie (atome) et d'un bouton de validation (atome). 
* **Côté code :** Un composant `SearchBar` qui intègre les atomes précédents.

## 3. Les Organismes (Organisms)
Les organismes sont des ensembles plus complexes de molécules et/ou d'atomes qui forment une section distincte et autonome d'une interface.
* **Exemples :** Le **Header (en-tête)** d'un site web. Il peut contenir un logo (atome), un menu de navigation (molécule) et le formulaire de recherche (molécule).
* **Côté code :** Un composant `SiteHeader` qui assemble tous ces éléments pour créer le haut de la page.

## 4. Les Templates (Gabarits)
Ici, on quitte l'analogie de la chimie. Les templates assemblent des organismes pour former la structure d'une page. On se concentre sur le **layout** (la mise en page) et l'architecture de l'information, mais **sans les vraies données** (on utilise du faux texte comme le *Lorem Ipsum* et des images de remplacement).
* **Exemples :** Un modèle (squelette) d'article de blog avec un header en haut, une zone pour le titre, une zone pour l'image, une grande colonne pour le texte et une barre latérale.

## 5. Les Pages
C'est le niveau final et concret. C'est une instance d'un template dans lequel on a injecté de **vraies données** (textes, images définitives, données issues d'une API, etc.). C'est le rendu final vu par l'utilisateur.
* **Exemples :** La page finale de l'article "Comment apprendre le Javascript" avec son vrai contenu.

---

### 💡 Pourquoi utiliser cette méthode ?

* **Réutilisabilité :** Vous créez un composant "Atome" parfait (ex: un bouton), et vous le réutilisez partout sans dupliquer le code.
* **Cohérence visuelle :** Si vous devez changer la couleur principale de tous les boutons de votre application, vous ne le faites qu'à un seul endroit (dans l'atome).
* **Facilité de test :** Il est très simple de tester un atome ou une molécule de manière isolée.
* **Langage commun :** Cela permet aux designers (sur Figma par exemple) et aux développeurs d'utiliser le même vocabulaire et la même structure.