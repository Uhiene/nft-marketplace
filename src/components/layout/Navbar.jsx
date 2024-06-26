import React from 'react';
import HamburgerMenu from '../resuableComponents/HamburgerMenu';
import Button from '../resuableComponents/Button';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-[#100E09] border-b border-blue-700 p-4 px-6 lg:px-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg font-bold text-white">
            <span className="bg-gradient-to-l from-[#1e51ed] via-[#ed1eaf] to-[#fe6201] bg-clip-text text-transparent">
              NFT
            </span>
            <span className="ml-1 logo">Marketplace</span>
          </h1>
        </Link>
        <div>
          <div className="hidden lg:flex items-center space-x-4 text-white font-medium">
            <Link
              to="/discovery"
              className={`relative ${location.pathname === '/discovery' ? 'text-blue-500' : 'hover:text-blue-500 transition ease-in-out duration-1000'}`}
            >
              Discovery
            </Link>
            <Link
              to="/mint"
              className={`relative ${location.pathname === '/mint' ? 'text-blue-500' : 'hover:text-blue-500 transition ease-out duration-1000'}`}
            >
              Mint
            </Link>
            <Link
              to="/list"
              className={`relative ${location.pathname === '/list' ? 'text-blue-500' : 'hover:text-blue-500 transition ease-out duration-1000'}`}
            >
              List
            </Link>
            <div className='pl-10'>
              <Button bg="bg-blue-800" textColor="text-white" btnText="Connect Wallect" />
            </div>
          </div>

          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
