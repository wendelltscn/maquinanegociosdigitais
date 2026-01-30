
import React from 'react';

export const Urgency: React.FC = () => {
  return (
    <section className="py-20 px-6 text-center bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          O custo da operação sem sistema é o tempo.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Cada dia de improviso é um dia de esforço que não pode ser medido, replicado ou otimizado.
        </p>
        <div className="h-px w-20 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto my-12"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white">
          A organização não está em mais conteúdo.
          <br/>
          <span className="gradient-text">Está no método que você usa para aplicá-lo.</span>
        </h2>
      </div>
    </section>
  );
};
