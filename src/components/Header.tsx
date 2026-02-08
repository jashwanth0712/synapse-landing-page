"use client";

import { Brain, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-indigo-400" />
          <span className="font-mono text-lg font-bold tracking-tight">
            SYNAPSE
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#stellar" className="hover:text-white transition-colors">
            Stellar
          </a>
          <a href="#tools" className="hover:text-white transition-colors">
            Tools
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jashwanth0712/synapse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#get-started"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-mono transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
