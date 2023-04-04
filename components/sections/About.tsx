import React from "react";

const About = () => {
  return (
    <section
      className="py-16 border-b border-gray-300"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="flex gap-x-20 items-center">
          <div className="w-[35%]">
            <img
              src="http://www.themezaa.com/html/leadgen/demo/restaurant/images/content-50.jpg"
              alt="Art Logo"
            />
          </div>
          <div className="w-[40%]">
            <h1 className="text-gray-900 text-3xl font-semibold mb-4">
              The best food in town at one of the best locations!!!
            </h1>
            <p className="text-textColor mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </p>
            <p className="text-textColor text-[12px] leading-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the when an unknown printer took a galley of type scrambled it to
              make a type specimen book. Lorem Ipsum has been the industry's
              standard dummy text ever since the when an unknown printer took a
              galley of type scrambled.
            </p>
            <button className="mt-4 border-2 border-primary text-primary  px-4 py-2 rounded-full uppercase text-[10px] tracking-[3px] transition-all font-bold duration-300 ease-out hover:tracking-[2px]">
              explor menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
