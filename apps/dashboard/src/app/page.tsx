import Link from "next/link";
import {
  ShieldAlert,
  Sparkles,
  Ticket,
  Trophy,
  Sliders,
  Radio,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const modules = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-zinc-300" />,
      title: "Modération Puissante",
      description: "Bannissement, expulsion, mute temporaire, système d'avertissements (warns) et protection automatique anti-liens.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-zinc-300" />,
      title: "Messages de Bienvenue & Départ",
      description: "Messages entièrement personnalisables en texte ou embeds élégants avec attribution automatique d'auto-rôles.",
    },
    {
      icon: <Radio className="w-6 h-6 text-zinc-300" />,
      title: "Journalisation (Logs d'Audit)",
      description: "Suivi détaillé par salon dédié : messages supprimés/édités, arrivées, départs et sanctions de modération.",
    },
    {
      icon: <Ticket className="w-6 h-6 text-zinc-300" />,
      title: "Système de Support par Tickets",
      description: "Création instantanée de salons privés sur clic de bouton avec gestion des permissions et clôture automatique.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-zinc-300" />,
      title: "Niveaux & Système d'XP",
      description: "Récompensez l'activité des membres, commandes /rank et classement en direct sur le web.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-zinc-300" />,
      title: "Rôles par Réaction / Boutons",
      description: "Attribution de rôles en libre-service sans configuration complexe directement via des boutons interactifs.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Architecture modulaire prête à l'emploi
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Gérez votre serveur Discord simplement depuis une interface web
        </h1>

        <p className="text-base sm:text-lg text-zinc-400">
          Inspiré des plus grands bots comme DraftBot, configurez chaque module en temps réel sans taper la moindre ligne de commande complexe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold shadow-lg shadow-zinc-950/50 transition-all hover:scale-[1.02]"
          >
            <span>Accéder au Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://discord.com/developers/applications"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium border border-zinc-800 transition"
          >
            <span>Créer l'app Discord</span>
          </a>
        </div>
      </div>

      {/* Modules Highlights Grid */}
      <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center mb-4 border border-zinc-700/50">
                {mod.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{mod.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{mod.description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800/40 flex items-center text-xs text-zinc-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mr-1.5" />
              Configurable en ligne
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
