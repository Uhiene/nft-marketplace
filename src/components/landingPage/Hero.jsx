import React from 'react'
import background from "../../assets/nft1.jpeg"
import Button from '../resuableComponents/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <aside className='lg:w-1/2 text-white space-y-8'>
        <h1 className=" text-6xl">Unlock the Future of Digital Artistry </h1>
        <p className='text-xl'>Dive into a Universe Where Creativity Meets Blockchain. Explore Exclusive NFTs, Curated Just for You.</p>
        <div className='flex gap-5'>
          <Link to="/discovery">
          <Button bg="bg-blue-700" textColor="text-white" btnText="Discover" />
          </Link>
          <Link to="/mint">
          <Button border="border border-white" bg="bg-none" textColor="text-white" btnText="Mint" className="shadow-none" />
          </Link>
        </div>
      </aside>
      <img src={background} alt="" className='mt-14 lg:mt-0 w-full lg:w-1/3 lg:rounded-3xl' />
    </div>
  )
}

export default Hero