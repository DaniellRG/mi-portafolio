import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-white font-bold text-3xl md:text-4xl"
            whileHover={{ scale: 1.1 }}
          >
            DG
          </motion.div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <motion.ul 
            className={`md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { name: 'Sobre mí', id: 'sobre-mi' },
              { name: 'Habilidades', id: 'habilidades' },
              { name: 'Proyectos', id: 'proyectos' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="block py-2 md:py-0 text-white hover:text-blue-400 transition-colors text-xl md:text-2xl"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;