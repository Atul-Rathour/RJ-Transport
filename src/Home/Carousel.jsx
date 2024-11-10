import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../assets/images/Page1/img1.webp";
import Img2 from "../assets/images/Page1/main page.webp";
import Img3 from "../assets/images/Page1/stearing.webp";
import Img4 from "../assets/images/Page1/trial-hero-1x.webp";
import Vid1 from '../assets/videos/trains cargo.mp4'

const ImageCarousel = () => {
  const carouselArray = [
    {
        imgSrc: Img1,
        altText: "Image 1",
        button : true,
        content: 'Explore world with us',
        video : false
    },
    {
        imgSrc: Img2,
        altText: "Image 2",
        button : false,
        content: 'Experience the magic of JK Transport',
        video : true,
        videoSrc : Vid1
    },
    {
        imgSrc: Img3,
        altText: "Image 3",
        button : true,
        content: 'Get a quote',
        video : false
    },
    {
        imgSrc: Img4,
        altText: "Image 4",
        button : false,
        content: 'Start your journey with us',
        video : false
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagePauseDuration = 3000; // Pause for 3 seconds on image
  const videoPauseDuration = 10000; // Pause for 10 seconds on video

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselArray.length);
    }, carouselArray[currentIndex].video ? videoPauseDuration : imagePauseDuration);

    return () => clearInterval(interval);
  }, [currentIndex, carouselArray.length]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    clearInterval();
    setTimeout(() => {
      setCurrentIndex((index + 1) % carouselArray.length);
    }, carouselArray[index].video ? videoPauseDuration : imagePauseDuration);
  };

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="overflow-hidden">
        {carouselArray.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.video ? 
            (
              <video src={item.videoSrc} className="w-full h-full object-cover" autoPlay loop muted></video>
            ):  
            (
              <img
                src={item.imgSrc}
                alt={`Carousel Item ${index}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="absolute ms-5 me-5 bottom-10 left-0 right-0 flex justify-center space-x-2">
        {carouselArray.map((item, index) => (
          <div key={index} className="flex  flex-col z-[2] justify-end cursor-pointer w-[100%] group"
          onClick={() => handleSlideChange(index)}>
            <div
              className={`content relative mb-5 text-textGray opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } `}
            >
              <p
                className="kmoIMz mb-3"
                style={{
                  lineHeight: "0.9rem",
                }}
              >
                {item.content}
              </p>

            { item.button ? 
                (<div className="bg-[#2E2F32E0] text-textGray rounded-[2px] w-[90px] pt-1 pb-1 ps-3 pe-2">
                <a className="kmoIMz" href=" ">
                  Explore
                </a>
              </div>) : 
                (<></>)
            }
              
            </div>

            <div
              className="w-[90%] cursor-pointer h-[2px] bg-gray-400 rounded-full overflow-hidden"
            >
              <div
                className={`h-full bg-white relative z-[2] ${
                  index === currentIndex ? "w-[100%]" : "w-0"
                }`}
                style={{
                  transition: `width ${carouselArray[index].video ? videoPauseDuration/1000 : imagePauseDuration/1000}s ease-in-out`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carouselArray.length) % carouselArray.length
          )
        }
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselArray.length)
        }
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default ImageCarousel;