import { MessageCircle, ShieldCheck, Scale, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { LAWYER_NAME, OAB_NUMBER, getWhatsAppUrl, LAWYER_STATS } from "../data/legalData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Unboxed Metadata (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400/90 tracking-wide">
              <span>{OAB_NUMBER}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Pós-Graduado em Direito Previdenciário</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>10+ Anos de Atuação</span>
            </div>

            {/* Impactful Main Headline with balanced wrap */}
            <h1 className="font-serif-legal text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-white leading-[1.18] tracking-tight [text-wrap:balance]">
              Garanta seus direitos previdenciários e o acesso aos medicamentos que você precisa com quem entende do assunto
            </h1>

            {/* Subtitle focused on client pain points */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Atendimento ágil, humanizado e focado em reverter decisões injustas. 
              Se o <strong className="text-white font-semibold">INSS negou seu benefício</strong> ou o <strong className="text-white font-semibold">SUS/Plano recusou seu remédio de alto custo</strong>, você não precisa enfrentar isso sozinho.
            </p>

            {/* Core guarantees / peace-of-mind bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento 100% online em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Análise documental rápida e descomplicada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pedidos de urgência (Liminares de Saúde)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Foco em concessão e revisão de atrasados</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl("Olá Dr. Yago, gostaria de uma avaliação sobre o meu caso pelo WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all rounded-xl shadow-xl shadow-emerald-950/50 group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 transition-transform group-hover:scale-110" />
                <span>Consultar Meu Caso no WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
              >
                <span>Fazer Triagem Rápida (1 min)</span>
              </a>
            </div>

            {/* Reassurance text */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-500/80 shrink-0" />
              <span>Sigilo profissional absoluto e respeito às normas éticas da OAB</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Professional Portrait of Dr. Yago */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing prestige border frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-slate-800 to-emerald-500/20 blur-sm" />
              
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-800">
                  <img
                    src="/src/assets/images/yago_rangel_lawyer_1792100048346.jpg"
                    alt={`Retrato oficial do advogado ${LAWYER_NAME}`}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient at the base */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                {/* Overlaid Bio Card at the base */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 text-left">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-serif-legal text-lg font-bold text-white">{LAWYER_NAME}</h2>
                      <p className="text-xs text-amber-400 font-medium">{OAB_NUMBER} · Especialista</p>
                    </div>
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-slate-300 leading-snug">
                    Mais de 10 anos de experiência defendendo direitos contra o INSS, operadoras de saúde e órgãos públicos.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4-Column Proof & Statistics Strip (adjacent to hero claim as mandated) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {LAWYER_STATS.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div 
                className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums"
                style={{ fontFamily: 'monospace' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
