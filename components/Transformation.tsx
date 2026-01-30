
import React from 'react';

const BeforeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AfterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Transformation: React.FC = () => {
  const beforeItems = ["Confusão", "Tentativas falhas", "Falta de vendas", "Falta de método", "Falta de estrutura", "Falta de clareza"];
  const afterItems = ["Clareza", "Estrutura", "Sistema", "Método", "Processo", "Direção", "Máquina operacional"];

  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Sua Transformação: De <span className="gradient-text">Tentativa</span> para <span className="gradient-text">Sistema</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-red-400 mb-6">Antes</h3>
            <ul className="space-y-3">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-center text-lg text-gray-400">
                  <BeforeIcon /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Depois</h3>
            <ul className="space-y-3">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-center text-lg text-white font-semibold">
                  <AfterIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
