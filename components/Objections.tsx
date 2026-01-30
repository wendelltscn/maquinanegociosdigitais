
import React from 'react';

// FIX: Explicitly type Objection as a React.FC to ensure it correctly handles React's special props like `key`.
// The original inline type was too narrow, causing TypeScript to report an error when a `key` was provided in a list.
const Objection: React.FC<{ question: string, answer: string }> = ({ question, answer }) => (
  <div className="border border-gray-800 rounded-lg overflow-hidden">
    <div className="p-5 bg-gray-900">
      <h3 className="text-lg font-semibold text-white">"{question}"</h3>
    </div>
    <div className="p-5 bg-gray-900/50">
      <p className="text-gray-300"><span className="text-sky-400 font-bold mr-2">→</span>{answer}</p>
    </div>
  </div>
);

export const Objections: React.FC = () => {
  const objectionsList = [
    { q: "Isso é muito avançado para um iniciante?", a: "Pelo contrário. O manual foi projetado para construir a base. É mais útil para quem está começando, pois evita a criação de vícios operacionais errados." },
    { q: "É só mais um ebook genérico com teoria?", a: "Não. É um manual operacional com frameworks e processos. O foco é 100% na aplicação e estruturação, não em conceitos abstratos." },
    { q: "Vou encontrar aqui alguma fórmula mágica?", a: "Nenhuma. O que você vai encontrar são sistemas, métodos e processos de trabalho. É uma ferramenta, não uma promessa de resultado." },
    { q: "Preciso de conhecimento técnico prévio?", a: "Não. Você precisa de disposição para organizar seu pensamento e seguir um processo. A complexidade está na estrutura, não na execução." },
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">Análise de Objeções Comuns</h2>
        <div className="space-y-4">
          {objectionsList.map((obj, index) => (
            <Objection key={index} question={obj.q} answer={obj.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
