import React from 'react';

const NFTCard = ({ nft }) => {
  return (
    <div className="w-52 rounded overflow-hidden shadow-lg m-2 bg-[#191C20] text-white ">
      <img className="w-full h-40 object-cover" src={nft.image} alt={nft.name} />
      <div className="p-2 space-y-2">
        <div className="font-bold text-lg">{nft.name}</div>
        <p className="text-sm">{nft.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
