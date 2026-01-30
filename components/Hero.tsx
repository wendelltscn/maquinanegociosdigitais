
import React from 'react';
import { CTAButton } from './CTAButton';

export const Hero: React.FC = () => {
  const CTA_LINK = "https://pay.kiwify.com.br/UExcOHu?afid=mp2bAKYg";
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-grid-white/[0.05]">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0A0A0A] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-4 text-white">
          Transforme ideias em <span className="gradient-text">sistemas</span>.
          <br />
          Transforme sistemas em <span className="gradient-text">vendas</span>.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
          Um manual prático para criar, estruturar e escalar negócios digitais usando copywriting, IA e sistemas inteligentes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CTAButton href={CTA_LINK} primary>
            Quero criar minha máquina de negócios
          </CTAButton>
          <a href="#mastery" className="px-8 py-3 rounded-md font-semibold text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300">
            Entender o sistema
          </a>
        </div>
        <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-violet-500 rounded-lg blur-xl opacity-20"></div>
            <img 
              src="https://i.imgur.com/7RQZ9lE.png" 
              alt="Capa do Ebook Máquina de Negócios Digitais" 
              className="relative w-full h-auto rounded-lg shadow-2xl shadow-violet-500/10" 
            />
        </div>
      </div>
    </section>
  );
};
