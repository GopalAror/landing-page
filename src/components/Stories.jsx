import React from 'react'
import crypto from "../assets/images/crypto.webp";
import branding from "../assets/images/branding.webp";
import jpnl from "../assets/images/jpnl.webp";
import double from "../assets/images/double-quote.svg";
import short from "../assets/images/short-quote.svg";
const Stories = () => {
    return (
        <div className=' overflow-clip'>
            <div className="max-w-[1015px] max-lg:pt-[30px] px-3 mx-auto relative pb-[100px]">
                <img className=' absolute top-0 md:top-[-7%] max-md:w-[100px]  min-[1125px]:left-[-5%]  left-0' src={double} alt="quot" />
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className=" w-full md:w-6/12 px-3 flex flex-col items-center md:items-end">
                        <div>
                            <h2 className='text-[#18191F] font-inter sm:text-[35px] text-[28px] md:text-[48px] font-extrabold leading-[45px] md:leading-[64px] max-w-[455px]'>Real Stories from Real Customers</h2>
                            <p className='text-[#18191F] font-inter text-[18px] font-normal leading-[32px]'>Get inspired by these stories.</p>
                        </div>
                        <div className="max-w-[350px] mt-6 px-[32px] min-h-[468px] rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)]" data-aos="zoom-out-right">
                            <img className='pt-2 pl-8' src={crypto} alt="crypto" />
                            <div className='flex items-start'>
                                <img src={short} alt="short" />
                                <p className='text-black font-inter text-[16px] font-normal leading-[32px] pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            </div>
                            <p className='text-[#18191F] font-inter text-[18px] font-bold leading-[28px] pt-6 pl-8'>Floyd Miles</p>
                            <p className='text-[#969BAB] text-[14px] font-inter font-medium leading-[24px] pl-8'>Vice President, CLI</p>
                        </div>
                    </div>
                    <div className=' w-full md:w-6/12 px-3 pt-[48px] flex flex-col items-center'>
                        <div className="max-w-[445px] px-[32px] min-h-[340px] rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)]" data-aos="zoom-out-left">
                            <img className='pl-8 pt-[30px]' src={jpnl} alt="jpnl" />
                            <div className='flex items-start pt-[15px]'>
                                <img src={short} alt="short" />
                                <p className='text-black font-inter text-[16px] font-normal leading-[32px] pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            </div>
                            <p className='text-[#18191F] font-inter text-[18px] font-bold leading-[28px] pt-6 pl-8'>Jane Cooper</p>
                            <p className='text-[#969BAB] text-[14px] font-inter font-medium leading-[24px] pl-8'>CEO, JPNL</p>
                        </div>
                        <div className="max-w-[350px] mt-[32px] px-[32px] min-h-[276px] rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)]" data-aos="zoom-out-left">
                            <img className='pl-8 pt-[30px]' src={branding} alt="branding" />
                            <div className='flex items-start pt-[15px]'>
                                <img src={short} alt="short" />
                                <p className='text-black font-inter text-[16px] font-normal leading-[32px] pl-4'>LemonWares saved our time in Hosting my company page.</p>
                            </div>
                            <p className='text-[#18191F] font-inter text-[18px] font-bold leading-[28px] pt-6 pl-8'>Kristin Watson</p>
                            <p className='text-[#969BAB] text-[14px] font-inter font-medium leading-[24px] pl-8'>Co-Founder, LeeveOn Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories
