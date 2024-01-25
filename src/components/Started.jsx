import React, { useState } from 'react'

const Started = () => {
    const [toggle, settoggle] = useState(false)
    const [Premium, setPremium] = useState("firstone")
    function btn() {
        settoggle(!toggle)
    }
    function latest(first) {
        setPremium(first)
    }
    return (
        <div className='overflow-clip' id='about'>
            <div className="max-w-[1097px] pt-[65px] md:pt-[100px] mx-auto px-3 flex justify-center items-center flex-col">
                <h2 className='text-black text-center font-poppins sm:text-[42px] text-[35px] md:text-[50px] font-semibold leading-[47px] md:leading-[60px] max-w-[650px]'  data-aos="zoom-in">Ready to get started with Lemon Wares?</h2>
                <p className='text-black text-center font-poppins text-[20px] sm:text-[25px] font-normal pt-[28px] sm:pt-[38px]' data-aos="zoom-in">Choose the package that suits you</p>
                <div className='flex flex-wrap items-center justify-center sm:pl-[77px]'>
                    <div className="flex items-center py-[25px] md:py-[55px] gap-[28px]"  data-aos="zoom-in">
                        <p className=' text-black font-normal font-poppins text-center text-[20px] sm:text-[25px] leading-[25px]'>Monthly</p>
                        <div className={`relative w-[93px] h-[50px]  px-[9px] py-[10px] cursor-pointer rounded-[73px] duration-500 ${toggle ? " bg-black" : "bg-[#B00000]"} `} onClick={btn}>
                            <div className={`bg-white h-[30px] w-[30px] absolute rounded-full duration-500 transition-all ${toggle ? "right-[10%]" : "right-[60%]"}`}></div>
                        </div>
                        <p className='text-black font-normal font-poppins text-center text-[20px] sm:text-[25px] leading-[25px]'>Yearly</p>
                    </div>
                    <button className='text-black text-center font-poppins font-medium text-[10px] ml-[17px] bg-[#FFE87A] rounded-[8px] py-[7px] px-2'>20%  discount</button>
                </div>
                <div className="flex items-center border-b-[4px] max-w-[856px] w-full">
                    <p className={`text-black font-poppins text-[30px] font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${Premium === "firstone" ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0" : ""}`} onClick={() => latest("firstone")}>Basic</p>
                    <p className={`text-black font-poppins text-[30px] font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${Premium === "firstsecond" ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0" : ""}`} onClick={() => latest("firstsecond")}>Premium</p>
                </div>
                <div className="flex pt-[60px] md:pt-[85px] pb-[65px] md:pb-[130px] flex-row flex-wrap -mx-3 w-full" id='plan'>
                    <div className=" lg:w-4/12 sm:w-6/12 w-full justify-center flex mt-5 px-3">
                        <div className="max-w-[380px] lg:max-w-[299px] pl-[35px] pt-[38px] pb-[48px] border-[1.5px] pr-[28px] border-[#C4C4C4] rounded-[15px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] w-full" data-aos="flip-left">
                            <p className='text-black font-poppins text-[20px] sm:text-[28px] font-semibold leading-6'>Starter</p>
                            <p className='text-black pt-[11px] pb-[28px] font-poppins text-[12px] font-normal leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                            <p className='text-black font-poppins sm:text-[30px] text-[25px] md:text-[42px] font-semibold leading-[32px] pb-[11px]'> {Premium === "firstone" && <span>$2.80</span>}  {Premium === "firstsecond" && <span>$6.90</span>}</p>
                            <p className='text-black font-poppins text-[14px] font-light leading-[14px] pb-[35px]'>{toggle ? "Per year" : "Per month"}</p>
                            <button className=" px-3.5 mb-[35px] py-[12px] overflow-hidden relative group cursor-pointer border-2  text-center border-black w-full rounded-[12px] text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-black transition duration-300 text-[14px] font-semibold font-poppins group-hover:text-white ease py-[9px]">Choose this Plan</span>
                            </button>
                            <div className="flex gap-6">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2GB SSD</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>10GB Bandwidth</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>15 Email Accounts</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Unlimited Database</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>4 Subdomains</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>1 Parked Domain</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2 Websites</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Free SSL</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-4/12 sm:w-6/12 w-full justify-center flex mt-5 px-3">
                        <div className="max-w-[380px] lg:max-w-[299px] pl-[35px] pt-[38px] pb-[48px] border-[1.5px] pr-[28px] border-[#C4C4C4] rounded-[15px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] w-full" data-aos="zoom-in-down">
                            <p className='text-black font-poppins text-[28px] font-semibold leading-6'>Standard</p>
                            <p className='text-black pt-[11px] pb-[28px] font-poppins text-[12px] font-normal leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                            <p className='text-black font-poppins text-[42px] font-semibold leading-[32px] pb-[11px]'>{Premium === "firstone" && <span>$4.20</span>}  {Premium === "firstsecond" && <span>$8.20</span>}</p>
                            <p className='text-black font-poppins text-[14px] font-light leading-[14px] pb-[35px]'>{toggle ? "Per year" : "Per month"}</p>
                            <button className=" px-3.5 mb-[35px] py-[12px] overflow-hidden relative group cursor-pointer border-2  text-center border-black w-full rounded-[12px] text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-black transition duration-300 text-[14px] font-semibold font-poppins group-hover:text-white ease py-[9px]">Choose this Plan</span>
                            </button>
                            <div className="flex gap-6">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2GB SSD</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>10GB Bandwidth</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>15 Email Accounts</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Unlimited Database</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>4 Subdomains</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>1 Parked Domain</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2 Websites</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Free SSL</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-4/12 sm:w-6/12 w-full justify-center flex mt-5 px-3">
                        <div className="max-w-[380px] lg:max-w-[299px] pl-[35px] pt-[38px] pb-[48px] border-[1.5px] pr-[28px] border-[#C4C4C4] rounded-[15px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] w-full" data-aos="flip-right">
                            <p className='text-black font-poppins text-[28px] font-semibold leading-6'>Supreme</p>
                            <p className='text-black pt-[11px] pb-[28px] font-poppins text-[12px] font-normal leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                            <p className='text-black font-poppins text-[42px] font-semibold leading-[32px] pb-[11px]'>{Premium === "firstone" && <span>$7.00</span>}  {Premium === "firstsecond" && <span>$11.50</span>}</p>
                            <p className='text-black font-poppins text-[14px] font-light leading-[14px] pb-[35px]'>{toggle ? "Per year" : "Per month"}</p>
                            <button className=" px-3.5 mb-[35px] py-[12px] overflow-hidden relative group cursor-pointer border-2  text-center border-black w-full rounded-[12px] text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-black transition duration-300 text-[14px] font-semibold font-poppins group-hover:text-white ease py-[9px]">Choose this Plan</span>
                            </button>
                            <div className="flex gap-6">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2GB SSD</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>10GB Bandwidth</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>15 Email Accounts</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Unlimited Database</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>4 Subdomains</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>1 Parked Domain</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>2 Websites</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Free SSL</p>
                            </div>
                            <div className="flex gap-6 pt-[15px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                                </svg></span>
                                <p className='font-inter text-[#808080] text-[14px] sm:text-[16px] font-bold leading-[24px]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Started