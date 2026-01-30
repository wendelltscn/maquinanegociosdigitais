
import React from 'react';
import { CTAButton } from './CTAButton';

export const Closing: React.FC = () => {
  const CTA_LINK = "https://pay.kiwify.com.br/UExcOHu?afid=mp2bAKYg";

  return (
    <section className="py-20 px-6 text-center bg-[#101010]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Ou você constrói um sistema,
          <br/>
          ou passa a vida sobrevivendo de <span className="gradient-text">tentativas</span>.
        </h2>
        <div className="mt-10">
          <CTAButton href={CTA_LINK} primary className="w-full max-w-md mx-auto text-xl py-4">
            Quero minha Máquina de Negócios Digitais agora
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
