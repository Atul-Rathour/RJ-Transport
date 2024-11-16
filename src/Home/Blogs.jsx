import React from "react";
import Logo from "../assets/images/logo/transparentLogo.png";
import Flight from "../assets/images/Blogs/dark flight night.jpg";
import company from '../assets/images/company.jpg'
import LocomotiveImage from "../Components/LocomotiveImage";

const Blogs = () => {
  return (
    <div className="flex mobile:flex-col lg:flex-row w-[100vw] lg:h-[100vh] mobile:h-[200vh] ps-10 pe-10 mt-[10rem] mb-[10rem] overflow-hidden ">
      <div className="h-full flex lg:w-[25%] mobile:w-[100%] pt-20 justify-between mobile:items-center lg:items-start flex-col gap-[2rem] ">
        <div className="ms-2">
          <div className="w-[150px] h-[150px] ">
            <img src={Logo} className="w-full h-full object-cover" alt="" />
          </div>

          <p className="text-textGray  text-[1.5rem] ">TRADITION</p>
        </div>
        <div className="text-textGray text-[2.5rem]">
          The World of Trade, One Story at a Time.
        </div>
      </div>


      <div className="h-[95%] lg:w-[45%] mobile:w-[100%] ">
        {/* <img src={Flight} className="w-full h-full object-cover" alt="" /> */}
        <LocomotiveImage Image={Flight} />
      </div>

      <div className="flex flex-col justify-between items-end lg:pt-[10rem] mobile:pt-10 lg:w-[30%] mobile:w-[100%] h-full ps-5 pe-5">
        <div className="lg:ps-10 lg:pe-10 mobile:ps-5 mobile:pe-5  text-textGray" >
          <p className="mb-10" >
            Explore our latest articles to navigate the complexities of
            international commerce and expand your business.
          </p>

            <a href="" className="bg-customGray rounded-sm pt-2 pb-2 pe-3 ps-3 text-textGray  " >
                Blogs
            </a>
        </div>

        <div className="w-[310px] h-[250px]" >
            {/* <img src={company} className="w-full h-full object-cover"  alt="" /> */}
            <LocomotiveImage Image={company} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
