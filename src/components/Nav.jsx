import React, { useState } from 'react'
import logo from "../assets/images/logo.webp";
import { Link } from 'react-router-dom';
import phone from "../assets/images/phone.svg";

const Nav = () => {
    const [show, setshow] = useState(false)
    function view() {
        setshow(!show)
        document.body.classList.toggle("max-lg:overflow-hidden")
    }
    return (
        <div>
            <nav className=' relative'>
                <div className="max-w-[1190px] px-3 mx-auto pt-[25px] sm:pt-[41px]">
                    <div className='flex items-center justify-between sm:mr-[38px]'>
                        <div className='flex gap-[135px]'>
                            <div className="flex items-center gap-[60px]">
                                <img className=' max-w-[70px] sm:max-w-[90px] w-full h-[60px] cursor-pointer' src={logo} alt="logo" />
                                <a href='#service' className=' font-poppins max-sm:hidden text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500' onClick={view}>Our Services</a>
                            </div>
                            <div className={`gap-[33px] flex items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full duration-500 max-lg:bg-[#F3D9D9] max-lg:flex-col max-lg:justify-center z-[9] ${show ? "right-0" : "right-[-100%]"} `}>
                                <a href='#service' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500 sm:hidden' onClick={view}>Our Services</a>
                                <a href='#about' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500' onClick={view}>About </a>
                                <a href='#news' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500' onClick={view}>Blog&News</a>
                                <a href='#contact' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500' onClick={view}>Contact </a>
                                <a href='#account' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500 md:hidden' onClick={view}>Account</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-[20px] sm:gap-[30px]">
                            <a href='#account' className=' font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500 max-md:hidden' onClick={view}>Account</a>
                            <span className='text-[#DAD8D8] pb-2 max-md:hidden'>|</span>
                            <div className="flex items-center gap-[6px] ">
                                <img src={phone} alt="phone" />
                                <a href="tel:+234906732284" className='font-poppins text-black text-[15px] font-semibold before:w-0 relative before:absolute before:bg-[#B00000] before:h-[2px] before:bottom-[-4px] before:left-[12%] before:hover:w-[80%] before:transition-all duration-500'>+2349067322844</a>
                            </div>
                            {show ?
                                (<label className=' hidden relative z-10 flex-col max-lg:flex ' onClick={view}>
                                    <span className='bg-[#B00000] w-[45px] h-[5px] rounded-lg mt-[10px] rotate-45 duration-500'></span>
                                    <span className='bg-[#B00000] w-[45px] h-[5px] rounded-lg mt-[10px] absolute -rotate-45 duration-500'></span>
                                </label>) :
                                (<label className='flex flex-col lg:hidden relative z-10' onClick={view}>
                                    <span className='bg-[#B00000] w-[35px] sm:w-[45px] h-[5px] mt-[10px] rounded-xl duration-500'></span>
                                    <span className='bg-[#B00000] w-[35px] sm:w-[45px] h-[5px] mt-[10px] rounded-xl duration-500'></span>
                                    <span className='bg-[#B00000] w-[35px] sm:w-[45px] h-[5px] mt-[10px] rounded-xl duration-500'></span>
                                </label>)}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
