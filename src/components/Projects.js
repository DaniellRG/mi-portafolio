import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Conversor de Monedas',
    description: 'El proyecto consiste en una aplicación web diseñada para encriptar y desencriptar textos utilizando un conjunto específico de "llaves" de encriptación.',
    image: '/img/img1.png',
    link: 'https://challenge-1-iota.vercel.app/'
  },
  {
    title: 'Sistema de Gestión de Tareas',
    description: 'Este proyecto es una aplicación web de gestión de tareas que permite a los usuarios organizar y dar seguimiento a sus actividades diarias. Los usuarios pueden crear, editar, eliminar y marcar tareas como completadas, así como filtrarlas por prioridad y estado.',
    image: '/img/img2.png',
    link: 'https://github.com/DaniellRG/Sistema_de_Gesti-n_de_Tareas'
  },
  {
    title: 'Conversor de Monedas',
    description: 'El Conversor de Monedas es una aplicación de consola que permite a los usuarios convertir entre diferentes monedas utilizando tasas de cambio en tiempo real obtenidas de una API externa.',
    image: '/img/img3.png',
    link: 'https://github.com/DaniellRG/Conversor_Monedas'
  },
];

function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 text-lg md:text-xl mb-4">{project.description}</p>
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