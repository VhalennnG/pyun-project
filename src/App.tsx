/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  Monitor,
  Shield,
  Zap,
  Sliders,
  ExternalLink,
  Github,
  Sun,
  Moon,
  Globe,
  Terminal,
} from "lucide-react";

const dict = {
  en: {
    heroTag: "Pyun Overlay System",
    heroTitle1: "Level Up Your",
    heroTitle2: "Stream Overlay",
    heroDesc:
      '"Instant & lightweight Versus Progress Bar for Streamers. Free, standalone, and 100% local desktop software for real-time interactions."',
    downloadWin: "Windows",
    downloadMac: "Mac",
    downloadLin: "Linux",
    versionInfo: "v2.0.0 | Free & Open Source",
    howItWorksSub: "Instant Workflow",
    howItWorksTitle: "Simple Setup",
    howItWorksDesc:
      "Three easy steps to bring your tournament visuals to a professional level.",
    step1Tag: "Phase 01",
    step1Title: "Setup Score & Visuals",
    step1Desc:
      "Choose Neon Stack color scheme, customize team logos without cropping fears.",
    step2Tag: "Phase 02",
    step2Title: "Connect to OBS",
    step2Desc:
      "Add a Window Capture source in OBS Studio, then check the Allow Transparency option.",
    step3Tag: "Phase 03",
    step3Title: "Live & Instant Control",
    step3Desc:
      "Change scores using manual control buttons or utilize Global Hotkeys while focusing on your game.",
    featuresSub: "Core Capabilities",
    featuresTitle: "Designed for Performance",
    featuresDesc:
      "Pyun's flagship features ensure your live stream runs smoothly without sacrificing computer resources.",
    feat1Title: "100% Standalone & Lightweight",
    feat1Desc:
      "Runs entirely on a local computer without databases or external server connections. Zero delay and no CPU overhead during live streaming.",
    feat2Title: "OBS Transparent Overlay",
    feat2Desc:
      "Supports full transparent window integration (Alpha Transparency) that blends perfectly over gameplay.",
    feat3Title: "Extensive Customization",
    feat3Desc:
      "Freedom to change bar colors, switch layout modes (Double Progress Bar), and precise team logo settings.",
    feat4Title: "Anti-Capture & Global Hotkeys",
    feat4Desc:
      "Keep the control panel secret from viewers thanks to Anti-Capture, and change scores quickly via keyboard shortcuts.",
    previewSub: "Performance Preview",
    previewTitle1: "Ultra-Smooth",
    previewTitle2: "Animation Transitions.",
    previewOverlay: "[Animation Preview (/assets/pyun-preview.gif)]",
    previewOpt: "Optimized for 60 FPS",
    footerMadeWith: "Made with",
    footerBy: "by Vhalen for the Streamer Community.",
    footerRights: "Pyun Overlay System. All rights reserved.",
    viewGithub: "View on GitHub",
    openSource: "Open Source",
  },
  id: {
    heroTag: "Sistem Overlay Pyun",
    heroTitle1: "Tingkatkan Level",
    heroTitle2: "Overlay Stream Anda",
    heroDesc:
      '"Versus Progress Bar instan & ringan untuk Streamer. Software desktop gratis, standalone, dan 100% lokal untuk interaksi real-time."',
    downloadWin: "Windows",
    downloadMac: "Mac",
    downloadLin: "Linux",
    versionInfo: "v2.0.0 | Gratis & Open Source",
    howItWorksSub: "Alur Kerja Instan",
    howItWorksTitle: "Setup Sederhana",
    howItWorksDesc:
      "Tiga langkah mudah untuk membawa visual turnamen Anda ke level profesional.",
    step1Tag: "Fase 01",
    step1Title: "Atur Skor & Visual",
    step1Desc:
      "Pilih skema warna Neon Stack, sesuaikan logo tim tanpa takut terpotong (anti-crop).",
    step2Tag: "Fase 02",
    step2Title: "Hubungkan ke OBS",
    step2Desc:
      "Tambahkan source Window Capture di OBS Studio, lalu centang opsi Allow Transparency.",
    step3Tag: "Fase 03",
    step3Title: "Live & Kontrol Instan",
    step3Desc:
      "Ubah skor menggunakan tombol kontrol manual atau manfaatkan Global Hotkeys saat fokus bermain game.",
    featuresSub: "Kemampuan Utama",
    featuresTitle: "Dirancang untuk Performa",
    featuresDesc:
      "Fitur unggulan Pyun memastikan live stream Anda berjalan mulus tanpa mengorbankan resource komputer.",
    feat1Title: "100% Standalone & Ringan",
    feat1Desc:
      "Berjalan sepenuhnya di komputer lokal tanpa database atau koneksi server eksternal. Nol delay dan tidak membebani kinerja CPU saat live streaming.",
    feat2Title: "OBS Transparent Overlay",
    feat2Desc:
      "Mendukung integrasi jendela transparan penuh (Alpha Transparency) yang langsung menyatu dengan sempurna di atas gameplay.",
    feat3Title: "Kustomisasi Ekstensif",
    feat3Desc:
      "Kebebasan mengubah warna bar, beralih mode layout (Double Progress Bar), dan pengaturan logo tim yang presisi tanpa takut logo terpotong.",
    feat4Title: "Anti-Capture & Global Hotkeys",
    feat4Desc:
      "Jaga rahasia control panel dari penonton berkat Anti-Capture, dan ubah skor dengan cepat lewat shortcut keyboard meski aplikasi di background.",
    previewSub: "Pratinjau Performa",
    previewTitle1: "Transisi Animasi",
    previewTitle2: "Ultra-Mulus.",
    previewOverlay: "[Animasi Preview (/assets/pyun-preview.gif)]",
    previewOpt: "Dioptimalkan untuk 60 FPS",
    footerMadeWith: "Dibuat dengan",
    footerBy: "oleh Vhalen untuk Komunitas Streamer.",
    footerRights: "Pyun Overlay System. Hak Cipta Dilindungi.",
    viewGithub: "Lihat di GitHub",
    openSource: "Sumber Terbuka",
  },
};

