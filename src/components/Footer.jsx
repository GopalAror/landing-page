import React from 'react'
import logo from '../assets/images/foot-logo.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    const y = new Date();
    const toyear =y.getFullYear();
    return (
        <div className='bg-[#B00000]'>
            <div className='mx-auto px-3 max-w-[1240px] py-[64px]'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5'>
                    <div className='col-span-2 md:col-span-4 flex flex-col'>
                        <Link><img src={logo} alt='logo' /></Link>
                        <p className='text-[#E6E6E6] font-Inter font-normal text-base leading-8 mt-4 max-w-[296px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-4 sm:gap-6'>
                            <li className='text-white font-Inter font-bold text-base'>Service</li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Domain</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Shared Hosting</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Cloud Hosting</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Private Hosting</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-4 sm:gap-6'>
                            <li className='text-white font-Inter font-bold text-base'>Hosting</li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Cheap Hosting</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Hosting Wordpress</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Email Hosting</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Hosting Unlimited</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-4 sm:gap-6'>
                            <li className='text-white font-Inter font-bold text-base'>Company</li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>About</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Career</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-4 sm:gap-6'>
                            <li className='text-white font-Inter font-bold text-base'>Help</li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>FAQ</Link></li>
                            <li><Link href="#" className='text-[#E6E6E6] leading-8 font-Inter font-normal text-base'>Help support</Link></li>
                        </ul>
                    </div>
                </div>
                <p className='text-white font-Inter text-base font-normal leading-8 mt-[40px] sm:mt-[96px] mb-4'>Built by Jeremiah with &#129293; in Lagos. Copyright {toyear}</p>
            </div>
        </div>
    )
}

export default Footer