import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import MovingDots from './components/MovingDots';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <MovingDots />
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <About />
          <Suspense fallback={<div>Cargando...</div>}>
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div>Cargando...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;