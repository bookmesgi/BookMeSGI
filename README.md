# BookMeSGI
# Compiler Module : 
```shell 
cd apps/backoffice
npm i
npm run dev -d
```


# Chaîne de Librairies d'Occasion

## 1. Contexte du Projet
Le projet porte sur la création de l'identité visuelle et de l'interface d'une chaîne de librairies d'occasion implantée dans des villages. 
Le concept repose sur l'économie circulaire et le partage : les livres circulent entre les différents magasins du réseau. 

L'objectif de ce design est de retranscrire une atmosphère à la fois authentique et luxueuse. L'interface doit plonger l'utilisateur dans l'univers chaleureux des bibliothèques anciennes, en évoquant le charme du papier jauni par le temps et l'élégance des reliures traditionnelles.

---

## 2. Justification des Choix Graphiques

### Palette de Couleurs Principales
La palette a été construite pour évoquer la matérialité du livre ancien tout en conservant une touche premium grâce à l'utilisation de verts profonds.
* **Fond papier (`#F7E3B1`)** : Remplace le blanc pur. Cette teinte crème/beige rappelle directement les pages d'un vieux livre jauni, apportant chaleur et confort de lecture.
* **Brun reliure (`#6B4F3F`)** : Évoque le cuir et le carton des couvertures de livres anciens. Il apporte un côté ancré, artisanal et chaleureux.
* **Vert (`#677F67`) & Vert forêt sombre (`#2F3B2F`)** : Ces teintes végétales confèrent au design son aspect "luxueux" et institutionnel.
* **Noir encre (`#1E1E1E`)** : Utilisé pour les textes. Un noir légèrement adouci qui imite l'encre imprimée sur le papier, réduisant la fatigue visuelle.

### Couleurs de Statut (Validation, Erreur, Warning)
Pour ne pas briser l'harmonie vintage et luxueuse, les couleurs d'alerte ont été désaturées et assombries afin de s'intégrer naturellement à la palette, sans agresser l'œil :
* **Vert validation (`#4F6F55`)** : Un vert sauge/sapin cohérent avec les tons de la marque.
* **Rouge brique (`#8B3A2E`)** : Remplace le rouge vif habituel pour les erreurs. Il rappelle la cire des sceaux ou les marque-pages en tissu ancien.
* **Ocre foncé (`#B08A3C`)** : Un jaune/doré vieilli pour les avertissements, évoquant les dorures sur la tranche des livres.

### Typographie
L'association typographique joue sur le contraste entre la tradition littéraire et la lisibilité numérique moderne :
* Titres : Libre Baskerville (Serif)
    * Justification : C'est une police à empattements classique, très utilisée dans l'édition. Elle donne immédiatement un cachet littéraire, sérieux et élégant à l'interface.
* Corps du texte : (Sans-serif)
    * Justification : Une police sans empattement, douce et ronde. Elle garantit une excellente lisibilité pour les longs blocs de texte ou les descriptions de livres, tout en équilibrant le côté très traditionnel des titres.

### Formes et Interface (UI)
*   Arrondis : Assez légers. 
    * Justification : Des angles trop vifs feraient trop "numérique" et rigide, tandis que des arrondis trop prononcés feraient trop "moderne/startup". Un arrondi léger imite parfaitement les coins usés et cornés d'un livre qui a déjà été lu.
*   Espacements (Margins/Paddings) : Moyens.
    * Justification : Ils s'inspirent de la mise en page des livres classiques et des espacements trouvés sur la tranche d'un livre. Cela permet de créer une interface qui respire, structurée et calme.
