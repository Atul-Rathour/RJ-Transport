import React, { useEffect, useRef } from "react";
import Logo from "../assets/images/intro/R&J White SVG.png";
import { gsap } from "gsap";

const Intro = ({ isLoading }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    animationRef.current = tl; // Save reference to the timeline

    // Calculate circle circumference for stroke animation
    const circleRadius = 100; // Adjust radius as needed
    const circumference = 2 * Math.PI * circleRadius;

    tl.add([
      gsap.fromTo(
        ".left",
        {
          x: "-100%",
        },
        {
          x: "0%",
          duration: 1,
          ease: "power4.inOut",
        }
      ),
      gsap.fromTo(
        ".right",
        {
          x: "100%",
        },
        {
          x: "0%",
          duration: 1,
          ease: "power4.inOut",
        }
      ),
    ]);
    tl.add([
      gsap.fromTo(
        ".line1",
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power4.inOut" }
      ),
      gsap.fromTo(
        ".line2",
        { y: "-100%" },
        { y: "0%", duration: 0.5, ease: "power4.inOut" }
      ),
      gsap.fromTo(
        ".mid2",
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power4.inOut" }
      ),
      gsap.fromTo(
        ".mid1",
        { y: "-100%" },
        { y: "0%", duration: 0.5, ease: "power4.inOut" }
      ),
    ]);

    // Animate lines, then draw the circle
    tl.fromTo(
      ".cover-circle circle",
      { strokeDashoffset: circumference }, // Start hidden
      { strokeDashoffset: 0, duration: 0.5, ease: "power4.inOut" } // Draw circle
      // Delay to start after line animations
    );

    tl.fromTo(
      ".logo",
      {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
      }
    );

    // Play the animation forward initially
    return () => tl.kill();
    //   setTimeout(() => {
    //     // Reverse the animation after a delay
    //     handleReverseAnimation();
    //   }, 5000); // Adjust the delay as needed
  }, []);

  useEffect(() => {
    // Trigger reverse animation when loading completes
    if (!isLoading) {
      animationRef.current.reverse();
    }
  }, [isLoading]);

  // // Function to reverse the animation
  // const handleReverseAnimation = () => {
  //   animationRef.current.reverse();
  // };

  return (
    <div className=" fixed w-[100vw] bg-transparent h-[100vh] ">
      <div className="absolute w-[100vw] h-full flex ">
        <div className="w-[50%] h-full bg-[#212529] left"></div>
        <div className="w-[50%] h-full bg-[#212529] right"></div>
      </div>

      <div className="relative ps-[10vw] pe-[10vw] flex w-full h-full justify-between">
        <div className="line1 bg-[#f0f4ef] h-full w-[2px]"></div>

        <div className="relative flex justify-center items-center">
          <svg
            className="absolute w-[200px] h-[200px] overflow-visible cover-circle"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="100"
              fill="none"
              stroke="#f0f4ef"
              strokeWidth="2"
              strokeDasharray={2 * Math.PI * 100} // Circumference of the circle
              strokeDashoffset={2 * Math.PI * 100} // Initially offset to hide
            />
          </svg>

          <div className="absolute logo w-[200px] z-[2] h-[200px] rounded-full bg-[#212529]">
            <img
              src={Logo}
              className=" w-full h-full object-cover"
              alt="Logo"
            />
          </div>

          <div className="flex absolute flex-col  ">
            <div
              className="bg-[#f0f4ef] h-[50vh] w-[1px] mid1 "
              style={{ marginBottom: "100px" }}
            ></div>
            <div
              className="bg-[#f0f4ef] h-[50vh] w-[1px] mid2 "
              style={{ marginTop: "100px" }}
            ></div>
          </div>
        </div>

        <div className="line2 bg-[#f0f4ef] h-full w-[2px]"></div>
      </div>
    </div>
  );
};

export default Intro;
