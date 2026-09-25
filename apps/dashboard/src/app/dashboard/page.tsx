"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Server, ArrowUpRight, Search, PlusCircle, ShieldCheck } from "lucide-react";

interface Guild {
  id: string;
  name: string;
  icon?: string | null;
  botPresent: boolean;
  memberCount: number;
}

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  // Liste de serveurs de démonstration et réels
  const guilds: Guild[] = [
    {
      id: "123456789012345678",
      name: "Mon Serveur Communautaire",
      icon: null,
      botPresent: true,
      memberCount: 142,
    },
    {
      id: "987654321098765432",
      name: "Serveur Gaming & Esport",
      icon: null,
      botPresent: true,
      memberCount: 89,
    },
    {
      id: "112233445566778899",
      name: "Serveur Développement & Projets",
      icon: null,
      botPresent: false,
      memberCount: 15,
    },
  ];

  const filtered = guilds.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Sélectionnez un Serveur
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Choisissez le serveur Discord que vous souhaitez administrer.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un serveur..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((guild) => (
          <div
            key={guild.id}
            className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-5 flex flex-col justify-between hover:border-zinc-700 transition"
          >
            <div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-lg text-zinc-300">
                  {guild.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 text-base">{guild.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-zinc-400">
                      {guild.memberCount} membres
                    </span>
                    <span className="text-zinc-600">&bull;</span>
                    {guild.botPresent ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                        <ShieldCheck className="w-3 h-3" />
                        Bot Actif
                      </span>
                    ) : (
                      <span className="text-[11px] text-zinc-500">Non configuré</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              {guild.botPresent ? (
                <Link
                  href={`/dashboard/${guild.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium transition"
                >
                  <span>Configurer</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  href={`https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "123"}&scope=bot%20applications.commands&permissions=8`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition border border-zinc-700/60"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Inviter le bot</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
