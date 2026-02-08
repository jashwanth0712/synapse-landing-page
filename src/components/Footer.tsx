"use client";

import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/60 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-400" />
          <span className="font-mono text-sm font-bold tracking-tight">
            SYNAPSE
          </span>
          <span className="text-zinc-600 text-sm ml-2">
            AI Knowledge Oracle on Stellar
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#features" className="hover:text-zinc-300 transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-zinc-300 transition-colors"
          >
            How It Works
          </a>
          <a href="#stellar" className="hover:text-zinc-300 transition-colors">
            Stellar
          </a>
          <a href="#tools" className="hover:text-zinc-300 transition-colors">
            Tools
          </a>
        </div>

        <div className="text-xs text-zinc-600 font-mono">
          Built on Stellar Testnet
        </div>
      </div>
    </footer>
  );
}
