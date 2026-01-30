
import React from 'react';

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-3 mt-1 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        <span className="text-gray-300">{children}</span>
    </li>
);

export const ProductIntro: React.FC = () => {
  const points = [
    "Criar headlines que capturam atenção e geram cliques.",
    "Estruturar páginas de vendas que convertem visitantes em clientes.",
    "Desenvolver produtos digitais que as pessoas desejam comprar.",
    "Construir ofertas irresistíveis que eliminam a hesitação.",
    "Usar IA (ChatGPT) como uma ferramenta para acelerar a produção.",
    "Criar anúncios persuasivos que geram tráfego qualificado.",
    "Desenhar funis de vendas que guiam o cliente pela jornada de compra.",
    "Estruturar processos replicáveis para escalar suas operações.",
  ];

  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
        Máquina de Negócios Digitais não ensina só o que fazer.
        <br/> 
        <span className="gradient-text">Ensina como pensar, estruturar e construir.</span>
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Este manual operacional é a sua caixa de ferramentas para montar um negócio digital como um sistema, peça por peça.
        </p>

        <div className="mt-12 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Com este sistema, você vai ser capaz de:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                {points.map((point, index) => (
                    <BulletPoint key={index}>{point}</BulletPoint>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};
