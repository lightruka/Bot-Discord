# Journal des Modifications (CHANGELOG)

Toutes les modifications notables de ce projet seront consignées dans ce fichier.
Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [Non publié] - À venir

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
