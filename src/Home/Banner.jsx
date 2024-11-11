import React from 'react';

const Banner = () => {
  const content = ['Exports Across the world', 'Safe and Secure', 'Seamless Supply solution '];
  
  // Create double content for seamless scrolling
  const repeatedContent = [...content, ...content, ...content, ...content];
  
  return (
    <div className="bg-[#232425] overflow-hidden group mb-10">
      <div className="relative flex w-full  ">
        <div className=" wrapper animate-marquee group-hover:animation-pause flex items-center whitespace-nowrap pt-5 pb-5"

        >

          {repeatedContent.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white uppercase text-[1.5rem]  mx-12">{item}</span>
              <span className="text-white mx-12">-</span>
            </React.Fragment>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className=" wrapper2 absolute top-0 flex items-center whitespace-nowrap animate-marquee2 group-hover:animation-pause pt-5 pb-5" 
        >
          {repeatedContent.map((item, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span className="text-white uppercase text-[1.5rem]  mx-12">{item}</span>
              <span className="text-white mx-12">-</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;