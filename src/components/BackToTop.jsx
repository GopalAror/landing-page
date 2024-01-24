import React, { useState } from "react";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center items-center p-2 w-[45px] h-[45px] rounded-[100%] bg-[#B00000] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:bg-white hover:shadow-[1px_1px_5px_5px_white] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-arrow-up-short hover:border-2 border-[#B00000] rounded-full hover:fill-[#B00000]" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
                </svg></span>
            </button>
        </div>
    );
};

export default BackToTop;