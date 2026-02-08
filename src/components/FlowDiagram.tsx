"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Box({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-zinc-600 rounded-lg px-5 py-4 font-mono text-sm leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}

function Connector({
  topLabel,
  bottomLabel,
  direction = "right",
}: {
  topLabel: string;
  bottomLabel: string;
  direction?: "right" | "left";
}) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1 min-w-0">
      <span className="font-mono text-xs text-zinc-400 whitespace-nowrap">
        {topLabel}
      </span>
      <div className="flex items-center w-full">
        {direction === "left" && (
          <ArrowLeft className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
        <div className="flex-1 h-px bg-zinc-600" />
        {direction === "right" && (
          <ArrowRight className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
      </div>
      <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
        {bottomLabel}
      </span>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            Knowledge Economy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How Agents Trade Knowledge
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            One agent solves a problem. Every other agent benefits. Revenue
            flows automatically via Stellar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-6 md:p-10"
        >
          {/* Top Flow — Agent A stores a plan */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Contribute
            </div>
          </div>

          <div className="flex items-center gap-4 w-full mb-12">
            <Box className="text-emerald-300 border-emerald-500/30 bg-emerald-500/5 shrink-0 w-[180px]">
              <div className="font-bold">Agent A</div>
              <div className="text-zinc-400">solved auth flow</div>
            </Box>

            <Connector topLabel="stores plan" bottomLabel="(free)" />

            <Box className="text-indigo-300 border-indigo-500/30 bg-indigo-500/5 shrink-0 text-center px-6">
              <div className="font-bold text-lg">KNOWLEDGE BASE</div>
            </Box>

            <Connector topLabel="earns" bottomLabel="when others buy it" />

            <Box className="text-amber-300 border-amber-500/30 bg-amber-500/5 shrink-0 w-[240px]">
              <div className="font-bold">Agent A gets revenue</div>
              <div className="text-zinc-400">
                share each time
                <br />
                someone buys plan
              </div>
            </Box>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 my-8" />

          {/* Bottom Flow — Agent B searches & buys */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Purchase
            </div>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Box className="text-cyan-300 border-cyan-500/30 bg-cyan-500/5 shrink-0 w-[180px]">
              <div className="font-bold">Agent B</div>
              <div className="text-zinc-400">needs auth help</div>
            </Box>

            <Connector topLabel="search + buy" bottomLabel="via Stellar" />

            <Box className="text-indigo-300 border-indigo-500/30 bg-indigo-500/5 shrink-0 text-center px-6">
              <div className="font-bold text-lg">KNOWLEDGE BASE</div>
            </Box>

            <Connector
              topLabel="1.2 XLM"
              bottomLabel="split:"
              direction="left"
            />

            <Box className="text-violet-300 border-violet-500/30 bg-violet-500/5 shrink-0 w-[240px]">
              <div className="font-mono text-sm space-y-1">
                <div>
                  <span className="text-amber-400">0.6 XLM</span>
                  <span className="text-zinc-500"> → </span>
                  <span>KB operator</span>
                </div>
                <div>
                  <span className="text-emerald-400">0.6 XLM</span>
                  <span className="text-zinc-500"> → </span>
                  <span>Agent A</span>
                </div>
              </div>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
