import "./Navbar.css";
import TransLogo from "../assets/images/logo/transparentLogo.png";
import React, { useEffect, useState } from "react";
// import './Menu.css'

const Navbar = () => {


  return (
    <>
      <div className=" fixed flex nav w-[100vw] justify-between ps-10 lg:pe-20 mobile:pe-5 pt-5 pb-5  border-[#3F4041] z-[100] ">
        <div className="logo w-[70px] h-[100px]">
          <img src={TransLogo} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="flex text-textGray items-center ">
          <div>EST-2022</div>

          <div>
            <div class="left open-menu cursor-pointer ">
              <div class="icon cursor-pointer ">
                <div class="main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "17px",
                      height: "17px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_2">
                        <rect width="16" height="16" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_2)">
                      <g
                        transform="matrix(1,0,0,1,0.0000057220458984375,1.0000076293945312)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                          <path
                            class="line3"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,1.0000076293945312)"
                        opacity="1"
                        style={{ display: " block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                          <path
                            class="line2"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,1.0000061988830566)"
                        opacity="1"
                        style={{ display: " block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                          <path
                            class="line1"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="overlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "17px",
                      height: "17px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_2">
                        <rect width="16" height="16" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_2)">
                      <g
                        transform="matrix(1,0,0,1,0.0000057220458984375,1.0000076293945312)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                          <path
                            class="line3"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,1.0000076293945312)"
                        opacity="1"
                        style={{ display: " block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                          <path
                            class="line2"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,1.0000061988830566)"
                        opacity="1"
                        style={{ display: " block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                          <path
                            class="line1"
                            fill="rgb(255,255,255, 0.88)"
                            fill-opacity="1"
                            d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3>MENU</h3>
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
};

export default Navbar;
