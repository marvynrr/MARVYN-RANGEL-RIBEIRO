import { Scale, Award, HeartHandshake, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { LAWYER_NAME, OAB_NUMBER, getWhatsAppUrl, LAWYER_PHOTO_URL, LAWYER_PHOTO_FALLBACK, OFFICE_IMAGE_URL, WHATSAPP_URL } from "../data/legalData";

export default function AboutSection() {
  const credentials = [
    "Pós-Graduado em Direito Previdenciário com foco em Aposentadorias e Benefícios",
    "Mais de 10 anos de prática jurídica ininterrupta em litígios contra o INSS",
    "Especialista em Ações de Saúde de Alta Complexidade e Tutelas de Urgência (Liminares)",
    "Inscrição regular e ativa na Ordem dos Advogados do Brasil (OAB/RJ 209.621)",
    "Metodologia de atendimento humanizado com comunicação em linguagem simples e clara"
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            01. Autoridade e Compromisso Ético
          </div>
          <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight [text-wrap:balance]">
            Advocacia humanizada, rigor técnico e defesa intransigente dos seus direitos
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Conheça o profissional responsável por conduzir o seu processo com seriedade, celeridade e respeito à sua história.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Office Atmosphere & Trust Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={OFFICE_IMAGE_URL}
                  alt="Escritório de advocacia Dr. Yago Rangel Ramos no Rio de Janeiro"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              <div className="p-6 relative text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span>Rio de Janeiro - RJ</span>
                  <span aria-hidden="true">·</span>
                  <span>Atendimento Nacional 100% Digital</span>
                </div>
                <h3 className="font-serif-legal text-lg font-bold text-white mt-1">
                  Estrutura Moderna & Atendimento Sem Fronteiras
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Utilizamos ferramentas digitais com certificação de segurança para que você seja atendido no conforto da sua residência, com o mesmo rigor e proximidade de um encontro presencial.
                </p>
              </div>
            </div>

            {/* Quick Quote / Philosophy */}
            <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/90 text-left">
              <p className="text-sm italic text-slate-300 leading-relaxed font-serif-legal">
                &ldquo;Atrás de cada processo contra o INSS ou pedido de medicamento, há uma vida, uma família e uma história de luta. Nosso papel é transformar a lei em dignidade real.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={LAWYER_PHOTO_URL}
                  onError={(e) => {
                    e.currentTarget.src = LAWYER_PHOTO_FALLBACK;
                  }}
                  alt={`Dr. Yago Rangel Ramos`}
                  className="w-11 h-11 rounded-full object-cover object-top border border-amber-500/50 shadow-md"
                />
                <div>
                  <div className="text-xs text-white font-bold">{LAWYER_NAME}</div>
                  <div className="text-[11px] text-amber-400 font-mono font-medium">{OAB_NUMBER} · Especialista</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Credentials & Methodology */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                O <strong className="text-white font-semibold">{LAWYER_NAME}</strong> ({OAB_NUMBER}) construiu sua trajetória com foco intransigente nas áreas que mais tocam a dignidade da pessoa humana: a <strong className="text-white font-semibold">Previdência Social</strong> e o <strong className="text-white font-semibold">Direito à Saúde</strong>.
              </p>
              <p>
                Com pós-graduação em Direito Previdenciário e mais de 10 anos de experiência prática, o escritório atua para derrubar barreiras burocráticas injustas. Sabemos como o segurado se sente desamparado diante de uma perícia médica superficial do INSS ou quando o médico prescreve um remédio que o Estado ou o Plano de Saúde se recusam a entregar.
              </p>
              <p>
                Nosso diferencial é a <strong className="text-white font-semibold">combinação de agilidade e transparência</strong>: você tem contato direto com o advogado responsável, recebe atualizações constantes do seu processo e nunca é tratado como apenas um número.
              </p>
            </div>

            {/* Structured Credentials List */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Pilares da Nossa Atuação:
              </h4>
              <ul className="space-y-3">
                {credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA directly to WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Conversar Diretamente com o Dr. Yago</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Avaliação de viabilidade sem termos jurídicos difíceis</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
