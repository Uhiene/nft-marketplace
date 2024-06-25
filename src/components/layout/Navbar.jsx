import React from 'react';
import HamburgerMenu from '../resuableComponents/HamburgerMenu';
import Button from '../resuableComponents/Button';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-[#100E09] border-b border-blue-700 p-4 px-6 lg:px-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">NFT Marketplace</Link>
        <div>
          <div className="hidden lg:flex items-center space-x-4 text-white font-medium">
            <Link
              to="/discovery"
              className={`relative py-2 ${location.pathname === '/discovery' ? 'border-b-2 border-blue-500' : 'hover:border-b-2 hover:border-gray-300'}`}
            >
              Discovery
            </Link>
            <Link
              to="/mint"
              className={`relative py-2 ${location.pathname === '/mint' ? 'border-b-2 border-blue-500' : 'hover:border-b-2 hover:border-gray-300'}`}
            >
              Mint
            </Link>
            <Link
              to="/list"
              className={`relative py-2 ${location.pathname === '/list' ? 'border-b-2 border-blue-500' : 'hover:border-b-2 hover:border-gray-300'}`}
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
