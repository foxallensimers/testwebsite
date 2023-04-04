import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className="flex flex-col justify-start items-start  max-w-[550px] "
      >
        <h1 data-aos="slide-right" className="text-primary leading-[70px] text-7xl font-bold  tracking-widest  ">
          Sunbeam
        </h1>
        <h1 data-aos="fade-up" data-aos-delay="1000"  className="text-white leading-[70px] text-7xl font-bold  tracking-widest  ">
          Marketing
        </h1>
        <h1 data-aos="fade-down" data-aos-delay="2000" className="text-secondary leading-[70px] text-7xl font-bold  tracking-widest  ">
          Soluations
        </h1>

        <p
         data-aos="fade-down" data-aos-delay="3200"
          className="text-white mt-2 mb-4 text-center tracking-[4px]"
        >
          Creating Enthusiasts. Accelerating Growth.
        </p>
        <button
          data-aos="fade-down" data-aos-delay="400"
          className="text-white border border-white text-[16px] tracking-widest px-4 py-2 rounded-md transition-all duration-300 ease-out hover:bg-primary hover:border-opacity-0"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
