import React from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/resuableComponents/Header'
import NFTCard from '../components/cards/NFTCard'
import { nfts } from '../utils';

const DiscoverNFTs = () => {
    return (
        <Layout>
            <Header>Discover Amazing NFT&apos;s</Header>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-auto'>
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