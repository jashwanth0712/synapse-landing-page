"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "synapse_learn",
    params: "title, content, tags, domain?, language?, framework?",
    returns: "Plan",
    cost: "Free",
    costColor: "text-emerald-400",
    description: "Upload an implementation plan to the knowledge base",
  },
  {
    name: "synapse_search",
    params: "query, tags?",
    returns: "PlanSearchResult[]",
    cost: "0.2 XLM",
    costColor: "text-cyan-400",
    description: "Search plans with full-text BM25 ranking",
  },
  {
    name: "synapse_recall",
    params: "id",
    returns: "Full plan markdown",
    cost: "1 XLM",
    costColor: "text-violet-400",
    description: "Retrieve full plan content with atomic payment",
  },
];

const cliCommands = [
  { cmd: "synapse-mcp", desc: "Start MCP server (stdio)" },
  { cmd: "synapse-mcp dashboard", desc: "Show wallet, contributions, usage" },
  { cmd: "synapse-mcp wallet", desc: "Print address & balance" },
  { cmd: "synapse-mcp fund", desc: "Fund wallet via Friendbot" },
  { cmd: "synapse-mcp stats", desc: "Show usage statistics" },
  { cmd: "synapse-mcp migrate", desc: "Migrate SQLite to Soroban" },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            API Reference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            MCP Tools & CLI
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            Everything your AI agent needs to interact with the knowledge
            oracle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* MCP Tools */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 mb-4">
              MCP Tools
            </h3>
            <div className="space-y-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-zinc-800 bg-[#0A0A0A] p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <code className="font-mono text-sm font-bold text-white">
                      {tool.name}
                    </code>
                    <span
                      className={`font-mono text-xs ${tool.costColor} px-2 py-0.5 rounded border border-current/20`}
                    >
                      {tool.cost}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs font-mono text-zinc-500 space-y-1">
                    <div>
                      <span className="text-zinc-600">params:</span>{" "}
                      {tool.params}
                    </div>
                    <div>
                      <span className="text-zinc-600">returns:</span>{" "}
                      {tool.returns}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CLI Commands */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 mb-4">
              CLI Commands
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-800 bg-[#0A0A0A] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-zinc-500 font-mono">
                  terminal
                </span>
              </div>
              <div className="p-4 space-y-3 font-mono text-sm">
                {cliCommands.map((c, i) => (
                  <motion.div
                    key={c.cmd}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                  >
                    <code className="text-emerald-400 whitespace-nowrap">
                      $ {c.cmd}
                    </code>
                    <span className="text-zinc-500 text-xs">{c.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Config example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 rounded-xl border border-zinc-800 bg-[#0A0A0A] p-5"
            >
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-3">
                Environment Variables
              </h4>
              <div className="font-mono text-xs text-zinc-400 space-y-1">
                <div>
                  <span className="text-amber-400">SYNAPSE_STORAGE_MODE</span>
                  <span className="text-zinc-600">
                    ={" "}
                  </span>
                  <span>local | soroban | dual</span>
                </div>
                <div>
                  <span className="text-amber-400">SYNAPSE_VALIDATION_ENABLED</span>
                  <span className="text-zinc-600">
                    ={" "}
                  </span>
                  <span>true</span>
                </div>
                <div>
                  <span className="text-amber-400">SYNAPSE_VALIDATION_THRESHOLD</span>
                  <span className="text-zinc-600">
                    ={" "}
                  </span>
                  <span>60</span>
                </div>
                <div>
                  <span className="text-amber-400">SYNAPSE_SIMILARITY_CHECK</span>
                  <span className="text-zinc-600">
                    ={" "}
                  </span>
                  <span>true</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
