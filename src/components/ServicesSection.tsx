import { useState } from "react";
import { MessageCircle, HelpCircle, Check, ArrowRight, ShieldCheck, HeartPulse, Scale } from "lucide-react";
import { SERVICES_DATA, ServiceItem, getWhatsAppUrl } from "../data/legalData";
import ServiceModal from "./ServiceModal";

export default function ServicesSection() {
  const [filter, setFilter] = useState<"all" | "previdenciario" | "saude">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  return (
    <section id="servicos" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
              02. Especialidades Jurídicas
            </div>
            <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight [text-wrap:balance]">
              Soluções jurídicas estratégicas para Previdência e Acesso à Saúde
            </h2>
            <p className="text-base text-slate-300 mt-2">
              Selecione a sua necessidade para entender como garantimos seus direitos perante o INSS, SUS ou Plano de Saúde.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Interactive buttons as allowed by constitution) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filter === "all"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setFilter("previdenciario")}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filter === "previdenciario"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Direito Previdenciário (INSS)
            </button>
            <button
              onClick={() => setFilter("saude")}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filter === "saude"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Direito à Saúde (Medicamentos)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-slate-950/80"
            >
              {/* Card Top: Editorial Number & Category */}
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono mb-3">
                  <span className="text-amber-500 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    {service.category === "previdenciario" ? (
                      <Scale className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    <span>
                      {service.category === "previdenciario"
                        ? "INSS / Previdência"
                        : "Saúde / Medicamentos"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-legal text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Benefit checklist */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5">
                {/* Mini-Button: "Tenho dúvidas sobre este benefício" as specifically requested */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/60"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tenho dúvidas sobre este benefício</span>
                </button>

                {/* Primary WhatsApp Direct CTA */}
                <a
                  href={getWhatsAppUrl(service.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Consultar Meu Caso no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner at the bottom of services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Não encontrou sua situação listada acima?</span>
            </div>
            <h4 className="font-serif-legal text-xl font-bold text-white">
              Analisamos casos especiais e revisões complexas individualmente
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Cada histórico médico e de contribuição é único. Envie uma mensagem explicando o que aconteceu e receba orientação inicial personalizada.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá Dr. Yago, gostaria de uma orientação sobre um caso previdenciário/de saúde que não vi na lista.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/50 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar com o Dr. Yago Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
