import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../resuableComponents/HamburgerMenu';
import Button from '../resuableComponents/Button';

function Navbar() {
  return (
    <nav className="fixed w-full bg-[#100E09] border-b-2 border-blue-500 p-4 px-6 lg:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">NFT Marketplace</Link>
        <div>
          <div className="hidden lg:flex items-center space-x-4 text-white font-medium">
            <Link to="/discovery">Discovery</Link>
            <Link to="/mint">Mint</Link>
            <Link to="/list" >List</Link>
            <div className='pl-10'>
            <Button bg="bg-blue-500" textColor="text-white" btnText="Connect Wallect" />
            </div>
          </div>
          <HamburgerMenu />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
