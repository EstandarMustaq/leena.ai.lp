import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Bell,
  MessageCircleMore,
  BarChart3,
  Headphones,
  CloudRain,
  Sparkles,
  CalendarDays,
  Clock3,
  Wallet,
  ShieldCheck,
  PanelsTopLeft,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; description: string };
export type Step = { n: string; title: string; text: string; icon: LucideIcon };
export type Testimonial = { name: string; role: string; quote: string };
export type Faq = { q: string; a: string };
export type Integration = { title: string; description: string; icon: LucideIcon };
export type Security = { title: string; description: string };

export const features: Feature[] = [
  {
    icon: TrendingUp,
    title: "Sugestão precisa",
    description: "Histórico e contexto para indicar o produto certo, na quantidade certa.",
  },
  {
    icon: Bell,
    title: "Alerta antes do prejuízo",
    description: "Clima, horário e stock avisam quando é prudente travar a compra.",
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp primeiro",
    description: "Tudo no canal que já usa. Sem novos logins ou aplicações extra.",
  },
  {
    icon: BarChart3,
    title: "Melhora com uso",
    description: "Cada registo afina as recomendações seguintes.",
  },
];

export const benefits = [
  "Menos desperdício e mercadoria parada",
  "Mais margem: compra passa a ser cálculo, não palpite",
  "Decisão rápida, em português claro",
  "Tudo no WhatsApp, sem curva de aprendizagem",
];

export const steps: Step[] = [
  {
    n: "01",
    title: "Envie a dúvida",
    text: "Texto ou áudio via WhatsApp.",
    icon: Headphones,
  },
  {
    n: "02",
    title: "Contexto lido",
    text: "Histórico, clima, calendário e margem entram no cálculo.",
    icon: CloudRain,
  },
  {
    n: "03",
    title: "Resposta direta",
    text: "Compra baixo/médio/alto ou segura, com uma linha de contexto.",
    icon: Sparkles,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ana M.",
    role: "Vendedora de legumes",
    quote: "Num dia de chuva, a Leena disse para segurar. Vendi o que tinha e não perdi produto.",
  },
  {
    name: "João S.",
    role: "Vendedor ambulante",
    quote: "Antes era a olho. Agora recebo ‘compra médio’ ou ‘segura’ e o dinheiro rende mais.",
  },
  {
    name: "Marta C.",
    role: "Comerciante informal",
    quote: "Soa como alguém da banca a falar comigo. Direto e claro.",
  },
];

export const faq: Faq[] = [
  {
    q: "Serve só para negócio grande?",
    a: "Não. É para quem compra todos os dias: banca, rua, pequeno mercado.",
  },
  {
    q: "Precisa instalar app?",
    a: "Não. Tudo acontece pelo WhatsApp.",
  },
  {
    q: "A recomendação é automática?",
    a: "Sim. Junta histórico, clima e margem e devolve a compra mais segura.",
  },
];

export const integrations: Integration[] = [
  {
    title: "WhatsApp central",
    description: "Respostas e alertas onde já está.",
    icon: MessageCircleMore,
  },
  {
    title: "Contexto em tempo real",
    description: "Histórico, clima e calendário entram antes da sugestão.",
    icon: Clock3,
  },
  {
    title: "Base viva",
    description: "Vendas, perdas e preços deixam a Leena mais apurada.",
    icon: BarChart3,
  },
  {
    title: "APIs e planilhas",
    description: "Liga a POS simples ou folha de cálculo exportada.",
    icon: PanelsTopLeft,
  },
];

export const security: Security[] = [
  {
    title: "Privacidade por padrão",
    description: "Só o essencial; nunca vendemos contactos ou conversas.",
  },
  {
    title: "Tudo encriptado",
    description: "TLS em todas as ligações e chaves rotativas.",
  },
  {
    title: "Acesso certo para cada pessoa",
    description: "Perfis separados; quem vê o quê fica definido.",
  },
  {
    title: "Backup e monitorização",
    description: "Monitorização contínua, réplicas e cópias diárias.",
  },
];
