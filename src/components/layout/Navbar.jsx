import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-transparent border-b-2 border-blue-500 p-4 px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">NFT Marketplace</Link>
        <div className="hidden md:flex space-x-4 text-white font-medium">
          <Link to="/">Mint</Link>
          <Link to="/about">List</Link>
          <Link to="/contact">Discovery</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">Menu</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
