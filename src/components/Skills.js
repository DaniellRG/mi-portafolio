import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaDatabase, FaGitAlt, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' }
];

function Skills() {
  return (
    <section id="habilidades" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-5xl font-bold mb-24 text-center text-white">Habilidades</h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <skill.icon size={64} color={skill.color} />
              <p className="mt-2 text-xl md:text-2xl text-center text-white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;