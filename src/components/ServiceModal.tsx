import { X, CheckCircle2, FileText, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import { ServiceItem, getWhatsAppUrl } from "../data/legalData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <span>{service.category === "previdenciario" ? "Direito Previdenciário" : "Direito à Saúde"}</span>
              {service.urgencyLevel && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-semibold">{service.urgencyLevel}</span>
                </>
              )}
            </div>
            <h3 id="modal-title" className="font-serif-legal text-2xl font-bold text-white mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Detailed explanation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Sobre este benefício ou procedimento:
            </h4>
            <p className="leading-relaxed text-slate-200">
              {service.fullDetails}
            </p>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-1">
              Para quem é indicado:
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.targetAudience}
            </p>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
              O que nossa equipe faz por você:
            </h4>
            <ul className="space-y-2">
              {service.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Needed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Documentos recomendados para análise inicial:</span>
            </h4>
            <ul className="space-y-1.5 pl-1">
              {service.documentsNeeded.map((doc, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-500 font-mono">0{i+1}.</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 italic mt-2">
              *Se você não tiver todos os documentos em mãos no momento, envie o que tiver para a primeira triagem.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Voltar à página
          </button>
          
          <a
            href={getWhatsAppUrl(service.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar com o Dr. Yago sobre este caso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
