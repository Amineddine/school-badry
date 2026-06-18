import { useState } from 'react';
import { useSmoothScroll } from './lib/useSmoothScroll';
import { useReveal } from './lib/useReveal';
import { Loader } from './components/Loader';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Programme } from './components/Programme';
import { Niveaux } from './components/Niveaux';
import { Atouts } from './components/Atouts';
import { Galerie } from './components/Galerie';
import { Inscription } from './components/Inscription';
import { Lieu } from './components/Lieu';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();
  const revealRef = useReveal<HTMLDivElement>([ready]);

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Nav />
      <main ref={revealRef} className="grain">
        <Hero ready={ready} />
        <Intro />
        <Programme />
        <Niveaux />
        <Atouts />
        <Galerie />
        <Inscription />
        <Lieu />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
