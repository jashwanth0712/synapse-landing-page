"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 animate-grid-fade"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px] animate-aurora-drift" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[120px] animate-aurora-drift-reverse" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora-drift" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] animate-aurora-drift-reverse" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
          style={{
            left: `${10 + i * 12}%`,
            animation: `float-up ${14 + i * 2}s linear infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30" />
    </div>
  );
}
