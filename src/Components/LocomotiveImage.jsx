import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "../assets/images/company.jpg";

gsap.registerPlugin(ScrollTrigger);

const LocomotiveImage = ({Image}) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const imageRef = useRef(null);

  useEffect(() => {
    // Trigger Framer Motion width animation when the container is in view
    if (isInView) {
      controls.start({
        width: "100%",
        transition: { duration: 1, ease: "easeOut" },
      });
    }

    // Set up GSAP ScrollTrigger for Y-axis scroll animation
    gsap.fromTo(
      imageRef.current,
      { y: "30%" },
      {
        y: "0%",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, [controls, isInView]);

  return (
    <motion.div
      ref={containerRef}
      className="scroll-container overflow-hidden h-full w-full "
      initial={{ width: "0%" }}
      animate={controls}
    >
      <img
        ref={imageRef}
        src={Image}
        className="scroll-image w-full h-full object-cover"
        alt=""
      />
    </motion.div>
  );
};

export default LocomotiveImage;
