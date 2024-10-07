import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Daniel Gomez. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;