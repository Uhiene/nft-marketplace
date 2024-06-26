import React from 'react'
import Button from '../resuableComponents/Button'
import { Link } from 'react-router-dom'
import HeroImg from './HeroImg'
import TypingHeader from './TypingHeader'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <aside className='lg:w-1/2 text-white space-y-4 lg:space-y-8'>
       <TypingHeader/>
        <p className='text-md lg:text-xl'>Dive into a Universe Where Creativity Meets Blockchain. Explore Exclusive NFTs, Curated Just for You.</p>
        <div className='flex gap-5'>
          <Link to="/discovery">
            <Button bg="bg-blue-700" textColor="text-white" btnText="Discover" />
          </Link>
          <Link to="/mint">
            <Button border="border border-white" bg="bg-none" textColor="text-white" btnText="Mint" className="shadow-none" />
          </Link>
        </div>
      </aside>
      <HeroImg />
    </div>
  )
}

export default Hero