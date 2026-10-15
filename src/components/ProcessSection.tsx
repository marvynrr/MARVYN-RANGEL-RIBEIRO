import { MessageCircle, FileUp, Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/legalData";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Clique no Botão do WhatsApp",
      description: "Inicie uma conversa direta e segura. Você não precisa preencher formulários extensos nem esperar dias por um retorno.",
      detail: "Atendimento ágil pelo celular ou computador."
    },
    {
      step: "02",
      title: "Envie sua Dúvida ou Documentos",
      description: "Conte brevemente sua situação (se o benefício foi negado, qual remédio necessita ou sua idade). Se tiver cartas do INSS ou laudos, envie fotos nítidas ou PDF.",
      detail: "Sigilo absoluto garantido pelo Código de Ética da OAB."
    },
    {
      step: "03",
      title: "Avaliação Especializada sem Complicação",
      description: "O Dr. Yago analisará a viabilidade jurídica do seu caso em linguagem clara e humana, indicando a melhor estratégia administrativa ou judicial.",
      detail: "Você saberá exatamente quais são suas chances reais e próximos passos."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            04. Como Funciona o Atendimento
          </div>
          <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight [text-wrap:balance]">
            Atendimento descomplicado e direto com o advogado especialista
          </h2>
          <p className="text-base text-slate-300 mt-2">
            Entenda como funciona nosso processo de atendimento em 3 etapas simples, sem filas e no conforto da sua casa.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative text-left">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-amber-500/80">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/80 text-amber-400">
                    {index === 0 && <MessageCircle className="w-5 h-5" />}
                    {index === 1 && <FileUp className="w-5 h-5" />}
                    {index === 2 && <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="font-serif-legal text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Conversion Callout Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif-legal text-2xl font-bold text-white">
              Pronto para dar o primeiro passo e resguardar seus direitos?
            </h3>
            <p className="text-sm text-slate-300">
              Não deixe prazos do INSS expirarem ou tratamentos de saúde serem adiados. Clique e fale agora com o Dr. Yago Rangel Ramos no WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá Dr. Yago, gostaria de iniciar meu atendimento pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-xl shadow-emerald-950/60 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Falar com Advogado Especialista</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
