import React from 'react';
import Slider from 'react-slick';
import NFTCard from '../cards/NFTCard';
import { nfts } from '../../utils';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingNFTs = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500, // Speed of the sliding animation (in ms)
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Delay between each auto-scroll (in ms)
       // Enable center mode
      // Adjust as needed for spacing
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1050, // tablet breakpoint
                settings: {
                    slidesToShow: 4, // Number of slides to show on tablets
                     centerPadding: "0"
                }
            },
            {
                breakpoint: 768, // phone breakpoint
                settings: {
                    slidesToShow: 3, // Number of slides to show on phones
                    centerPadding: "0"
                }
            },
            {
                breakpoint: 450, // phone breakpoint
                settings: {
                    slidesToShow: 1, // Number of slides to show on phones
                    centerMode: true,
                    // centerPadding: "10px",
                }
            }
        ]
    };

    return (
        <div className='mt-20'>
            <h1 className='text-white text-3xl font-semibold mb-5'>Trending NFTs</h1>
            <div className="carousel-container">
                <Slider {...settings}>
                    {nfts.map((nft) => (
                        <div key={nft.id}>
                            <NFTCard nft={nft} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TrendingNFTs;
