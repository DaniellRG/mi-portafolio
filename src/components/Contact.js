import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-24 text-white">Contacto</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/DaniellRG" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl text-white hover:text-blue-400 transition-colors">
            <Github size={82} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-g%C3%B3mez-1443961ba/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl text-white hover:text-blue-400 transition-colors">
            <Linkedin size={82} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;