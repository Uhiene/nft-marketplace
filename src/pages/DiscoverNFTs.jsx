import React from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/resuableComponents/Header'
import { nfts } from '../utils';
import NFTCard from '../components/resuableComponents/NFTCard';

const DiscoverNFTs = () => {
    return (
        <Layout>
            <Header>Discover Amazing NFT&apos;s</Header>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-auto lg:gap-4'>
                {nfts.map((nft) => (
                    <div key={nft.id}>
                        <NFTCard nft={nft} />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default DiscoverNFTs