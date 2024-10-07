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
            className="text-7xl md:text-7xl font-bold mb-6 text-white"
            whileHover={{ scale: 1.05 }}
          >
            Daniel Gomez
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-6xl mb-8 text-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            Desarrollador Full Stack
          </motion.h2>
          <motion.p 
            className="text-3xl md:text-4xl text-gray-300 mb-8 leading-relaxed"
            whileHover={{ scale: 1.02 }}
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
            <span ref={el} className="text-green-400 text-2xl md:text-3xl font-mono" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;