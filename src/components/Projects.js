import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una breve descripción del Proyecto 1. Este proyecto se enfoca en...',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://proyecto1.com'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción corta del Proyecto 2. Esta aplicación permite a los usuarios...',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://proyecto2.com'
  },
  {
    title: 'Proyecto 3',
    description: 'El Proyecto 3 es una innovadora solución que aborda...',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://proyecto3.com'
  },
];

function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-5xl font-bold mb-24 text-center text-white">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 text-lg md:text-xl mb-8">{project.description}</p>
                  <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Ver proyecto
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;