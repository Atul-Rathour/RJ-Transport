import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../assets/images/Page1/img1.webp";
import Img2 from "../assets/images/Page1/main page.webp";
import Img3 from "../assets/images/Page1/stearing.webp";
import Img4 from "../assets/images/Page1/trial-hero-1x.webp";

const ImageCarousel = () => {
  const imageUrls = [Img1, Img2, Img3, Img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="overflow-hidden">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute w-full h-full inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imageUrl}
              alt={`Carousel Image ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute ms-5 me-5 bottom-10 left-0 right-0 flex justify-center space-x-2">
        {imageUrls.map((_, index) => (
          <div
            key={index}
            className="w-[90%] cursor-pointer h-[2px] bg-gray-400 rounded-full overflow-hidden"
            onClick={() => handleSlideChange(index)}
          >
            <div
              className={`h-full bg-white relative z-[2] ${
                index === currentIndex ? "w-[100%]" : "w-0"
              }`
            }
            style={{
                transition: 'width 3s ease-in-out'
            }}
            />

          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
          )
        }
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
        }
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default ImageCarousel;
