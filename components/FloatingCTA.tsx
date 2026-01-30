
import React, { useState, useEffect } from 'react';
import { CTAButton } from './CTAButton';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const CTA_LINK = "https://pay.kiwify.com.br/UExcOHu?afid=mp2bAKYg";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0A0A] to-transparent z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-4xl mx-auto">
        <CTAButton href={CTA_LINK} primary className="w-full text-center text-lg md:text-xl py-3">
          Quero Criar Minha Máquina Agora
        </CTAButton>
      </div>
    </div>
  );
};
