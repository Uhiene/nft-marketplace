import React from 'react'
import NFTCard from '../cards/NFTCard'
import { nfts } from '../../utils';

const TrendingNFTs = () => {
    return (
        <div className='px-12  mt-20'>
            <h1 className='text-white text-3xl font-semibold mb-5'>Trending NFTs</h1>
            <div className="grid grid-cols-5 gap-3">
                {nfts.map((nft) => (
                    <NFTCard key={nft.id} nft={nft} />
                ))}
            </div>
        </div>
    )
}

export default TrendingNFTs