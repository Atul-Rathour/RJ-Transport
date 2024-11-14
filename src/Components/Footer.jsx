import React from "react";
import Logo from "../assets/images/logo/transparentLogo.png";
import BGVideo from "../assets/videos/car drive scene.mp4";

const Footer = () => {
  return (
    <>
      <div className="mt-[12rem] lg:pb-[10rem] pb-[5rem] w-[100vw] relative  pe-8 ">
        <div className="w-full h-full absolute z-[-2]">
          <video
            src={BGVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="upperShadow  "></div>
        <div className="leftShadow  "></div>
        <div className="rightShadow  "></div>
        <div className="bottomShadow  "></div>

        <div className="flex flex-wrap items-center justify-between w-[100vw] relative">
          <div className="lg:w-[300px] md:w-[100vw] sm:w-[100vw] mobile:w-[100vw] flex items-center justify-center " >
            <div className="w-[300px] h-[300px] ms-8 flex flex-wrap justify-center items-center flex-col relative z-2  mt-[1rem] ">
              <div className="w-[70%] h-[70%] relative z-2 ">
                <img src={Logo} className="w-full h-full object-cover" alt="" />
              </div>

              <p className="text-[#fff] text-[1.3rem] whitespace-nowrap">
                R&J Food Trading Co 
              </p>
            </div>
          </div>

          <div className=" ms-10 me-10 flex flex-wrap gap-5 relative z-2 ">
            <p className="text-[#7D7E7F] text-[1.8rem] ">01 - </p>
            <div className="flex gap-5">
              <ul className="flex flex-col mt-2 gap-1 text-textGray text-[1rem]">
                <a href="" className="cool-link">
                  Home
                </a>
                <a href="" className="cool-link">
                  About
                </a>
                <a href="" className="cool-link">
                  Products
                </a>
                <a href="" className="cool-link">
                  Contact
                </a>
                <a href="" className="cool-link">
                  Get a quote
                </a>
              </ul>
            </div>

            <div>
              <div className="flex gap-6 relative z-2">
                <p className="text-[#7D7E7F] text-[1.8rem] ">02 - </p>

                <div className=" flex flex-col ">
                  <p className="text-[#fff] text-[2rem]">Contact Details</p>
                  <p className="text-textGray mt-3 ">
                    Al Aweer Central Fruit & <br /> Vegetable Market, Ras Al
                    Khor, <br />
                    Dubai, UAE
                  </p>

                  <a href="" className="text-textGray mt-3 ">
                    +91 9658743211
                  </a>

                  <a href="" className="text-textGray mt-3 ">
                    contact@RJTrading.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-textGray flex justify-between w-[100vw] pt-4 pb-4 ps-10 pe-20 ">
        <div className="uppercase text-[#7D7E7F] text-[0.7rem]">
          © 2024 R&J foor stuff trading, All rights reserved
        </div>

        <a href="" className="uppercase text-[#7D7E7F] text-[0.7rem]">
          Privacy Policy
        </a>
      </div>
    </>
  );
};

export default Footer;
