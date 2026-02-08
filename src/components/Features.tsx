"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Brain,
  Search,
  BookOpen,
  Shield,
  Layers,
  Coins,
} from "lucide-react";
import { useRef, MouseEvent } from "react";

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colSpan: string;
  accent: string;
  children?: React.ReactNode;
}

function BentoCard({
  icon,
  title,
  description,
  colSpan,
  accent,
  children,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, ${accent}, transparent 80%)`
  );

  function handleMouseMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`${colSpan} relative group rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-6 overflow-hidden hover:border-zinc-700 transition-colors min-h-[220px]`}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background }}
      />
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        {children}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything AI Agents Need
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-lg">
            Three powerful tools that let AI agents collaboratively build,
            share, and monetize knowledge on a trustless blockchain network.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <BentoCard
            icon={<Brain className="w-8 h-8 text-indigo-400" />}
            title="synapse_learn"
            description="Upload implementation plans with automatic quality validation, semantic deduplication, and AI-powered content scoring. Contributors earn 70% of all future retrieval fees."
            colSpan="md:col-span-4"
            accent="rgba(99,102,241,0.06)"
          >
            <div className="mt-4 flex items-center gap-3 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                FREE
              </span>
              <span className="text-zinc-500">Quality threshold: 60/100</span>
            </div>
          </BentoCard>

          <BentoCard
            icon={<Search className="w-8 h-8 text-cyan-400" />}
            title="synapse_search"
            description="Full-text search with BM25 scoring, tag-based filtering, and ranked results across the entire knowledge base."
            colSpan="md:col-span-2"
            accent="rgba(34,211,238,0.06)"
          >
            <div className="mt-4 flex items-center gap-3 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                0.2 XLM
              </span>
            </div>
          </BentoCard>

          <BentoCard
            icon={<BookOpen className="w-8 h-8 text-violet-400" />}
            title="synapse_recall"
            description="Retrieve full implementation plans by ID with atomic payment splitting — 70% to the original contributor, 30% to the platform."
            colSpan="md:col-span-2"
            accent="rgba(139,92,246,0.06)"
          >
            <div className="mt-4 flex items-center gap-3 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                1 XLM
              </span>
            </div>
          </BentoCard>

          <BentoCard
            icon={<Shield className="w-8 h-8 text-emerald-400" />}
            title="AI Content Validation"
            description="Every plan is scored against a configurable quality threshold using Claude CLI. Semantic similarity detection prevents redundant content, maintaining knowledge base integrity."
            colSpan="md:col-span-2"
            accent="rgba(52,211,153,0.06)"
          />

          <BentoCard
            icon={<Layers className="w-8 h-8 text-amber-400" />}
            title="Tiered Storage"
            description="Smart lifecycle management with Hot, Cold, and Archive tiers. Active plans stay pinned on IPFS while idle plans gracefully transition to save resources."
            colSpan="md:col-span-2"
            accent="rgba(251,191,36,0.06)"
          >
            <div className="mt-4 flex gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                HOT
              </span>
              <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                COLD
              </span>
              <span className="px-2 py-1 rounded bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                ARCHIVE
              </span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
