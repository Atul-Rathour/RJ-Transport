import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./Menu.css";
import TransLogo from "../assets/images/logo/transparentLogo.png";
import gsap from "gsap";

const Menu = forwardRef((props, ref) => {
  const timelineRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    tl.fromTo(
      ".left",
      { x: "-100%" },
      { x: "0%", duration: 2, ease: "power3.out" }
    ).fromTo(
      ".right",
      { x: "100%" },
      { x: "0%", duration: 2, ease: "power3.out" },
      "<"
    ).fromTo(
      ".line",
      { width: "0" },
      { width: "100%", duration: 1, ease: "power3.out" },
      "<0.5"
    ).fromTo(
      ".text",
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "power3.out" },
      "<"
    ).fromTo(
      ".right .text",
      { y: "-300%" },
      { y: "0%", duration: 1, ease: "power3.out" },
      "<"
    );

    return () => {
      tl.kill(); // Clean up the timeline on unmount
    };
  }, []);

  const openMenu = () => {
    setIsOpen(true); // Mark the menu as open
    timelineRef.current.play();
  };

  const closeMenu = () => {
    timelineRef.current.reverse().then(() => {
      setIsOpen(false); // Hide the menu after the animation
    });
  };

  useImperativeHandle(ref, () => ({
    openMenu,
    closeMenu,
  }));

  if (!isOpen) return null; // Do not render if the menu is closed

  return (
    <div className="fixed mobile:flex-col lg:flex-row sm:flex-col md:flex-row flex w-[100vw] h-[100vh] z-[101] overflow-hidden ">
      <div className="left flex flex-col w-[50%] h-full bg-[#f0f4ef]">
        {/* Left section menu items */}
        <a href="" className="menu-item">Home</a>
        <a href="" className="menu-item">About</a>
        <a href="" className="menu-item">Product</a>
        <a href="" className="menu-item">Contact</a>
        <a href="" className="menu-item">Get a Quote</a>
      </div>
      <div className="right w-[50%] h-full flex relative bg-[#212529]">
        <div
          className="close-menu absolute top-10 right-10 cursor-pointer"
          onClick={closeMenu}
        >
          <p className="text-textGray">Close</p>
        </div>
        <div className="content">
          <img src={TransLogo} alt="Logo" />
          <p>Contact Info...</p>
        </div>
      </div>
    </div>
  );
});

export default Menu;
