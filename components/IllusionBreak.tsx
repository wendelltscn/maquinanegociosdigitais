
import React from 'react';

export const IllusionBreak: React.FC = () => {
  return (
    <section className="py-20 px-6 text-center bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <div className="border border-violet-500/30 bg-violet-500/5 p-8 md:p-12 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white">
            Isto não é uma fórmula mágica.
            <br />
            <span className="gradient-text">É um manual de construção.</span>
            </h2>
            <div className="h-px w-20 bg-gradient-to-r from-sky-400 to-violet-500 mx-auto my-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Negócios não crescem por sorte. Crescem por <span className="font-bold text-white">estrutura</span>. Chega de promessas vazias. É hora de ter um método e um processo de execução.
            </p>
        </div>
      </div>
    </section>
  );
};
