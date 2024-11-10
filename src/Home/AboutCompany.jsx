import React from "react";
import Img1 from "../assets/images/AboutCompany/company.jpg";
import Img2 from "../assets/images/AboutCompany/light bulb.jpg";
import Img3 from "../assets/images/AboutCompany/tall buliding.jpg";

const AboutCompany = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-5 w-[100vw] h-[100vh] ms-2 me-2 gap-2 mb-10 ">
      <div className="row-span-3 col-span-5 relative pt-10  ps-10 shadow-md shadow-black  ">
        <p className="text-[1.8rem] text-[#fff]   uppercase ">
          About the company
        </p>

        <p className="text-textGray text-[1rem] mt-10 ">
          Welcome to{" "}
          <span className="font-semibold text-[1.1rem]">
            R&J Food Stuff Trading
          </span>
          , a premier global import-export trading company dedicated to
          connecting markets and businesses worldwide. Since our inception, we
          have focused on simplifying international trade through reliable,
          seamless, and transparent services that empower businesses to reach
          new heights.
        </p>

       
        <p className="text-textGray text-[1rem] mt-5 ">
          Our experienced team is committed to transparent communication, timely
          deliveries, and strict adherence to international standards, ensuring
          a hassle-free experience for every client. With a focus on fostering
          long-term partnerships, we prioritize customer satisfaction and
          efficiency at each stage of the trade process. Whether you’re looking
          to source quality goods or distribute your products globally, [Company
          Name] is your trusted partner in international trade.
        </p>
      </div>
      <div className="row-span-2 group col-span-2 overflow-hidden relative shadow-md shadow-black">
        <img
          src={Img2}
          alt=""
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-[1s] w-full h-full object-cover"
        />
        <div className="upperShadow"></div>
      </div>

      <div className="row-span-3 col-span-2 group overflow-hidden relative  shadow-md shadow-black ">
        <img
          src={Img3}
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-[1s] w-full h-full object-cover"
          alt=""
        />
        <div className="upperShadow"></div>
        <div className="leftShadow"></div>
      </div>

      <div className="row-span-2 col-span-5 group relative overflow-hidden shadow-md shadow-black ">
        <img
          src={Img1}
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-[1s] w-full h-full object-cover"
          alt=""
        />
        <div className="upperShadow"></div>
      </div>
    </div>
  );
};

export default AboutCompany;
