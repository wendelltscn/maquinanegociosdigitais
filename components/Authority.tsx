
import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">Sobre o Autor</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
          <div className="md:w-1/3 text-center flex-shrink-0">
              <img 
                  src="https://i.imgur.com/HMs32CE.jpeg" 
                  alt="Wendell Toscano, autor do Ebook" 
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-700 shadow-lg" 
              />
              <h3 className="text-2xl font-bold text-white mt-4">Wendell Toscano</h3>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              Wendell Toscano é um construtor de sistemas de negócios digitais. Seu trabalho é focado em transformar ideias complexas em processos simples e replicáveis.
            </p>
            <blockquote className="mt-6 border-l-4 border-sky-500 pl-4 italic text-xl text-white">
              “Negócios são construídos com método, não com motivação.”
            </blockquote>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              O "Máquina de Negócios Digitais" foi criado para ser o manual que ele gostaria de ter recebido no início: um guia sem rodeios, focado em ferramentas práticas e modelos de execução. Este material não é para quem busca atalhos, mas para quem está pronto para construir um negócio com base sólida, lógica e método.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
