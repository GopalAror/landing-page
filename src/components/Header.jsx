import React, { useState } from 'react'
import headerimg from "../assets/images/header-img.webp";

const Header = () => {
    const [Tabs, settabs] = useState("tab1")
    function tabschange(tab) {
        settabs(tab)
    }
    return (
        <div className='overflow-clip' id="account">
            <div className='max-w-[1190px] mx-auto px-3 py-[80px]'>
                <div className='flex flex-row flex-wrap -mx-3'>
                    <div className='lg:w-6/12 w-full px-3' data-aos="fade-right">
                        <div className="flex items-center after:absolute max-w-[242px] after:w-[95%] after:h-[1px] relative after:left-0 after:bottom-[-5px] after:bg-[#E5E5E5]">
                            <a
                                onClick={() => tabschange("tab1")}
                                href="#"
                                className={` ${Tabs === "tab1"
                                    ? "after:w-[80%] text-[#B00000]"
                                    : "after:w-0 text-[#DBD9D9]"
                                    } duration-300 after:duration-300  font-Poppins font-semibold  text-[15px] leading-normal  after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
                            >
                                Hosting
                            </a>
                            <a  onClick={() => tabschange("tab2")}
                                href="#"
                                className={` ${Tabs === "tab2"
                                    ? "after:w-[80%] text-[#B00000]"
                                    : "after:w-0 text-[#DBD9D9]"
                                    } duration-300 after:duration-300  font-Poppins font-semibold ml-[23px]  text-[15px] leading-normal  after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
                            >
                                Domain
                            </a>
                            <a
                                onClick={() => tabschange("tab3")}
                                href="#"
                                className={` ${Tabs === "tab3"
                                    ? "after:w-[80%] text-[#B00000]"
                                    : "after:w-0 text-[#DBD9D9]"
                                    } duration-300 after:duration-300  font-Poppins font-semibold ml-[18px]  text-[15px] leading-normal  after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
                            >
                                SEO
                            </a>
                            <a
                                onClick={() => tabschange("tab4")}
                                href="#"
                                className={` ${Tabs === "tab4"
                                    ? "after:w-[80%] text-[#B00000]"
                                    : "after:w-0 text-[#DBD9D9]"
                                    } duration-300 after:duration-300  font-Poppins font-semibold ml-[15px]  text-[15px] leading-normal  after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
                            >
                                Email
                            </a>
                        </div>
                        <h1 className='max-w-[590px] pt-[30px] text-[#2E2E2E] font-poppins font-bold sm:text-[50px] text-[38px] md:text-[64px] leading-[50px] sm:leading-[77px]'>Premium Web
                            {Tabs === "tab1" && <span> Hosting </span>}
                            {Tabs === "tab2" && <span> Domain </span>}
                            {Tabs === "tab3" && <span> Seo </span>}
                            {Tabs === "tab4" && <span> Email </span>}
                            for Your Website</h1>
                        <p className=' pt-[25px] sm:pt-[34px] text-[#808080] text-[14px] sm:text-[16px] font-inter tracking-[0.8px] leading-[20px] sm:leading-[28px] max-w-[448px] pb-[40px] sm:pb-[60px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                        <div className="flex gap-[24px]">
                            <button className='text-white font-poppins text-[14px] font-normal leading-[24px] bg-[#B00000] rounded-[8px] p-2 sm:p-3 border hover:bg-transparent hover:text-[#B00000] hover:border-[#b00000] duration-300 border-transparent shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)]'>Create an Account</button>
                            <a href='#plan' className='text-black inline-block font-poppins text-[14px] leading-[24px] font-normal border border-black rounded-[8px] p-2 sm:p-3 hover:bg-transparent duration-300  hover:text-[#B00000] hover:border-[#b00000]  hover:shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)]'>Choose your plan</a>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full px-3 flex items-center justify-center lg:pt-0 pt-8 lg:justify-end"  data-aos="fade-down-left">
                        <div className='relative'>
                            <img className='min-h-[350px] max-w-[501px] sm:min-h-[504px] w-full object-cover' src={headerimg} alt="header" />
                            <span className=' absolute  bottom-[44%] left-[-4%]'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M0 40H40L0 0V40Z" fill="#B00000" />
                            </svg></span>
                            <span className=' absolute right-[-3%] sm:right-[-5%] top-[11%]'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M40 40H0L40 0V40Z" fill="#B00000" />
                            </svg></span>
                            <span className=' absolute bottom-[10%] right-[-3%] sm:right-[-4%] '><svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                <path d="M72 72H0L72 0V72Z" fill="#B00000" />
                            </svg></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
