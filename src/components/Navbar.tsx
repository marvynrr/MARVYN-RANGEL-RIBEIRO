import { useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { LAWYER_NAME, OAB_NUMBER, getWhatsAppUrl, LOGO_URL, LOGO_FALLBACK, WHATSAPP_URL } from "../data/legalData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Áreas de Atuação", href: "#servicos" },
    { label: "Sobre o Dr. Yago", href: "#sobre" },
    { label: "Triagem do Seu Caso", href: "#triagem" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Perguntas Frequentes", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Law Firm Brand with Official Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 group text-left"
        >
          <img
            src={LOGO_URL}
            onError={(e) => {
              e.currentTarget.src = LOGO_FALLBACK;
            }}
            alt={`Logo ${LAWYER_NAME} Advocacia`}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-amber-500/40 shadow-sm group-hover:border-amber-400 transition-colors bg-slate-900"
          />
          <div className="flex flex-col">
            <span className="font-serif-legal font-bold text-lg sm:text-xl text-slate-100 group-hover:text-amber-400 transition-colors leading-tight">
              {LAWYER_NAME}
            </span>
            <span className="text-[11px] text-amber-500 font-mono font-medium tracking-wide">
              {OAB_NUMBER} · Advocacia
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all rounded-lg shadow-lg shadow-emerald-950/40 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs text-amber-500 font-mono pb-2 border-b border-slate-800">
            {OAB_NUMBER} · Advocacia Previdenciária & Direito à Saúde
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm text-slate-200 hover:text-amber-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Advogado Especialista</span>
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
