import "./Navbar.css";
import TransLogo from "../assets/images/logo/transparentLogo.png";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import './Menu.css'

const Navbar = ({ handleOpen }) => {
  const timelineRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ paused: true });
  //   timelineRef.current = tl;

  //   tl.fromTo(
  //     ".menu-panel",
  //     {
  //       css: {
  //         display: "none",
  //       },
  //     },
  //     {
  //       css: {
  //         display: "flex",
  //       },
  //     }
  //   );

  //   tl.add([
  //     gsap.fromTo(
  //       ".left",
  //       {
  //         x: "-100%",
  //       },
  //       {
  //         x: "0%",
  //         duration: 1,
  //         ease: "power4.inOut",
  //       }
  //     ),

  //     gsap.fromTo(
  //       ".right",
  //       {
  //         x: "100%",
  //       },
  //       {
  //         x: "0%",
  //         duration: 1,
  //         ease: "power4.inOut",
  //       }
  //     ),
  //   ]);
  // }, []);

  useEffect(() => {
    // if (!isOpen) return; // Ensure elements are in the DOM
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;
    // Animate both `.left` and `.right` sections to slide in simultaneously

    tl.fromTo(
          ".menu-panel",
          {
            css: {
              display: "none",
            },
          },
          {
            css: {
              display: "flex",
            },
          }
        );

    tl.add([
      gsap.fromTo(
        ".left",
        { x: "-100%" },
        { x: "0%", duration: 1, ease: "power4.inOut" }
      ),
      gsap.fromTo(
        ".right",
        { x: "100%" },
        { x: "0%", duration: 1, ease: "power4.inOut" }
      ),
    ]);

    // Line and text animations in `.left` section
    tl.fromTo(
      ".line",
      {
        width: "0",
      },
      {
        width: "100%",
        duration: 1,
        ease: "power3.out",
      },
      "<0.5" // Start after a short delay
    );

    tl.fromTo(
      " .text",
      {
        y: "-100%",
      },
      {
        y: "0%",
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    // Text animations in `.right` section
    tl.fromTo(
      ".right .text",
      {
        y: "-300%", // Start below
      },
      {
        y: "0%", // Animate up into place
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    // Add animation definitions here
  }, []);

  const openMenu = () => {
    timelineRef.current.play();
  };
  const closeMenu = () => {
    timelineRef.current.reverse();
  };

  return (
    <>
      <div className=" fixed flex nav w-[100vw] justify-between ps-10 lg:pe-20 mobile:pe-5 pt-5 pb-5  border-[#3F4041] z-[100] ">
        <a className="logo w-[70px] h-[100px] link ">
          <img src={TransLogo} className="w-full h-full object-cover" alt="" />
        </a>

        <div className="flex text-textGray items-center ">
          <div>EST-2022</div>

          <div>
            <a class="menu link " onClick={openMenu}>
              <div class="icon">
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
            </a>
          </div>
        </div>
      </div>

      {/* <div className="menu-panel hidden flex w-[100vw] h-[100vh] fixed z-[101]">
        <div className="left flex  flex-col w-[50%]  h-full bg-[#f0f4ef]">

        </div>
        <div className="right relative w-[50%] h-full flex   bg-[#212529]">
          <div className="bg-[#fff] p-5 " onClick={closeMenu} >Close</div>
        </div>
      </div> */}

      <div className="menu-panel fixed hidden mobile:flex-col lg:flex-row sm:flex-col md:flex-row flex w-[100vw] h-[100vh] z-[101] overflow-hidden ">
        <div className="left flex flex-col w-[50%] h-full bg-[#f0f4ef]">
          <a
            href=""
            className=" text-textGray content uppercase group overflow-hidden "
          >
            <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2] text-[#7D7E7F] ">
              <p className="text">01 - </p>
            </div>
            <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2] text-[#6c757d] ">
              <p className="text">Home</p>
            </div>

            <div className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#6c757d] opacity-[0.5] "></div>

            <div className="line absolute bottom-0 w-full h-[1px] bg-[#2E2F32E0] "></div>
            <div className="absolute bottom-0 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-[1000ms] "></div>
          </a>
          <a
            href=""
            className=" text-textGray content uppercase group overflow-hidden "
          >
            <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2] text-[#7D7E7F] ">
              <p className="text">02 - </p>
            </div>
            <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2] text-[#6c757d] ">
              <p className="text">About</p>
            </div>

            <div className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#6c757d] opacity-[0.5] "></div>

            <div className="line absolute bottom-0 w-full h-[1px] bg-[#2E2F32E0] "></div>
            <div className="absolute bottom-0 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-[1000ms] "></div>
          </a>
          <a
            href=""
            className=" text-textGray content uppercase group overflow-hidden "
          >
            <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2] text-[#7D7E7F] ">
              <p className="text">03 - </p>
            </div>
            <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2] text-[#6c757d] ">
              <p className="text">product</p>
            </div>

            <div className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#6c757d] opacity-[0.5] "></div>

            <div className="line absolute bottom-0 w-full h-[1px] bg-[#2E2F32E0] "></div>
            <div className="absolute bottom-0 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-[1000ms] "></div>
          </a>
          <a
            href=""
            className=" text-textGray content uppercase group overflow-hidden "
          >
            <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2] text-[#7D7E7F] ">
              <p className="text">04 - </p>
            </div>
            <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2] text-[#6c757d] ">
              <p className="text">contact</p>
            </div>

            <div className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#6c757d] opacity-[0.5] "></div>

            <div className="line absolute bottom-0 w-full h-[1px] bg-[#2E2F32E0] "></div>
            <div className="absolute bottom-0 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-[1000ms] "></div>
          </a>
          <a
            href=""
            className=" text-textGray content uppercase group overflow-hidden "
          >
            <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2] text-[#7D7E7F] ">
              <p className="text">05 - </p>
            </div>
            <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2] text-[#6c757d] ">
              <p className="text">get a quote</p>
            </div>

            <div className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#6c757d] opacity-[0.5] "></div>

            <div className="line absolute bottom-0 w-full h-[1px] bg-[#2E2F32E0] "></div>
            <div className="absolute bottom-0 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-[1000ms] "></div>
          </a>
        </div>
        <div className="right w-[50%] h-full flex relative bg-[#212529] ">
          <a
            className="close-menu absolute overflow-hidden flex gap-[1rem] items-center top-10 right-10"
            onClick={closeMenu}
          >
            <div class="cross text ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
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
                    transform="matrix(1,0,0,1,0,1.0000076293945312)"
                    opacity="1"
                    style={{ display: "none" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0,1.0000076293945312)"
                    opacity="1"
                    style={{ display: "none" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0.00000667572021484375,1.0000061988830566)"
                    opacity="1"
                    style={{ display: "none" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: " block" }}
                    transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,11.535533905029297,-6.849236488342285)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "none" }}
                    transform="matrix(1,0,0,1,0,1)"
                    opacity="9.235329711998475e-7"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: " block" }}
                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,1.6370391845703125,12.951156616210938)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                      <path
                        fill="rgb(255,255,255, 0.88)"
                        fill-opacity="1"
                        d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div className="overflow-hidden">
              <p className="text-textGray text ">close</p>
            </div>
          </a>

          <div className="w-full h-full mb-10 pt-5  flex flex-col  items-center justify-between">
            <div className="w-[300px] h-[300px] mobile:hidden sm:hidden lg:block md:block   border-[1px] border-[#fff] p-10 rounded-full ">
              <img
                src={TransLogo}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className=" text-textGray ps-2 pe-2 w-full flex gap-[5rem] justify-center">
              <div className="  flex flex-col gap-8  ">
                <div className="overflow-hidden">
                  <p className="text-[1.5rem] text uppercase ">Email</p>
                  <p className="cool-link text ">atulrathour888@gmail.com</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase ">Phone</p>
                  <p className="text cool-link">+91 63521 60172</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase  mb-2 ">Social</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden">
                      <p className="cool-link text  ">Instagram</p>
                    </a>
                    <a href="" className="overflow-hidden">
                      <p className="cool-link text  ">Facebook</p>
                    </a>
                    <a href="" className="overflow-hidden">
                      <p className="cool-link text  ">twitter</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="  flex flex-col gap-8  ">
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase ">Office</p>
                  <p className="text cool-link">
                    1-1-2 Oshiage, Sumida City, <br /> 131-0045, Tokyo, Japan
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase ">Appointment </p>
                  <p className="text cool-link">+91 95681 60172</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[1.5rem] text uppercase  mb-2 ">Legal</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden">
                      <p className="cool-link text ">Terms and Condition</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-textGray w-full pt-2 pb-2 items-center text-[0.8rem]  relative border-[#fff] ">
              <div className="w-full h-[1px] line absolute top-0 bg-[#fff] "></div>
              <p className="ms-10">
                © 2024 R&J foor stuff trading, All rights reserved
              </p>
              <a href="">
                <p className="me-10 cool-link ">Privacy policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
