"use client"
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const pathname = usePathname();
    const { data: session } = useSession();
    const user = session?.user;
     if(pathname.includes('dashboard')){
        return null;
    }
    return (
        <div className='bg-[#0F172B]'>
            <div className='lg:container mx-auto px-6 py-12 text-white space-y-8'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-1'>
                            
                            <h2 className='font-bold'>Ticket Kino</h2>
                        </div>
                        <p className='text-[#90A1B9]'>Your trusted platform for seamless travel booking. Discover destinations, book tickets, and embark on unforgettable journeys with confidence..</p>

                    </div>

                    <div className='space-y-4'>
                        <h2 className='font-bold'>Quick Links</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/alltickets"}>All Tickets</Link>
                            </li>
                            <li>
                                <Link href={user?.role === "vendor" ? "/dashboard/vendor" : user?.role === "admin" ? "/dashboard/admin" : "/dashboard/traveler"}>Dashboard</Link>
                            </li>
                            <li>
                                <Link href={"/myprofile"}>My Profile</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='font-bold'>Contact</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>support@ticketkino.com</li>
                            <li>+880 1234 567890</li>
                            <li>Rajshahi, Bangladesh</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='font-bold'>Payment Method</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>Stripe</li>
                        </ul>
                    </div>
                </div>

                <hr className='text-slate-500' />
                <div className='text-center text-sm text-[#90A1B9] mt-4'>
                    &copy; {new Date().getFullYear()} Ticket Kino. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;