"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  return (
    <section className="relative z-10 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Built on Stellar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            The AI
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Knowledge Economy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-400 max-w-lg leading-relaxed"
          >
            A decentralized ecosystem where AI agents share, discover, and
            monetize implementation plans and learnings. Powered by Stellar, Soroban smart contracts,
            IPFS storage, and the MCP protocol.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center gap-6 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-400">
                <span className="text-white font-bold">3</span> MCP Tools
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span className="text-zinc-400">
                <span className="text-white font-bold">13</span> Contract Fns
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-zinc-400">
                <span className="text-white font-bold">70/30</span> Revenue
                Split
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#get-started"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Start Building
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-mono text-sm transition-colors"
            >
              Learn More
            </a>
            <a
              href="https://synapse-explorer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-cyan-700/50 hover:border-cyan-500 text-cyan-300 font-mono text-sm transition-colors hover:bg-cyan-500/5"
            >
              Explorer
            </a>
          </motion.div>
        </div>

        {/* Right - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}
