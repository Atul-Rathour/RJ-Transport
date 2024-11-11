import React from "react";
import TransLogo from "../assets/images/logo/transparentLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar fixed mt-5 w-[100vw] flex justify-center items-center z-[10] ">
      <div className="nav w-[90%] flex items-center  gap-1 ">
        <div className="logo bg-[#2E2F32E0] w-[90px] z-[4] h-[90px] me-5 flex justify-center items-center text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
          <a className="kmoIMz" href=" ">
            <img src={TransLogo} className="w-[95%] h-[95%]  " alt="" />
          </a>
        </div>
        <div className="menu items-center justify-start gap-1  ">
          <div className="bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
            <a className="kmoIMz" href=" ">
              Home
            </a>
          </div>
          <div className="bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
            <a className="kmoIMz" href=" ">
              About
            </a>
          </div>
          <div className="bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
            <a className="kmoIMz" href=" ">
              Contact
            </a>
          </div>
          <div className="bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
            <a className="kmoIMz" href=" ">
              Products
            </a>
          </div>
          <div className="bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2">
            <a className="kmoIMz" href=" ">
              Get a Quote
            </a>
          </div>
        </div>

        <div className="icon border me-10 ">X</div>
      </div>

      {/* <div className="overlay w-[100vw] h-[50rem] grid grid-cols-2 gap-2 absolute z-[3]">
        <div className="top-bar  col-span-2 flex justify-between items-center p-4 bg-[#2B2C2F] rounded-[20px]"></div>

        <div className="content-left bg-[#2B2C2F] rounded-[20px] h-[calc(100%-4rem)]"></div>
        <div className="content-right bg-[#2B2C2F] rounded-[20px] h-[calc(100%-4rem)]"></div>
      </div> */}
    </div>
  );
};

export default Navbar;
