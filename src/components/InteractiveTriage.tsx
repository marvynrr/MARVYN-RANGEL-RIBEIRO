import { useState } from "react";
import { MessageCircle, HeartHandshake, ShieldAlert, Pill, FileCheck, CheckCircle2, ArrowRight, RotateCcw } from "lucide-react";
import { TRIAGE_CASES, getWhatsAppUrl } from "../data/legalData";

export default function InteractiveTriage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(TRIAGE_CASES[0].id);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(TRIAGE_CASES[0].scenarios[0].id);

  const currentCase = TRIAGE_CASES.find((c) => c.id === selectedCaseId) || TRIAGE_CASES[0];
  const currentScenario = currentCase.scenarios.find((s) => s.id === selectedScenarioId) || currentCase.scenarios[0];

  const handleCaseSelect = (caseId: string) => {
    setSelectedCaseId(caseId);
    const targetCase = TRIAGE_CASES.find((c) => c.id === caseId);
    if (targetCase && targetCase.scenarios.length > 0) {
      setSelectedScenarioId(targetCase.scenarios[0].id);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "bpc":
        return <HeartHandshake className="w-5 h-5" />;
      case "auxilio":
        return <ShieldAlert className="w-5 h-5" />;
      case "remedio":
        return <Pill className="w-5 h-5" />;
      default:
        return <FileCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="triagem" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-t border-b border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            03. Diagnóstico Rápido Online
          </div>
          <h2 className="font-serif-legal text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight [text-wrap:balance]">
            Descubra a viabilidade jurídica do seu caso em 2 passos simples
          </h2>
          <p className="text-base text-slate-300 mt-2">
            Selecione a sua situação atual para ver como a jurisprudência protege seus direitos e receba uma orientação direcionada no WhatsApp.
          </p>
        </div>

        {/* Interactive Triage Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1: Choose Main Problem */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-sm">Passo 1:</span>
                <span>Qual é o seu objetivo principal?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TRIAGE_CASES.map((tCase) => {
                  const isSelected = tCase.id === selectedCaseId;
                  return (
                    <button
                      key={tCase.id}
                      type="button"
                      onClick={() => handleCaseSelect(tCase.id)}
                      className={`p-4 rounded-xl text-left transition-all border ${
                        isSelected
                          ? "bg-slate-800/90 border-amber-500/80 shadow-md ring-1 ring-amber-500/50"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-lg shrink-0 ${
                            isSelected
                              ? "bg-amber-500 text-slate-950 font-bold"
                              : "bg-slate-800 text-amber-400"
                          }`}
                        >
                          {getIcon(tCase.id)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white leading-snug">
                            {tCase.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {tCase.subtitle}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Specific Scenario */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-sm">Passo 2:</span>
                <span>Qual o status atual da sua solicitação?</span>
              </label>

              <div className="space-y-2.5">
                {currentCase.scenarios.map((scenario) => {
                  const isScenarioSelected = scenario.id === selectedScenarioId;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => setSelectedScenarioId(scenario.id)}
                      className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between gap-4 border ${
                        isScenarioSelected
                          ? "bg-amber-500/10 border-amber-500/60 text-white"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-sm font-medium">{scenario.label}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isScenarioSelected
                            ? "border-amber-400 bg-amber-400 text-slate-950"
                            : "border-slate-700"
                        }`}
                      >
                        {isScenarioSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Panel: Strategic Legal Guidance + WhatsApp Direct Action */}
          <div className="lg:col-span-5 text-left">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Avaliação Preliminar
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Dr. Yago Rangel Ramos
                </div>
              </div>

              <div className="py-5 space-y-4">
                <div>
                  <div className="text-xs font-mono text-slate-400">Situação Analisada:</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {currentCase.title}
                  </div>
                  <div className="text-xs text-amber-400/90 font-medium">
                    {currentScenario.label}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold text-slate-200">Recomendação Jurídica Estratégica:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentScenario.outcome}
                  </p>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed">
                  Para verificarmos os prazos legais e documentos cabíveis, envie esse resumo diretamente para o WhatsApp do Dr. Yago com o botão abaixo.
                </div>
              </div>

              {/* Conversion WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(currentScenario.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/60 group"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20 transition-transform group-hover:scale-110" />
                  <span>Consultar Este Caso no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <div className="mt-3 text-[11px] text-center text-slate-500">
                  Sem custo para envio da mensagem preliminar · Resposta rápida
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
