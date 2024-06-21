import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyApp</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">Menu</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
