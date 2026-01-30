
import React from 'react';
import { CTAButton } from './CTAButton';

const Feature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center text-gray-300">
        <svg className="w-5 h-5 mr-3 text-sky-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        {children}
    </div>
);

export const Offer: React.FC = () => {
    const CTA_LINK = "https://pay.kiwify.com.br/UExcOHu?afid=mp2bAKYg";
  return (
    <section className="py-20 px-6 text-center bg-[#0A0A0A] bg-grid-white/[0.05] relative">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0A0A0A] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10">Acesse a estrutura completa agora</h2>
        
        <div className="my-12 border border-violet-500/30 bg-gray-900/50 rounded-xl p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-white">Ebook: Máquina de Negócios Digitais</h3>
            <p className="text-gray-400 mt-1">Ferramentas e Técnicas para Negócios</p>
            <img 
                src="https://i.imgur.com/7RQZ9lE.png" 
                alt="Capa do Ebook" 
                className="w-2/3 mx-auto my-6 rounded-md shadow-lg" 
            />
            <div className="space-y-3 text-left w-fit mx-auto text-lg">
                <Feature>Formato: PDF Digital</Feature>
                <Feature>Acesso: Imediato e Vitalício</Feature>
                <Feature>Entrega: Automática no seu e-mail</Feature>
            </div>
        </div>

        <CTAButton href={CTA_LINK} primary className="w-full max-w-md mx-auto text-xl py-4">
          Quero meu acesso imediato
        </CTAButton>
        <p className="mt-4 text-gray-500">Compra segura • Acesso vitalício • Aplicação prática</p>
      </div>
    </section>
  );
};
