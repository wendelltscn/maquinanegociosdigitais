
import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-sky-400 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const PainPoints: React.FC = () => {
  const points = [
    "Falta de um método claro para seguir.",
    "Excesso de informação que gera mais confusão do que clareza.",
    "Tentativas frustradas que consomem tempo e dinheiro.",
    "Dificuldade em transformar conhecimento em vendas reais.",
    "Ausência de uma estrutura para organizar ideias e ações."
  ];

  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Se você se sente travado, o problema não é você.</h2>
        <div className="space-y-4 text-left">
          {points.map((point, index) => (
            <div key={index} className="flex items-center bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <CheckIcon />
              <p className="text-lg text-gray-300">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-2xl md:text-3xl font-bold gradient-text">
          Você não está perdido por falta de esforço.
          <span className="block text-white mt-2">Está travado por falta de sistema.</span>
        </p>
      </div>
    </section>
  );
};
