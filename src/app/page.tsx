"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Zap,
  Sliders,
  ExternalLink,
  Github,
  Sun,
  Moon,
  Globe,
  Monitor,
} from "lucide-react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { dict, type Lang } from "@/lib/dict";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  const t = dict[lang];

  const triggerDownload = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string,
  ) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="relative min-h-screen text-[var(--color-text-primary)] overflow-hidden font-sans selection:bg-accent-primary/30">
      {/* Background with Grid and Radial Fade */}
      <div className="fixed inset-0 z-[-2] bg-bg-grid-pattern pointer-events-none opacity-50" />
      <div className="fixed inset-0 z-[-1] bg-radial-fade pointer-events-none" />

      {/* Top Navigation Toggles */}
      <div className="relative z-50 flex justify-end p-6 gap-4 max-w-7xl mx-auto w-full">
        {/* Theme Switcher (Sliding) */}
        <div
          onClick={toggleTheme}
          className="relative h-10 w-20 rounded-full glass-card cursor-pointer p-1 flex items-center hover:shadow-[0_0_20px_rgba(var(--color-accent-primary-rgb),0.2)] transition-all border border-[var(--color-border)] shadow-inner"
        >
          {/* Background Icons (Static/Dim) */}
          <div className="flex justify-between w-full px-2.5 z-0 opacity-30">
            <Sun className="w-3.5 h-3.5 text-[var(--color-text-primary)]" />
            <Moon className="w-3.5 h-3.5 text-[var(--color-text-primary)]" />
          </div>

          {/* Sliding Thumb with Active Icon */}
          <motion.div
            className="absolute h-8 w-8 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-accent-primary-rgb),0.4)] flex items-center justify-center z-10"
            animate={{
              x: theme === "light" ? 0 : 40,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? (
                  <Sun className="w-4 h-4 text-white" />
                ) : (
                  <Moon className="w-4 h-4 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Language Toggle (Smooth Cross-fade) */}
        <button
          onClick={toggleLang}
          className="h-10 px-4 rounded-full glass-card hover:bg-[var(--color-bg-secondary)] transition-colors hover-neon-glow flex items-center gap-2 font-bold text-xs uppercase tracking-widest min-w-[80px] justify-center"
          aria-label="Toggle Language"
        >
          <Globe className="w-4 h-4 text-accent-primary" />
          <div className="relative w-6 h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {lang === "en" ? "EN" : "ID"}
              </motion.span>
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-2 pb-20 lg:pt-4 lg:pb-28 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-96 h-96 bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-6">
            <div className="inline-block px-3 py-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full text-[10px] font-bold tracking-widest uppercase text-accent-primary">
              {t.heroTag}
            </div>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
          >
            {t.heroTitle1} <br className="hidden lg:block" />
            <span className="text-gradient drop-shadow-sm">{t.heroTitle2}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg lg:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light italic"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center lg:items-start gap-5"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={(e) =>
                  triggerDownload(
                    e,
                    "https://drive.google.com/uc?export=download&id=ID_FILE_PYUN_EXE_WIN",
                  )
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-text-primary)]/20 overflow-hidden tracking-tight text-sm"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <FaWindows className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t.downloadWin}</span>
              </button>
              <button
                onClick={(e) =>
                  triggerDownload(
                    e,
                    "https://drive.google.com/uc?export=download&id=ID_FILE_PYUN_EXE_MAC",
                  )
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-tr from-accent-tertiary to-accent-primary text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover-neon-glow neon-glow overflow-hidden tracking-tight text-sm"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaApple className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t.downloadMac}</span>
              </button>
              <button
                onClick={(e) =>
                  triggerDownload(
                    e,
                    "https://drive.google.com/uc?export=download&id=ID_FILE_PYUN_EXE_LINUX",
                  )
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 glass-card hover:bg-[var(--color-bg-secondary)] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden tracking-tight text-sm text-[var(--color-text-primary)] border border-[var(--color-border)]"
              >
                <FaLinux className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t.downloadLin}</span>
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
              <div className="h-px w-8 bg-accent-primary"></div>
              <p className="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
                {t.versionInfo}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 w-full z-10 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative rounded-2xl glass-card p-2 flex overflow-hidden group border border-[var(--color-border)]"
            style={{ aspectRatio: "2816 / 1664" }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent-secondary/30 to-accent-primary/20 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
            <div className="relative rounded-xl w-full h-full overflow-hidden border border-[var(--color-border)]">
              <Image
                src={
                  theme === "dark"
                    ? "/assets/hero_dark.png"
                    : "/assets/hero_light.png"
                }
                alt="Pyun Control Panel & OBS Dashboard"
                width={2816}
                height={1664}
                priority
                className="w-full h-full object-cover object-center bg-[var(--color-bg-secondary)] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 z-20 glass-card rounded-[2.5rem] shadow-2xl backdrop-blur-xl flex items-center justify-center group/logo cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-[2.5rem] opacity-0 group-hover/logo:opacity-100 transition-opacity blur-md" />
            <div className="relative w-full h-full group-hover/logo:scale-110 transition-transform duration-300">
              <Image
                src="/assets/pyun.png"
                alt="Pyun Logo"
                fill
                className="object-contain drop-shadow-2xl z-10"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback =
                    e.currentTarget.parentElement?.nextElementSibling;
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* DEMO SECTION */}
      <section className="relative py-28 px-6 lg:px-12 overflow-hidden border-t border-[var(--color-border)]">
        {/* Ambient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 mb-5"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-primary" />
              <span className="text-[10px] font-bold text-accent-primary uppercase tracking-[0.25em]">
                {t.demoSub}
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-primary" />
            </motion.div>
            <motion.h3
              variants={fadeIn}
              className="text-3xl lg:text-5xl font-black tracking-tight mb-4"
            >
              {t.demoTitle1}
              <span className="text-gradient">Pyun</span>
              {t.demoTitle2}
            </motion.h3>
            <motion.p
              variants={fadeIn}
              className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto font-light leading-relaxed"
            >
              {t.demoDesc}
            </motion.p>
          </motion.div>

          {/* Video Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {[
              {
                youtubeUrl: "https://www.youtube.com/watch?v=5YE3k5q3g3s",
                embedId: "5YE3k5q3g3s",
                label: t.demo1Label,
                title: t.demo1Title,
                desc: t.demo1Desc,
                tag: "01",
                accent: "from-accent-primary/20 to-accent-secondary/10",
                glow: "rgba(var(--color-accent-primary-rgb),0.15)",
              },
              {
                youtubeUrl: "https://www.youtube.com/watch?v=8RWpo4W_dGA",
                embedId: "8RWpo4W_dGA",
                label: t.demo2Label,
                title: t.demo2Title,
                desc: t.demo2Desc,
                tag: "02",
                accent: "from-accent-secondary/20 to-accent-primary/10",
                glow: "rgba(var(--color-accent-secondary-rgb),0.15)",
              },
            ].map((video, i) => (
              <motion.div key={i} variants={fadeIn} className="group relative">
                {/* Card glow on hover */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `radial-gradient(ellipse at center, ${video.glow}, transparent 70%)`,
                  }}
                />

                <div className="relative glass-card rounded-3xl overflow-hidden border border-[var(--color-border)] group-hover:border-[var(--color-text-secondary)]/40 transition-colors duration-300">
                  {/* Top label bar */}
                  <div
                    className={`flex items-center justify-between px-5 py-3.5 border-b border-[var(--color-border)] bg-gradient-to-r ${video.accent}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[var(--color-text-secondary)] font-bold tracking-[0.2em]">
                        {video.tag}
                      </span>
                      <div className="w-px h-3 bg-[var(--color-border)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                        {video.label}
                      </span>
                    </div>
                    {/* Fake window dots */}
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-primary/50" />
                    </div>
                  </div>

                  {/* Iframe embed */}
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}?rel=0&modestbranding=1&color=white`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Bottom info */}
                  <div className="px-5 py-4 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1 truncate">
                        {video.title}
                      </h4>
                    </div>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-border)] hover:border-accent-primary/50 hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-accent-primary transition-all duration-200 group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        YouTube
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           HOW IT WORKS — diagonal stripe background
      ══════════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        {/* Diagonal stripe texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-text-primary) 0, var(--color-text-primary) 1px, transparent 0, transparent 50%)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Gradient mask on top of stripes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] pointer-events-none" />
        {/* Centered glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeIn}
              className="text-[11px] font-bold text-accent-primary uppercase tracking-[0.2em] mb-4"
            >
              {t.howItWorksSub}
            </motion.h2>
            <motion.h3
              variants={fadeIn}
              className="text-3xl lg:text-5xl font-black mb-4"
            >
              {t.howItWorksTitle}
            </motion.h3>
            <motion.p
              variants={fadeIn}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed font-light"
            >
              {t.howItWorksDesc}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          >
            {/* Connector line between cards (desktop only) */}
            <div className="hidden md:block absolute top-14 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent pointer-events-none" />

            {[
              {
                step: t.step1Tag,
                title: t.step1Title,
                desc: t.step1Desc,
                img: "/assets/step-setup.svg",
                icon: Sliders,
                num: "01",
              },
              {
                step: t.step2Tag,
                title: t.step2Title,
                desc: t.step2Desc,
                img: "/assets/step-obs.svg",
                icon: Monitor,
                num: "02",
              },
              {
                step: t.step3Tag,
                title: t.step3Title,
                desc: t.step3Desc,
                img: "/assets/step-live.svg",
                icon: Zap,
                num: "03",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative glass-card rounded-2xl p-8 border border-[var(--color-border)] hover:border-accent-primary/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Hover accent shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Step number badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/10 border border-accent-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(var(--color-accent-primary-rgb),0.2)] transition-shadow">
                    <item.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="font-mono text-4xl font-black text-[var(--color-border)] group-hover:text-accent-primary/20 transition-colors leading-none select-none">
                    {item.num}
                  </span>
                </div>

                <div className="font-mono text-[10px] text-accent-primary/70 mb-2 tracking-[0.2em] uppercase">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-auto font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           MENU & FITUR — deep bg with side-lit glow
      ══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        {/* Left side glow panel */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent" />
        {/* Ambient orbs */}
        <div className="absolute -left-32 top-1/4 w-80 h-80 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-32 bottom-1/4 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.h2
              variants={fadeIn}
              className="text-[11px] font-bold text-accent-primary uppercase tracking-[0.2em] mb-4"
            >
              {t.menusSub}
            </motion.h2>
            <motion.h3
              variants={fadeIn}
              className="text-3xl lg:text-5xl font-black mb-4"
            >
              {t.menusTitle}
            </motion.h3>
            <motion.p
              variants={fadeIn}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed font-light"
            >
              {t.menusDesc}
            </motion.p>
          </motion.div>

          <div className="space-y-28">
            {[
              {
                title: t.menuScoreTitle,
                desc: t.menuScoreDesc,
                imgDark: "/assets/score_dark.png",
                imgLight: "/assets/score_light.png",
                icon: Zap,
                tag: "Menu 01",
                subpoints: [
                  t.menuScoreSp1,
                  t.menuScoreSp2,
                  t.menuScoreSp3,
                  t.menuScoreSp4,
                ],
              },
              {
                title: t.menuTeamsTitle,
                desc: t.menuTeamsDesc,
                imgDark: "/assets/team_dark.png",
                imgLight: "/assets/team_light.png",
                icon: Shield,
                tag: "Menu 02",
                subpoints: [
                  t.menuTeamsSp1,
                  t.menuTeamsSp2,
                  t.menuTeamsSp3,
                  t.menuTeamsSp4,
                ],
              },
              {
                title: t.menuLayoutTitle,
                desc: t.menuLayoutDesc,
                imgDark: "/assets/layout_dark.png",
                imgLight: "/assets/layout_light.png",
                icon: Monitor,
                tag: "Menu 03",
                subpoints: [
                  t.menuLayoutSp1,
                  t.menuLayoutSp2,
                  t.menuLayoutSp3,
                  t.menuLayoutSp4,
                ],
              },
              {
                title: t.menuSettingsTitle,
                desc: t.menuSettingsDesc,
                imgDark: "/assets/setting_dark.png",
                imgLight: "/assets/setting_light.png",
                icon: Sliders,
                tag: "Menu 04",
                subpoints: [
                  t.menuSettingsSp1,
                  t.menuSettingsSp2,
                  t.menuSettingsSp3,
                  t.menuSettingsSp4,
                ],
              },
            ].map((menu, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image */}
                <motion.div variants={fadeIn} className="flex-1 w-full">
                  <div className="relative group">
                    {/* Glow ring behind image */}
                    <div className="absolute -inset-3 bg-gradient-to-tr from-accent-primary/15 to-accent-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div
                      className="relative rounded-2xl glass-card p-2 border border-[var(--color-border)] group-hover:border-accent-primary/30 transition-colors duration-300 shadow-2xl overflow-hidden"
                      style={{ aspectRatio: "16/9" }}
                    >
                      {/* Corner accent dots */}
                      <div className="absolute top-3 left-3 flex gap-1.5 z-20">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
                        <div className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
                        <div className="w-2 h-2 rounded-full bg-accent-primary/50" />
                      </div>
                      <div className="relative rounded-xl w-full h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                        <Image
                          src={theme === "dark" ? menu.imgDark : menu.imgLight}
                          alt={menu.title}
                          fill
                          className="object-cover object-left-top opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={fadeIn}
                  className="flex-1 w-full space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/10 border border-accent-primary/30 flex items-center justify-center">
                      <menu.icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <span className="font-mono text-[10px] text-accent-primary/70 tracking-[0.2em] uppercase">
                      {menu.tag}
                    </span>
                  </div>

                  <h4 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                    {menu.title}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-base leading-relaxed font-light border-l-2 border-accent-primary/30 pl-4">
                    {menu.desc}
                  </p>

                  {/* Subpoints */}
                  <ul className="space-y-2 pt-2">
                    {menu.subpoints.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           FITUR UNGGULAN — dark pill cards on mesh bg
      ══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-[var(--color-bg-secondary)]/60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(var(--color-accent-primary-rgb),0.12) 0%, transparent 100%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(var(--color-accent-secondary-rgb),0.10) 0%, transparent 100%)",
          }}
        />
        {/* Horizontal rule top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start"
          >
            {/* Left sticky header */}
            <motion.div
              variants={fadeIn}
              className="lg:w-80 lg:sticky lg:top-24 flex-shrink-0"
            >
              <h2 className="text-[11px] font-bold text-accent-primary uppercase tracking-[0.2em] mb-4">
                {t.featuresSub}
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-5 leading-tight">
                {t.featuresTitle}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed">
                {t.featuresDesc}
              </p>
              {/* Decorative vertical line */}
              <div className="hidden lg:block mt-10 ml-1 w-px h-24 bg-gradient-to-b from-accent-primary/40 to-transparent" />
            </motion.div>

            {/* Right cards grid */}
            <motion.div
              variants={staggerContainer}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                {
                  title: t.feat1Title,
                  icon: Zap,
                  desc: t.feat1Desc,
                  accent: "from-accent-primary/10 to-accent-secondary/5",
                  iconColor: "text-accent-primary",
                },
                {
                  title: t.feat2Title,
                  icon: Monitor,
                  desc: t.feat2Desc,
                  accent: "from-accent-secondary/10 to-accent-primary/5",
                  iconColor: "text-accent-secondary",
                },
                {
                  title: t.feat3Title,
                  icon: Sliders,
                  desc: t.feat3Desc,
                  accent: "from-accent-primary/8 to-transparent",
                  iconColor: "text-accent-primary",
                },
                {
                  title: t.feat4Title,
                  icon: Shield,
                  desc: t.feat4Desc,
                  accent: "from-accent-secondary/8 to-transparent",
                  iconColor: "text-accent-secondary",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`group relative glass-card rounded-2xl p-7 border border-[var(--color-border)] hover:border-accent-primary/30 transition-all duration-300 overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] group-hover:border-accent-primary/40 flex items-center justify-center mb-5 transition-colors">
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-[var(--color-text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           FOOTER — refined with grid & brand accent
      ══════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top glow line */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent-primary/40 to-transparent" />
        {/* Bottom left orb */}
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-primary/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Brand row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            {/* Logo + tagline */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl glass-card border border-[var(--color-border)] flex items-center justify-center">
                <Image
                  src="/icons/icon.png"
                  alt="Pyun"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-black tracking-tight text-(--color-text-primary) text-lg leading-none">
                  Pyun Project
                </p>
                <p className="text-[10px] text-(--color-text-secondary)/60 tracking-widest mt-0.5">
                  Versus Overlay
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/VhalennnG/pyun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-(--color-border) bg-(--color-bg-secondary) hover:border-accent-primary/40 hover:bg-(--color-bg-tertiary) text-(--color-text-secondary) hover:text-accent-primary transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs uppercase tracking-wider">
                  {t.viewGithub}
                </span>
                <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity text-accent-secondary" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-(--color-border) to-transparent mb-8" />

          {/* Bottom meta */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-(--color-text-secondary)/50">
            <p>
              &copy; {new Date().getFullYear()} {t.footerRights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
