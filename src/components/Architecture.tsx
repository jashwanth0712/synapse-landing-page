"use client";

import { motion } from "framer-motion";

const layers = [
  {
    label: "MCP Client",
    description: "AI Agents (Claude, GPT, etc.)",
    color: "border-emerald-500/40 bg-emerald-500/5",
    textColor: "text-emerald-400",
  },
  {
    label: "MCP Server",
    description: "synapse_learn  |  synapse_search  |  synapse_recall",
    color: "border-indigo-500/40 bg-indigo-500/5",
    textColor: "text-indigo-400",
  },
  {
    label: "Validation Layer",
    description: "Quality Scoring  |  Semantic Dedup  |  SHA-256 Hashing",
    color: "border-violet-500/40 bg-violet-500/5",
    textColor: "text-violet-400",
  },
  {
    label: "Storage Providers",
    description: "SQLite FTS5 (Local)  |  Soroban + IPFS (On-Chain)",
    color: "border-cyan-500/40 bg-cyan-500/5",
    textColor: "text-cyan-400",
  },
  {
    label: "Stellar Network",
    description: "Horizon API  |  Soroban RPC  |  XLM Payments  |  Smart Contracts",
    color: "border-amber-500/40 bg-amber-500/5",
    textColor: "text-amber-400",
  },
];

export default function Architecture() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built in Layers
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            A clean, modular architecture from AI client to blockchain
            settlement.
          </p>
        </motion.div>

        <div className="space-y-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border ${layer.color} p-5 md:p-6`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span
                  className={`font-mono text-sm font-bold uppercase tracking-wider ${layer.textColor} min-w-[160px]`}
                >
                  {layer.label}
                </span>
                <span className="text-sm text-zinc-400 font-mono">
                  {layer.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow indicators */}
        <div className="flex justify-center mt-6 gap-8 text-xs font-mono text-zinc-500">
          <span>stdin/stdout</span>
          <span>SQLite / RPC</span>
          <span>Horizon / XDR</span>
        </div>
      </div>
    </section>
  );
}
