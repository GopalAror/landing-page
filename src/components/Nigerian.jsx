import React from 'react'
import img1 from "../assets/images/Nigerian-img1.webp";
import img2 from "../assets/images/Nigerian-img2.webp";
import img3 from "../assets/images/Nigerian-img3.webp";
import img4 from "../assets/images/Nigerian-img4.webp";
import img5 from "../assets/images/Nigerian-img5.webp";
import img6 from "../assets/images/Nigerian-img6.webp";

const Nigerian = () => {
    return (
        <div>
            <div className="max-w-[1197px] px-3 mx-auto pb-[55px] sm:pb-[100px]">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="md:w-6/12 w-full px-3" >
                        <h2 className='max-w-[445px] text-[#18191F] font-inter leading-[45px] md:leading-[64px] sm:text-[40px] text-[28px] md:text-[48px] font-extrabold'  data-aos="fade-right">We serve over 100 Nigerian Websites</h2>
                        <p className='text-[#18191F] font-normal font-inter text-[14px] sm:text-[18px] leading-[32px] max-w-[445px]'  data-aos="fade-right">Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                    </div>
                    <div className="md:w-6/12 w-full px-3">
                        <div className="flex flex-row flex-wrap -mx-3 items-center">
                            <div className=" w-4/12 px-3" data-aos="fade-down">
                                <img className=' aspect-[2/3]' src={img1} alt="img1" />
                            </div>
                            <div className=" w-4/12 px-3" data-aos="fade-up">
                                <img className=' aspect-[2/3]' src={img2} alt="img2" />
                            </div>
                            <div className=" w-4/12 px-3" data-aos="fade-down">
                                <img className=' aspect-[2/3]' src={img3} alt="img3" />
                            </div>
                            <div className=" w-4/12 px-3" data-aos="fade-down">
                                <img className=' aspect-[2/3]' src={img4} alt="img4" />
                            </div>
                            <div className=" w-4/12 px-3" data-aos="fade-up">
                                <img className=' aspect-[2/3]' src={img5} alt="img5" />
                            </div>
                            <div className=" w-4/12 px-3" data-aos="fade-down">
                                <img className=' aspect-[2/3]' src={img6} alt="img6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nigerian