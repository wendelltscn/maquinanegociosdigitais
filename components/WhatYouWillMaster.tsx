
import React from 'react';

const MasteryCard: React.FC<{ title: string, icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center transition-all duration-300 hover:border-sky-500 hover:bg-gray-900 hover:-translate-y-1">
    <div className="text-sky-400 mb-4">{icon}</div>
    <h3 className="font-semibold text-white text-sm">{title}</h3>
  </div>
);

const icons = {
    structure: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    product: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    copywriting: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    funnels: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" /></svg>,
    ai: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    offers: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    sales: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    story: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
};

export const WhatYouWillMaster: React.FC = () => {
    const masteryItems = [
        { title: "77 Headlines Persuasivas", icon: icons.copywriting },
        { title: "Estrutura de Copywriting AIDA", icon: icons.copywriting },
        { title: "Comandos Prontos para ChatGPT", icon: icons.ai },
        { title: "Frameworks de Criação de Produtos", icon: icons.product },
        { title: "Estrutura de Anúncios que Convertem", icon: icons.sales },
        { title: "Storytelling Aplicado a Vendas", icon: icons.story },
        { title: "Estrutura de VSL (Vídeo de Vendas)", icon: icons.sales },
        { title: "Criação de Oferta Irresistível", icon: icons.offers },
        { title: "Construção de Funil de Vendas", icon: icons.funnels },
        { title: "Lógica de Produto Digital", icon: icons.product }
    ];

  return (
    <section id="mastery" className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">A Arquitetura da <span className="gradient-text">Máquina</span>: O Que Você Acessa</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {masteryItems.map(item => (
            <MasteryCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
