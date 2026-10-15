import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { FAQ_DATA, getWhatsAppUrl } from "../data/legalData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/60 border-t border-b border-slate-800 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            05. Dúvidas Frequentes
          </div>
          <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight [text-wrap:balance]">
            Perguntas frequentes sobre Direitos Previdenciários e Acesso a Medicamentos
          </h2>
          <p className="text-base text-slate-300 mt-2">
            Respostas claras e diretas para as dúvidas mais comuns de quem busca benefícios do INSS ou remédios de alto custo.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-3.5 text-left">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500 font-mono text-xs font-bold mt-1">
                      0{index + 1}.
                    </span>
                    <span className="font-serif-legal font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1 rounded-full text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    <p className="pl-6">{item.answer}</p>
                    
                    <div className="mt-4 pl-6 pt-3 border-t border-slate-800/40 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-400">
                        Ainda ficou com dúvida sobre este ponto?
                      </span>
                      <a
                        href={getWhatsAppUrl(`Olá Dr. Yago, fiquei com uma dúvida sobre a seguinte pergunta: "${item.question}"`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Esclarecer no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Not Found Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sua dúvida não está listada aqui?</h4>
              <p className="text-xs text-slate-400">
                O Dr. Yago está à disposição para analisar sua situação diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Olá Dr. Yago, tenho uma dúvida específica sobre o meu caso que não encontrei no site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar com o Dr. Yago</span>
          </a>
        </div>

      </div>
    </section>
  );
}
