import React from 'react';
import { motion } from 'framer-motion';
import background from '../../assets/nft1.jpeg'; 

const HeroImg = () => {
  return (
    <motion.img
      src={background}
      alt=""
      className="mt-14 lg:mt-0 w-full lg:w-1/3 lg:rounded-3xl"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default HeroImg;
