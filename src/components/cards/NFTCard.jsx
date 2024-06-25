import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import Button from "../resuableComponents/Button"

const NFTCard = ({ nft }) => {
  return (
    <div className="w-52 rounded overflow-hidden shadow-lg m-2 bg-[#191c20a5] text-white mx-auto">
      <img className="w-full h-40 object-cover" src={nft.image} alt={nft.name} />
      <div className="p-2 pb-4 space-y-2">
        <h1 className="font-bold text-md text-blue-700">{nft.name}</h1>
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <FaEthereum className='text-slate-600' />
          <p className="text-sm">{nft.price}</p>
        </div>
        <Button bg="bg-blue-800" textColor="text-white" btnText="Buy" className="min-w-fit py-0.5 text-sm"/>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
