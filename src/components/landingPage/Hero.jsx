import React from 'react'
import background from "../../assets/nft1.jpeg"
import Button from '../resuableComponents/Button'

const Hero = () => {
  return (
    <div className="flex justify-between items-center pt-16 px-12">
      <aside className='w-1/2 text-white space-y-8'>
        <h1 className=" text-6xl">Unlock the Future of Digital Artistry </h1>
        <p className='text-xl'>Dive into a Universe Where Creativity Meets Blockchain. Explore Exclusive NFTs, Curated Just for You.</p>
        <div className='flex gap-5'>
          <Button bg="bg-blue-500" textColor="text-white" btnText="Discover" />
          <Button border="border border-white" bg="bg-none" textColor="text-white" btnText="Mint" />
        </div>
      </aside>
      <img src={background} alt="" className='w-1/3 rounded-3xl' />
    </div>
  )
}

export default Hero