
import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="border-2 border-dashed border-sky-500/50 rounded-xl p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-500/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.5-4.5M12 2.944L12 12m0 0l4.5 4.5M12 12l-4.5 4.5" /></svg>
            </div>
          <h2 className="text-4xl font-bold text-white mb-4">Declaração de Utilidade</h2>
          <p className="text-lg text-gray-300">
            A função deste manual é fornecer estrutura. Ele não promete resultados, ele entrega processos. A aplicação dos frameworks e sistemas aqui contidos é o que gera clareza e organização para a sua operação. O objetivo é ser uma ferramenta útil e aplicável.
          </p>
        </div>
      </div>
    </section>
  );
};
