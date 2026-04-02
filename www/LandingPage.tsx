'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Fingerprint,
  CloudRain,
  Clock3,
  LineChart,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  MessageCircleMore,
  Wallet,
  Wheat,
  X,
} from 'lucide-react';
import { animated, useSpring } from 'react-spring';

import Particles from 'react-tsparticles';
import Wavify from 'react-wavify';
import { ThemeToggle } from './components/ThemeToggle';
import { GlassCard } from './components/GlassCard';
import { benefits, faq, features, integrations, security, steps, testimonials } from './content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const particlesOptions = {
  fpsLimit: 60,
  particles: {
    number: { value: 30 },
    size: { value: 2 },
    move: { enable: true, speed: 0.8 },
    opacity: { value: 0.4 },
    links: { enable: true, distance: 120, opacity: 0.25 },
  },
  interactivity: {
    detectsOn: 'canvas' as const,
    events: { onHover: { enable: false }, onClick: { enable: false } },
  },
};

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.6], [0, 32]);
  const heroWebOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return undefined;
    let loco: any;
    import('@iojcde/locomotive-scroll').then((module) => {
      loco = new module.default({
        el: containerRef.current,
        smooth: true,
        multiplier: 0.85,
      });
    });
    return () => loco && loco.destroy && loco.destroy();
  }, []);

  const scrollToSection = (id: string, closePanel = false) => {
    if (closePanel) setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      ref={containerRef}
      data-scroll-container
      className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500">
              <Wheat className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
                Leena
              </p>
              <p className="text-xs/loose text-zinc-500 dark:text-zinc-400">Assistente Diário</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#beneficios"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('beneficios');
              }}
              className="text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('como-funciona');
              }}
              className="text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Como funciona
            </a>
            <a
              href="#depoimentos"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('depoimentos');
              }}
              className="text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('faq');
              }}
              className="text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="mailto:suporte@leena.chat"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700"
            >
              Pedir ajuda <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/60 text-slate-700 shadow backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OFF-CANVAS */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              aria-label="Fechar menu"
              className="fixed inset-0 z-[60] cursor-default bg-black/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[86vw] max-w-sm flex-col border-l border-white/10 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500">
                    <Wheat className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Leena</p>
                    <p className="text-xs text-slate-400">Menu móvel</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 space-y-2">
                {[
                  ['Benefícios', 'beneficios'],
                  ['Como funciona', 'como-funciona'],
                  ['Depoimentos', 'depoimentos'],
                  ['FAQ', 'faq'],
                ].map(([label, id]) => (
                  <a
                    key={label}
                    href={`#${id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(id, true);
                    }}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                  >
                    {label} <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="mt-auto rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Leena</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Compra sem chute, alerta antes do prejuízo e tudo no WhatsApp.
                </p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-90 dark:opacity-70">
          <Particles
            id="hero-particles"
            className="pointer-events-none absolute inset-0"
            options={particlesOptions}
          />
          <motion.div
            style={{ y: heroParallax }}
            className="absolute left-1/2 top-6 h-80 w-80 -translate-x-1/2 rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-700/20"
          />
          <motion.div
            style={{ y: heroParallax }}
            className="absolute right-8 top-24 h-64 w-64 rounded-full bg-zinc-100/30 blur-3xl dark:bg-zinc-800/10"
          />
          <motion.div
            style={{ y: heroParallax }}
            className="absolute left-8 bottom-10 h-64 w-64 rounded-full bg-zinc-300/20 blur-3xl dark:bg-zinc-600/10"
          />

          {/* animated tech-food background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.14)_1px,transparent_0)] bg-[size:28px_28px] opacity-40 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(74,222,128,0.16)_1px,transparent_0)]" />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 360 260"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="web-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0 0L80 80M80 0L0 80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="360" height="260" fill="url(#web-pattern)" />
              <path
                d="M10 40 C50 -10, 110 20, 150 60 S250 160, 320 120"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="M10 40 C50 -10, 110 20, 150 60 S250 160, 320 120; M0 60 C80 10, 150 40, 180 90 C210 140, 280 170, 360 120; M10 40 C50 -10, 110 20, 150 60 S250 160, 320 120"
                />
              </path>
            </svg>
          </motion.div>
          <motion.div
            aria-hidden="true"
            style={{ opacity: heroWebOpacity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18)_0%,rgba(8,145,178,0.01)_40%)] bg-[size:20px_20px]"
          />

          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 mx-auto h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
            animate={{ scale: [1, 1.06, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 35%, transparent 72%)',
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            animate={{ rotate: [2, -2, 2], translateX: [0, 40, 0], translateY: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="web" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 0L60 60M60 0L0 60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#web)" className="animate-pulse" />
            </svg>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-20px)]">
          <Wavify
            fill="rgba(16,185,129,0.35)"
            paused={false}
            options={{ height: 35, amplitude: 20, speed: 0.15, points: 3 }}
            className="pointer-events-none"
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 shadow dark:border-emerald-200/20 dark:bg-emerald-200/10 dark:text-emerald-100"
            >
              <BadgeCheck className="h-4 w-4" />
              Feita para quem decide compra todo dia
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl text-5xl font-semibold tracking-tight text-emerald-800 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Leena ajuda a comprar melhor,
              <span className="block bg-gradient-to-r from-emerald-700 via-lime-300 to-rose-500 bg-clip-text text-transparent">
                perder menos e lucrar mais.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              Assistente da Wakanda Code que converte dados simples em orientação de compra pelo
              WhatsApp.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-6 py-3.5 text-sm font-semibold text-emerald-800 shadow-md shadow-emerald-200/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Quero usar a Leena <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-100 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow transition hover:-translate-y-0.5 hover:border-emerald-100 hover:text-emerald-400 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:border-emerald-200/30 dark:hover:text-emerald-100"
              >
                Ver como funciona <Play className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                ['- desperdício', 'Compras mais seguras'],
                ['+ lucro', 'Melhor giro'],
                ['24/7', 'Sempre disponível'],
                ['WhatsApp', 'Canal principal'],
              ].map(([value, label]) => (
                <GlassCard key={label} className="p-4">
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-3xl bg-emerald-100/20 blur-2xl dark:bg-emerald-200/10" />
            <div className="absolute -right-6 bottom-12 h-28 w-28 rounded-full bg-rose-300/30 blur-2xl dark:bg-rose-400/15" />

            <GlassCard className="relative p-4">
              <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-emerald-100 p-6 dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Sugestão do dia</p>
                    <p className="text-2xl font-semibold text-emerald-950 dark:text-white">
                      Tomate e cebola
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100 dark:bg-white/5 dark:text-emerald-300 dark:ring-white/10">
                    Alta confiança
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-rose-50 p-3 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Risco de desperdício
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          Evitar alface hoje
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Vai chover e isso derruba a saída. Segura o verde para não perder.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Compra sugerida
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          Tomate: quantidade média
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      A procura está firme. Compra médio para garantir margem boa.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {['Histórico do vendedor', 'Clima e feriados', 'Texto ou áudio no WhatsApp'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / VALUE */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <GlassCard className="grid gap-6 p-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Por que a Leena existe
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 dark:text-white">
              Compra diária segura para quem vive de giro rápido.
            </h2>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-2xl bg-emerald-50/70 p-4 dark:bg-emerald-400/10"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{b}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* FEATURES */}
      <section id="beneficios" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Benefícios
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 dark:text-white">
              Informação limpa para decidir rápido.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Só o essencial para comprar hoje, claro e sem curva de aprendizagem.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-black/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-500/20 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {f.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <GlassCard className="sticky top-28 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Como funciona
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 dark:text-white">
              Conversa direta, resposta pronta.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Pergunta, a Leena analisa o contexto e devolve a compra recomendada em segundos.
            </p>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-lime-50 p-6 ring-1 ring-emerald-100 dark:from-emerald-400/10 dark:to-lime-400/5 dark:ring-white/10">
              <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300">
                <CalendarDays className="h-5 w-5" />
                <span className="font-semibold">Contexto real de decisão</span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />{' '}
                  Segunda-feira de manhã
                </div>
                <div className="flex items-center gap-3">
                  <CloudRain className="h-4 w-4 text-emerald-700 dark:text-emerald-300" /> Chuva
                  prevista para a tarde
                </div>
                <div className="flex items-center gap-3">
                  <Wallet className="h-4 w-4 text-emerald-700 dark:text-emerald-300" /> Margem
                  sensível no stock atual
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  className="flex gap-5 rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-white dark:text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      {s.n}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {s.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            Depoimentos
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 dark:text-white">
            Quem vende todos os dias a dizer como ajudou.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 text-white">
                  <Fingerprint className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                “{t.quote}”
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS / SECURITY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <GlassCard className="p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Integrações & Segurança
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 dark:text-white">
                Tecnologia clara, confiança declarada.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Integramos só o necessário para decidir rápido e guardamos as conversas de forma
                protegida.
              </p>

              <div id="integracoes" className="mt-8 grid gap-4 sm:grid-cols-2">
                {integrations.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-sm dark:bg-white/5 dark:ring-white/10"
                  >
                    <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-semibold">{title}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 p-6 text-white shadow-inner shadow-emerald-900/40">
              <div className="flex items-center gap-3 text-emerald-50">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-100">
                  Segurança em camadas
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {security.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-base font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-emerald-50/85">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-emerald-100/80">
                <span
                  className="inline-flex h-2 w-2 animate-pulse rounded-full bg-lime-300"
                  aria-hidden
                />
                Monitorização ativa e alertas em tempo real.
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-900 via-emerald-900 to-lime-300 px-8 py-12 text-white shadow-[0_30px_120px_-30px_rgba(16,185,129,0.55)] lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                Wakanda Code
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Transformamos sua compra diária em uma decisão inteligente.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-50/90">
                Com a Leena, as compras deixam de ser no olho. Aqui você compra com inteligência e
                aumenta a margem.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:suporte@leena.chat"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5"
                >
                  Pedir ajuda <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Ver perguntas frequentes
                </a>
              </div>
            </div>

            <GlassCard className="p-6 bg-white/10 dark:bg-white/10">
              <div className="flex items-center gap-3 text-emerald-50">
                <LineChart className="h-5 w-5" />
                <span className="font-semibold">Resumo do valor</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ['Menos desperdício', 'Compras ajustadas à procura'],
                  ['Mais lucro', 'Melhor giro e menos perda'],
                  ['Menos esforço', 'Decisão automática e simples'],
                  ['Mais confiança', 'Baseado em dados reais'],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-emerald-50/85">{desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 dark:text-white">
            Perguntas rápidas
          </h2>
        </div>

        <div className="mt-8 grid gap-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm open:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 dark:text-white">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <ChevronRight className="h-5 w-5 shrink-0 transition group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <footer className="mt-16 rounded-[1.5rem] border border-slate-100 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Leena
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                Assistente da Wakanda Code para reduzir perdas e tornar compras diárias mais
                assertivas.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Explorar
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#beneficios" className="hover:text-emerald-700">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-emerald-700">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#integracoes" className="hover:text-emerald-700">
                    Integrações
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Contactos
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Parcerias: evolution@wakandacode.co.mz
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Inquéritos: suporte@leena.chat
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Maputo · Moçambique</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Leena · Wakanda Code</span>
            <span>Todos os direitos reservados</span>
          </div>
        </footer>
      </section>
      <a
        href="/api/whatsapp"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <MessageCircleMore className="h-5 w-5" />
        Contactar a Leena
      </a>
    </main>
  );
}
