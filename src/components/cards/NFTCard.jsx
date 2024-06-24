import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import Button from "../resuableComponents/Button"

const NFTCard = ({ nft }) => {
  return (
    <div className="w-52 rounded overflow-hidden shadow-lg m-2 bg-[#191C20] text-white mx-auto">
      <img className="w-full h-40 object-cover" src={nft.image} alt={nft.name} />
      <div className="p-2 space-y-2">
        <h1 className="font-bold text-md text-blue-700">{nft.name}</h1>
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <FaEthereum className='text-slate-100' />
          <p className="text-sm">{nft.price}</p>
        </div>
        <button className='bg-blue-500 text-xs py-2 px-6 rounded-xl text-white'>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
