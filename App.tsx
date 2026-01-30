
import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { IllusionBreak } from './components/IllusionBreak';
import { ProductIntro } from './components/ProductIntro';
import { WhatYouWillMaster } from './components/WhatYouWillMaster';
import { Transformation } from './components/Transformation';
import { Objections } from './components/Objections';
import { Authority } from './components/Authority';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { Urgency } from './components/Urgency';
import { Closing } from './components/Closing';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-200 antialiased overflow-x-hidden">
      <main>
        <Hero />
        <PainPoints />
        <IllusionBreak />
        <ProductIntro />
        <WhatYouWillMaster />
        <Transformation />
        <Objections />
        <Authority />
        <Offer />
        <Guarantee />
        <Urgency />
        <Closing />
      </main>
      <FloatingCTA />
      <footer className="text-center p-8 text-gray-500 text-sm">
        <p>Máquina de Negócios Digitais © {new Date().getFullYear()}</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
