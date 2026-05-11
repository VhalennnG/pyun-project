"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, MoveLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 text-[var(--color-text-primary)] overflow-hidden">
      {/* Background with Grid and Radial Fade (Matching Home) */}
      <div className="fixed inset-0 z-[-2] bg-bg-grid-pattern pointer-events-none opacity-50" />
      <div className="fixed inset-0 z-[-1] bg-radial-fade pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-6 rounded-3xl glass-card border-2 border-accent-primary/30 relative z-10"
            >
              <AlertTriangle className="w-16 h-16 text-accent-primary drop-shadow-[0_0_15px_rgba(var(--color-accent-primary-rgb),0.5)]" />
            </motion.div>
            <div className="absolute -inset-4 bg-accent-primary/20 blur-2xl rounded-full z-0" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-8xl md:text-9xl font-black tracking-tighter mb-4 text-gradient"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold mb-6 tracking-tight"
        >
          Lost in the Stream?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed font-light italic"
        >
          Oops! The page you are looking for has drifted out of bounds or been
          removed from the broadcast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-text-primary)]/20 overflow-hidden uppercase tracking-wider text-sm"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <Home className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Back to Base</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 rounded-2xl glass-card border border-[var(--color-border)] font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-bg-secondary)] transition-all flex items-center gap-2"
          >
            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Previous Scene
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
    </main>
  );
}
