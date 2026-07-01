import React from "react";
import { motion } from "motion/react";
import { Trophy, Calendar, Users } from "lucide-react";

export default function AuthorityStats() {
  const stats = [
    {
      value: "15+ Anos",
      label: "Experiência no Mercado",
      desc: "Tradição em Anápolis-GO e Aracaju-SE",
      icon: Calendar,
      color: "text-brand-yellow"
    },
    {
      value: "500+ Ações",
      label: "Campanhas e Inaugurações",
      desc: "Eventos marcantes realizados",
      icon: Trophy,
      color: "text-white"
    },
    {
      value: "98%",
      label: "Satisfação dos Clientes",
      desc: "Parcerias de longo prazo",
      icon: Users,
      color: "text-brand-yellow"
    }
  ];

  return (
    <section id="quem-somos" className="relative py-20 px-6 bg-[#0B0B0E] border-t border-b border-white/5 overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center px-4 md:px-8 py-6 md:py-0"
              >
                {/* Icon display */}
                <div className="mb-4 p-3.5 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center">
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                {/* Numeric value */}
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 font-display">
                  {stat.value}
                </span>

                {/* Subtext and description */}
                <h4 className="text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 font-light">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Short "About us" statement underneath stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto border-t border-white/5 pt-12"
        >
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            A <strong className="text-white font-semibold">Ação Total Propaganda</strong> é sinônimo de criatividade, planejamento cirúrgico e entrega impecável em Goiás (Anápolis) e Sergipe (Aracaju). De panfletagem qualificada e ações promocionais de rua ao marketing digital estratégico, nosso foco absoluto é transformar a comunicação de sua marca em faturamento real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
