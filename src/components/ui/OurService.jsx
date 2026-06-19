import React from 'react';

const OurService = () => {
    return (
        <div className="bg-[linear-gradient(to_right,rgba(67,56,202,0.05)_0%,rgba(0,0,0,0)_50%,rgba(168,85,247,0.05)_100%)] py-20">
            <div className='px-8'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <span className="bg-[#22D3EE] rounded-2xl px-2">Why Choose Us</span>
                    <h2 className='text-4xl font-bold'>Travel with Confidence</h2>
                    <p className='text-[#45556C]'>We`re committed to making your journey smooth, secure, and unforgettable</p>
                </div>
                <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-b'>
                    <div className='rounded-md shadow flex flex-col justify-center p-4 hover:scale '>
                        <h2 className='text-xl font-semibold'>Secure Booking</h2>
                        <p className='text-[#45556C]'>Your data is protected with industry-leading encryption</p>
                    </div>
                    <div className='rounded-md shadow flex flex-col justify-center p-4 hover:scale '>
                        <h2 className='text-xl font-semibold'>Best Prices</h2>
                        <p className='text-[#45556C]'>Price match guarantee and exclusive deals</p>
                    </div>
                    <div className='rounded-md shadow flex flex-col justify-center p-4 hover:scale '>
                        <h2 className='text-xl font-semibold'>Trusted Platform</h2>
                        <p className='text-[#45556C]'>Rated 4.9/5 by over 500K travelers</p>
                    </div>
                    <div className='rounded-md shadow flex flex-col justify-center p-4 hover:scale '>
                        <h2 className='text-xl font-semibold'>Secure Booking</h2>
                        <p className='text-[#45556C]'>Your data is protected with industry-leading encryption</p>
                    </div>
                </div>
            </div>
</div>
    );
};

export default OurService;