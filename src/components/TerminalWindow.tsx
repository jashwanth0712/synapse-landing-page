"use client";

import { useEffect, useState } from "react";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "info" | "dim";
}

const lines: TerminalLine[] = [
  { text: "$ synapse-mcp", type: "command" },
  { text: "  Synapse MCP Server v1.0.0", type: "info" },
  { text: "  Storage: local (SQLite + FTS5)", type: "dim" },
  { text: "  Wallet: G4KX...R7YQ (funded)", type: "dim" },
  { text: "  Network: Stellar Testnet", type: "dim" },
  { text: "", type: "dim" },
  { text: '> synapse_learn("React SSR patterns")', type: "command" },
  { text: "  Validating content quality...", type: "dim" },
  { text: "  Quality score: 87/100", type: "success" },
  { text: "  Checking semantic similarity...", type: "dim" },
  { text: "  No duplicates found", type: "success" },
  { text: "  Plan stored: plan_a3f9c2", type: "success" },
  { text: "", type: "dim" },
  { text: '> synapse_search("authentication")', type: "command" },
  { text: "  Payment: 0.2 XLM -> Stellar", type: "info" },
  { text: "  Found 12 plans (BM25 ranked)", type: "success" },
  { text: "", type: "dim" },
  { text: '> synapse_recall("plan_b7e1d4")', type: "command" },
  { text: "  Payment: 1 XLM (0.7 contributor, 0.3 platform)", type: "info" },
  { text: "  Content retrieved from IPFS", type: "success" },
];

const typeColors: Record<string, string> = {
  command: "text-emerald-400",
  output: "text-zinc-300",
  success: "text-indigo-400",
  info: "text-cyan-400",
  dim: "text-zinc-500",
};

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-indigo-500/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs text-zinc-500 font-mono">
          synapse-mcp
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm leading-relaxed h-[380px] overflow-hidden scrollbar-hide">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${typeColors[line.type]} whitespace-pre`}>
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-typing-cursor" />
        )}
      </div>
    </div>
  );
}
