import Image from 'next/image';
import React from 'react';
import BannerImage from "@/assests/banner.png";
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className="px-8 py-28 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
            <div className='flex flex-col md:flex-row justify-around'>
                <div>
                    <span className='bg-[#22D3EE]/10 rounded-2xl px-4 text-[#22D3EE]'>Trusted By 500K+ travelers worldwide</span>
                    <h1 className='text-6xl font-bold mt-4'>Your Journey</h1>
                    <h2 className='text-5xl font-semibold mt-2'>Starts Here</h2>
                    <p className='text-[#45556C] mt-4'>Discover the world with ease. Book flights, trains, and <br /> buses to over 10,000 destinations. Best prices guaranteed.</p>
                    <Button className='mt-4'>Explore Destinations</Button>
                </div>
                <div>
                    <Image
                    src={BannerImage}
                    alt="BannerImage"
                    width={200}
                    height={200} 
                    className='w-125'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;