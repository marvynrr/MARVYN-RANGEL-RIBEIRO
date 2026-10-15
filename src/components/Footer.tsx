import { Scale, MessageCircle, Instagram, ShieldCheck, Mail, MapPin } from "lucide-react";
import { LAWYER_NAME, OAB_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, getWhatsAppUrl } from "../data/legalData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 text-sm text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Col 1: Law Firm Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-legal font-bold text-xl text-white">
                {LAWYER_NAME}
              </span>
              <span className="text-xs text-amber-500 font-mono font-medium">
                | {OAB_NUMBER}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Escritório especializado em Direito Previdenciário (Aposentadorias, BPC/LOAS e Auxílio-Doença) e Direito à Saúde (Medicamentos de Alto Custo e Tratamentos Negados pelo SUS ou Planos).
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá Dr. Yago, entrei em contato através do rodapé do seu site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navegação Rápida
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Áreas de Atuação (INSS & Saúde)
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  Sobre o Dr. Yago Rangel Ramos
                </a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-amber-400 transition-colors">
                  Triagem Online do Seu Caso
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  Como Funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Atendimento e Localização */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Atendimento e Localização
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block font-medium">Rio de Janeiro - RJ</strong>
                  <span>Atendimento presencial com agendamento e consultoria digital em todo o território nacional.</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Processos 100% eletrônicos (Justiça Federal e Estadual)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá Dr. Yago, gostaria de falar com você pelo WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Iniciar Atendimento Direto</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & OAB Ethics Notice */}
        <div className="pt-8 text-xs text-slate-500 space-y-3 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-400">
            <Scale className="w-4 h-4 text-amber-500/80 shrink-0" />
            <strong className="text-slate-300">Nota de Conformidade Ética e Deontológica (OAB):</strong>
          </div>
          <p>
            Este site tem finalidade estritamente informativa e educativa, em total conformidade com o Provimento nº 205/2021 e com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB). Nenhuma das informações contidas nesta página deve ser interpretada como promessa de causa ganha, garantia de concessão de benefícios ou captação indevida de clientela. O êxito de qualquer ação judicial ou procedimento administrativo depende da análise criteriosa dos documentos, dos laudos médicos e do livre convencimento motivado do Poder Judiciário.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-500 text-[11px]">
            <div>
              © {currentYear} {LAWYER_NAME} · {OAB_NUMBER}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Direito Previdenciário</span>
              <span aria-hidden="true">·</span>
              <span>Direito à Saúde</span>
              <span aria-hidden="true">·</span>
              <span>Medicamentos de Alto Custo</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
