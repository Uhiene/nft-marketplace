import React from 'react';
import Button from "./Button";
import dfinity from "../../assets/dfinity.svg";

const NFTCard = ({ nft }) => {
  return (
    <div className="w-52 rounded overflow-hidden m-2 bg-[#191c20a5] text-white mx-auto shadow shadow-blue-500 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out">
      <img className="w-full h-40 object-cover" src={nft.image} alt={nft.name} />
      <div className="p-2 pb-4 space-y-2">
        <h1 className="font-bold text-md text-blue-700">{nft.name}</h1>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <img src={dfinity} alt="" className='w-6' />
            <p className="text-sm">{nft.price}</p>
          </div>
          <Button bg="bg-blue-800" textColor="text-white" btnText="Buy" className="min-w-fit py-0.5 text-sm"/>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
