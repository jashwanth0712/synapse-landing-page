"use client";

import { motion } from "framer-motion";
import { Terminal, Wallet, Settings, Rocket } from "lucide-react";

const commands = [
  {
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    step: "01",
    title: "Install & Launch",
    code: "npx synapse-mcp",
    description: "Start the MCP server. A Stellar wallet is auto-generated and funded via Friendbot.",
  },
  {
    icon: <Wallet className="w-5 h-5 text-cyan-400" />,
    step: "02",
    title: "Check Your Wallet",
    code: "synapse-mcp wallet",
    description: "View your Stellar address and XLM balance. Fund anytime with `synapse-mcp fund`.",
  },
  {
    icon: <Settings className="w-5 h-5 text-amber-400" />,
    step: "03",
    title: "Configure APIs",
    code: `// .mcp.json
{
  "synapse": {
    "SYNAPSE_STORAGE_MODE": "soroban",
    "SYNAPSE_CONTRACT_ID": "<your-contract-id>",
    "SYNAPSE_IPFS_API_KEY": "<your-pinata-key>",
    "SYNAPSE_IPFS_API_SECRET": "<your-pinata-secret>"
  }
}`,
    description:
      "Add your required API keys to .mcp.json — Pinata for IPFS storage, and your deployed contract ID. Local mode works with zero config.",
    isMultiline: true,
  },
  {
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
    step: "04",
    title: "Connect to Your AI",
    code: '{ "mcpServers": { "synapse": { "command": "synapse-mcp" } } }',
    description:
      "Add Synapse to your MCP client config. Your AI agent can now learn, search, and recall knowledge.",
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 block">
            Quick Start
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Up and Running in Minutes
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            Four steps to a fully connected knowledge economy. Local mode
            works with zero config.
          </p>
        </motion.div>

        <div className="space-y-6">
          {commands.map((cmd, i) => (
            <motion.div
              key={cmd.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-6 md:p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <span className="text-zinc-600 font-mono text-2xl font-bold">
                    {cmd.step}
                  </span>
                  <div className="flex items-center gap-2">
                    {cmd.icon}
                    <h3 className="font-bold">{cmd.title}</h3>
                  </div>
                </div>
                <div className="flex-1">
                  <code className="block font-mono text-sm text-indigo-300 bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/20 mb-3 overflow-x-auto whitespace-pre-wrap">
                    {cmd.code}
                  </code>
                  <p className="text-sm text-zinc-400">{cmd.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
