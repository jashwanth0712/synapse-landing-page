"use client";

import { motion } from "framer-motion";
import {
  Database,
  FileCode2,
  Globe,
  Lock,
  ArrowRightLeft,
  HardDrive,
} from "lucide-react";

const integrations = [
  {
    icon: <FileCode2 className="w-5 h-5" />,
    title: "Soroban Smart Contracts",
    description:
      "13 on-chain functions handling plan storage, purchases, contributor payments, and tier management — all deployed on Stellar Testnet.",
    color: "text-indigo-400",
  },
  {
    icon: <ArrowRightLeft className="w-5 h-5" />,
    title: "Atomic Payment Splitting",
    description:
      "Every recall triggers an atomic 70/30 payment split via Stellar Asset Contract. Contributors earn instantly, trustlessly.",
    color: "text-emerald-400",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Horizon API",
    description:
      "Native XLM transfers on testnet for search and recall payments. Auto-funding via Friendbot for new wallets.",
    color: "text-cyan-400",
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "IPFS via Pinata",
    description:
      "Full plan content is stored on IPFS with CID-based addressing. Pinning managed by storage tier — Hot stays pinned, Archive gets unpinned.",
    color: "text-violet-400",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "On-Chain Authorization",
    description:
      "Soroban require_auth() ensures only valid signers can store or modify plans. XDR serialization for secure transaction building.",
    color: "text-amber-400",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Dual Storage Modes",
    description:
      "Run local (SQLite), on-chain (Soroban + IPFS), or both. Seamless migration path with built-in CLI tooling.",
    color: "text-rose-400",
  },
];

export default function StellarIntegration() {
  return (
    <section id="stellar" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Stellar at the Core
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            Built on Stellar&apos;s fast, low-cost blockchain with Soroban
            smart contracts for trustless knowledge commerce.
          </p>
        </motion.div>

        {/* Contract highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">
                Soroban Contract (Testnet)
              </h3>
              <p className="text-sm text-zinc-400">
                Deployed and verified on Stellar Testnet
              </p>
            </div>
            <code className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 break-all">
              CAWHVSCOXZLHOY2AI2V5FYDCUKDFGDVH7MIWLELJDXRE432QZEZ2PCZI
            </code>
          </div>
        </motion.div>

        {/* Integration grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-zinc-800 bg-[#0A0A0A] p-6 hover:border-zinc-700 transition-colors"
            >
              <div className={`${item.color} mb-3`}>{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
