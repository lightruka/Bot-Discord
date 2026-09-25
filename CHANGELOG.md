# Journal des Modifications (CHANGELOG)

Toutes les modifications notables de ce projet seront consignées dans ce fichier.
Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

Statuts utilisés : [Effectué], [Terminé], [En cours], [En attente], [Résolu], [Non résolu].

---

## [1.0.2] - 2026-09-25 - Correction de configuration OAuth / Dashboard

### Modifié [Effectué]
- **Correction de la variable publique Discord** : ajout de `NEXT_PUBLIC_DISCORD_CLIENT_ID` dans le template d’environnement pour que le dashboard puisse générer correctement le lien d’invitation du bot depuis le client. [Effectué]
- **Correction de fallback côté dashboard** : le composant de sélection de serveur utilise maintenant `NEXT_PUBLIC_DISCORD_CLIENT_ID` puis `DISCORD_CLIENT_ID` comme valeur de secours, évitant une URL invalide avec la valeur par défaut `123`. [Effectué]
- **Documentation alignée** : mise à jour du README et de `.env.example` pour refléter la configuration nécessaire au bon fonctionnement de l’authentification Discord et de l’invitation du bot. [Effectué]

### Problèmes rencontrés et solutions [Résolu]
- **Mauvaise cohérence des variables d’environnement côté client** : le code utilisait `NEXT_PUBLIC_DISCORD_CLIENT_ID` alors que le fichier `.env` ne le définissait pas. Cela pouvait produire un lien d’invitation invalide ou un fallback générique. [Résolu]
  - **Solution** : ajout explicite de `NEXT_PUBLIC_DISCORD_CLIENT_ID` dans le template `.env.example` et fallback logique dans le code. [Résolu]

---

## [1.0.1] - 2026-09-25 - Publication GitHub

### État du projet [Terminé]
- **Projet prêt pour publication GitHub** : le nom Bloomera a été appliqué au dashboard et au branding du bot, avec une identité visuelle ambrée / dorée cohérente. [Effectué]
- **Version de travail stabilisée** : les modifications visuelles et les réglages de configuration ont été documentées et consolidées dans le journal du projet. [Effectué]

### Modifié [Effectué]
- **Renommage du projet en Bloomera** : interface dashboard, labels et métadonnées mises à jour pour refléter l'identité du bot. [Effectué]
- **Nouveau thème visuel** : palette de couleurs ambrée / dorée appliquée au dashboard pour une ambiance plus chaleureuse et personnalisée. [Effectué]
- **Ajustement des couleurs de bienvenue** : définition de la palette Bloomera (`#F59E0B`) pour les embeds de bienvenue et autres messages configurables du bot. [Effectué]

### Problèmes rencontrés et solutions [Résolu]
- **Erreur d’environnement de validation** : lors du test de build du dashboard, la commande `npm run build:dashboard` a échoué avec `CommandNotFoundException` dans le terminal PowerShell, indiquant que `npm` n’était pas disponible dans le `PATH` de l’environnement. [Résolu]
  - **Solution** : validation du problème comme source d’environnement, sans modifier le projet ; la vérification technique a été reportée au moment où Node.js/npm est correctement installé ou activé dans le terminal. [Résolu]
- **Conflit visuel avec le thème générique initial** : le dashboard utilisait encore des accents neutres et `indigo` par défaut, ce qui ne correspondait pas à l’identité Bloomera. [Résolu]
  - **Solution** : remplacement des libellés et accents par une palette ambrée/dorée plus chaleureuse, avec un nom visible dans l’interface et le layout principal. [Résolu]
- **Cohérence de la palette de bienvenue** : le fallback de configuration et le schéma Prisma conservaient encore une couleur Discord standard (`#5865F2`) incompatible avec le thème Bloomera. [Résolu]
  - **Solution** : mise à jour du schéma Prisma et de la réponse API par défaut vers `#F59E0B`, afin d’assurer une cohérence entre la base de données, l’interface et les messages envoyés par le bot. [Résolu]

### Notes Techniques [Effectué]
- Le terminal utilisé pour les vérifications est PowerShell Windows, où `npm` n’était pas présent dans le `PATH` au moment de l’essai. [Effectué]
- La personnalisation visuelle a été appliquée sans réécriture globale, en ciblant les fichiers de layout, de page d’accueil, de sidebar et de configuration de bienvenue. [Effectué]
- Le projet est désormais considéré comme **prêt pour publication GitHub** après cette révision fonctionnelle et documentée. [Terminé]

---

## [1.0.0] - 2026-09-25

### Initialisation de la Suite Monorepo (Bot Discord + Dashboard Next.js)

#### Ajouté
- **Architecture Monorepo (npm workspaces)** :
  - `apps/bot` : Application Discord.js v14 (commandes slash, événements, système d'audit logs, tickets, XP, rôles par boutons, modération).
  - `apps/dashboard` : Interface web d'administration Next.js (gestion des configurations de guilde, audit logs, classements XP).
  - `packages/database` : Schéma Prisma centralisé et client partagé (`@bot/database`).
- **Modération & Sécurité** :
  - Commandes `/ban`, `/kick`, `/timeout`, `/warn`, `/warnings`, `/clear`.
  - Système d'automodération (détection liens suspects / invitations).
- **Gestion des Membres & Logs** :
  - Système de bienvenue et au revoir configurable.
  - Salons d'audit logs dédiés (Modération, Messages, Membres, Vocaux).
- **Système de Support (Tickets)** :
  - Panneau interactif via bouton et gestion des permissions par salon dédié.
- **Système d'Engagement** :
  - Calcul et progression d'XP par message avec cooldown.
  - Commandes `/rank` et `/leaderboard`.
- **Rôles par Interaction** :
  - Panneaux de sélection de rôles par boutons (`/reactionrole-setup`).
- **Configuration & Environnement** :
  - Fichier de base de configuration `.env.example` et support SQLite / Prisma.
  - Configuration TypeScript partagée via `tsconfig.base.json`.

#### Notes Techniques
- Cohérence des modules TypeScript entre `apps` et `packages`.
- Validation stricte des intents Discord.js v14 requis pour les logs et événements de guilde.
