import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { LAWYER_NAME, LAWYER_PHOTO_URL, LAWYER_PHOTO_FALLBACK, WHATSAPP_URL } from "../data/legalData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside 
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-end gap-3 select-none"
    >
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md text-left text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <img
            src={LAWYER_PHOTO_URL}
            onError={(e) => {
              e.currentTarget.src = LAWYER_PHOTO_FALLBACK;
            }}
            alt={LAWYER_NAME}
            className="w-9 h-9 rounded-full object-cover object-top border border-emerald-500/60 shrink-0"
          />
          <div className="space-y-0.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>{LAWYER_NAME}</span>
            </div>
            <div className="text-slate-300 text-[11px] leading-tight">
              Dúvidas sobre INSS ou Remédio de Alto Custo? Fale agora no WhatsApp.
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Dr. Yago Rangel Ramos"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white shadow-2xl shadow-emerald-950/80 transition-all duration-200 group"
      >
        {/* Subtle ripple / ping for eye attraction */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white/20 transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
}