type Lang = "en" | "id";

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

export default function App() {
  const [lang, setLang] = useState<Lang>("id");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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
      <div className="relative z-50 flex justify-end p-6 gap-3 max-w-7xl mx-auto w-full">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full glass-card hover:bg-[var(--color-bg-secondary)] transition-colors hover-neon-glow"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={toggleLang}
          className="px-4 py-2 rounded-full glass-card hover:bg-[var(--color-bg-secondary)] transition-colors hover-neon-glow flex items-center gap-2 font-semibold text-sm"
          aria-label="Toggle Language"
        >
          <Globe className="w-5 h-5" />
          {lang === "en" ? "ID" : "EN"}
        </button>
      </div>

      {/* 
        A. HERO SECTION 
      */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
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
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-text-primary)]/20 overflow-hidden uppercase tracking-tight text-sm"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Monitor className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t.downloadWin}</span>
              </button>
              <button
                onClick={(e) =>
                  triggerDownload(
                    e,
                    "https://drive.google.com/uc?export=download&id=ID_FILE_PYUN_EXE_MAC",
                  )
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-tr from-accent-tertiary to-accent-primary text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover-neon-glow neon-glow overflow-hidden uppercase tracking-tight text-sm"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C9.54 6.44 8.04 5 6 5a5.2 5.2 0 0 0-5.24 5.38c0 4.22 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 3.5-1.5 0-3-1.5-3-3.5 1 0 1 0 1 0Z" />
                </svg>
                <span className="relative z-10">{t.downloadMac}</span>
              </button>
              <button
                onClick={(e) =>
                  triggerDownload(
                    e,
                    "https://drive.google.com/uc?export=download&id=ID_FILE_PYUN_EXE_LINUX",
                  )
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 glass-card hover:bg-[var(--color-bg-secondary)] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden uppercase tracking-tight text-sm text-[var(--color-text-primary)] border border-[var(--color-border)]"
              >
                <Terminal className="w-5 h-5 relative z-10" />
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
          <div className="relative rounded-2xl glass-card p-2 aspect-video flex overflow-hidden group border border-[var(--color-border)]">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent-secondary/30 to-accent-primary/20 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
            <img
              src="/assets/hero-mockup.png"
              alt="Pyun Control Panel & OBS Dashboard"
              className="relative rounded-xl w-full h-full object-cover bg-[var(--color-bg-secondary)] object-center border border-[var(--color-border)] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 z-20 glass-card rounded-[2.5rem] p-4 md:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center group/logo cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-[2.5rem] opacity-0 group-hover/logo:opacity-100 transition-opacity blur-md" />
            <img
              src="/assets/logo.png"
              alt="Pyun Logo"
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 group-hover/logo:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden absolute font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-accent-primary to-accent-secondary z-0 rotate-12 drop-shadow-xl group-hover/logo:scale-110 transition-transform duration-300">
              P
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 
        B. HOW IT WORKS
      */}
      <section className="relative py-24 bg-[var(--color-bg-secondary)]/50 border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: t.step1Tag,
                title: t.step1Title,
                desc: t.step1Desc,
                img: "/assets/step-setup.svg",
                icon: Sliders,
              },
              {
                step: t.step2Tag,
                title: t.step2Title,
                desc: t.step2Desc,
                img: "/assets/step-obs.svg",
                icon: Monitor,
              },
              {
                step: t.step3Tag,
                title: t.step3Title,
                desc: t.step3Desc,
                img: "/assets/step-live.svg",
                icon: Zap,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="glass-card rounded-2xl p-8 hover:bg-[var(--color-bg-tertiary)]/50 transition-colors group relative overflow-hidden flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center border border-[var(--color-border)] mb-6 group-hover:border-accent-primary transition-colors">
                  <img
                    src={item.img}
                    alt={`Langkah ${item.step}`}
                    className="w-5 h-5 opacity-80"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden",
                      );
                    }}
                  />
                  <div className="hidden text-accent-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[var(--color-text-secondary)] mb-2 tracking-tighter uppercase group-hover:text-accent-primary transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 
        C. FITUR UNGGULAN
      */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 min-w-96 min-h-96 w-1/3 h-1/2 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mb-16">
          <h2 className="text-[11px] font-bold text-accent-primary uppercase tracking-[0.2em] mb-4">
            {t.featuresSub}
          </h2>
          <h3 className="text-3xl lg:text-5xl font-black mb-4">
            {t.featuresTitle}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl font-light">
            {t.featuresDesc}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { title: t.feat1Title, icon: Zap, desc: t.feat1Desc },
            { title: t.feat2Title, icon: Monitor, desc: t.feat2Desc },
            { title: t.feat3Title, icon: Sliders, desc: t.feat3Desc },
            { title: t.feat4Title, icon: Shield, desc: t.feat4Desc },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="glass-card rounded-2xl p-8 hover:border-[var(--color-text-secondary)] transition duration-300 group"
            >
              <div className="flex items-start gap-5 w-full">
                <div className="p-3 bg-[var(--color-bg-secondary)] rounded-lg group-hover:bg-[var(--color-bg-tertiary)] transition-colors border border-[var(--color-border)] group-hover:border-accent-primary/50 shadow-inner">
                  <item.icon className="w-5 h-5 text-accent-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 
        D. PREVIEW ANIMASI BAR
      */}
      <section className="py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[11px] font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.2em] mb-4">
              {t.previewSub}
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black leading-tight mb-12">
              {t.previewTitle1}{" "}
              <span className="text-accent-secondary">{t.previewTitle2}</span>
            </h3>

            <div className="relative group w-full max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card p-2 border border-[var(--color-border)] shadow-2xl">
              <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition duration-500 z-10 pointer-events-none" />
              <img
                src="/assets/pyun-preview.gif"
                alt="Pyun Bar Transition Preview"
                className="w-full aspect-video object-cover rounded-2xl bg-[var(--color-bg-primary)] opacity-90 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.5";
                  e.currentTarget.parentElement
                    ?.querySelector(".fallback-text")
                    ?.classList.remove("hidden");
                }}
              />
              <div className="fallback-text hidden absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)] font-medium z-0 text-sm">
                {t.previewOverlay}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-[1px] w-12 bg-[var(--color-border)]"></div>
              <p className="text-xs text-[var(--color-text-secondary)] font-bold tracking-widest uppercase">
                {t.previewOpt}
              </p>
              <div className="h-[1px] w-12 bg-[var(--color-border)]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        E. FOOTER
      */}
      <footer className="bg-[var(--color-bg-primary)] pt-16 pb-8 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <p className="text-[var(--color-text-secondary)] font-light text-sm">
              {t.footerMadeWith}{" "}
              <span className="text-accent-primary px-1">⚡</span> {t.footerBy}
            </p>
            <p className="text-[var(--color-text-secondary)]/70 text-xs">
              &copy; {new Date().getFullYear()} {t.footerRights}
            </p>
          </div>

          <a
            href="https://github.com/VhalennnG/pyun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] hover:border-[var(--color-text-secondary)] text-[var(--color-text-primary)] hover:text-accent-primary transition-all duration-300 group"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-tight">
              {t.viewGithub}{" "}
              <span className="font-normal opacity-50 ml-1">
                {t.openSource}
              </span>
            </span>
            <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity text-accent-secondary" />
          </a>
        </div>
      </footer>
    </div>
  );
}
