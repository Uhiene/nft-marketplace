import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-800 px-6 lg:px-12 py-16 mt-8 text-white">
      <div className='flex flex-col lg:flex-row justify-between border-b border-white pb-4'>
        <div className='lg:w-96'>
          <Link to="/">
            <h1 className="text-lg font-bold text-white">
              <span className="bg-gradient-to-l from-[#1e51ed] via-[#ed1eaf] to-[#fe6201] bg-clip-text text-transparent">
                NFT
              </span>
              <span className="ml-1 logo">Marketplace</span>
            </h1>
          </Link>

          <p>Explore a world of digital art and collectibles on our premier NFT marketplace.
            Buy, sell, and trade NFTs securely with our innovative platform.</p>
        </div>
        <div className="flex justify-center lg:justify-start space-x-4 text-white font-medium mt-6 lg:mt-0">
          <Link to="/discovery">Discovery</Link>
          <Link to="/mint">Mint</Link>
          <Link to="/list">List</Link>
        </div>
      </div>
      <div className="container mx-auto text-center text-white pt-4">
        &copy; 2024 DappMentors & CodeDuchess
      </div>
    </footer>
  );
}

export default Footer;
