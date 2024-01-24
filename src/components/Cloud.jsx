import React from 'react'
import img1 from "../assets/images/cloud-img1.webp";
import img2 from "../assets/images/cloud-img2.webp";
import img3 from "../assets/images/cloud-img3.webp";
import img4 from "../assets/images/cloud-img4.webp";
import img5 from "../assets/images/cloud-img5.webp";
import img6 from "../assets/images/cloud-img6.webp";

const Cloud = () => {
    return (
        <div className=' overflow-clip'>
            <div className="max-w-[1284px] px-3 mx-auto pb-[75px]">
                <div className="flex flex-wrap -mx-3 flex-row">
                    <div className=" w-full lg:w-6/12 px-3">
                        <h2 className=' font-inter md:text-[40px] text-[30px] sm:text-[35px] lg:text-[48px] font-extrabold leading-[64px] text-[#18191F]' data-aos="fade-right">True Cloud Web  Hosting</h2>
                        <p className='md:text-[18px] text-[14px] max-w-[573px] text-[#18191F] font-inter leading-[32px] pt-0 md:pt-[30px]' data-aos="fade-right">True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </div>
                    <div className=" w-full lg:w-6/12 px-3 pt-4">
                        <div className="flex flex-row flex-wrap -mx-3 items-center">
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2]' src={img1} alt="img1" data-aos="fade-right" />
                            </div>
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2]' src={img2} alt="img2"  data-aos="fade-up" />
                            </div>
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2]' src={img3} alt="img3" data-aos="fade-left" />
                            </div>
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2] pt-[25px]' src={img4} alt="img4"  data-aos="fade-right"/>
                            </div>
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2] pt-[25px]' src={img5} alt="img5"   data-aos="fade-down"/>
                            </div>
                            <div className="w-1/3 px-3">
                                <img className=' aspect-[3/2] pt-[25px]' src={img6} alt="img6" data-aos="fade-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cloud
