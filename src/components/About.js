import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

function About() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "function helloWorld() {",
        "  console.log('Hello, World!');",
        "}",
        "",
        "const skills = ['JavaScript', 'React', 'Node.js'];",
        "",
        "skills.forEach(skill => {",
        "  console.log('I love ' + skill + '!');",
        "});"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-1/2 text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Daniel Gomez
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-6xl mb-8 text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Desarrollador Full Stack
          </motion.h2>
          <motion.p 
            className="text-3xl md:text-4xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Soy un Ingeniero de Sistemas apasionado por crear soluciones innovadoras y eficientes. 
            Mi enfoque se centra en el desarrollo Full Stack, combinando mis habilidades en el front-end y back-end 
            para construir aplicaciones web robustas y escalables.
          </motion.p>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <span ref={el} className="text-green-400 text-xl md:text-2xl font-mono" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;