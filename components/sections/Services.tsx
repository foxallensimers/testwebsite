import React from "react";

const services = [
  {
    icon: "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-service-icon01.png",
    name: "BREAKFAST",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
  {
    icon: "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-service-icon02.png",
    name: "LUNCH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
  {
    icon: "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-service-icon03.png",
    name: "DINNER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
  {
    icon: "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-service-icon04.png",
    name: "DRINKS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex gap-6 items-center" data-aos="fade-left">
          {services.map((item, index) => (
            <div key={index} className="w-[23%] flex justify-center items-center flex-col">
              <img src={item.icon} alt="Icon" />
              <h4 className="text-center mt-4 text-black font-semibold">
                {item.name}
              </h4>
              <p className="text-center text-textColor mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 bg-[#f7f5e7]">
        <div className="flex items-center">
          <div className="px-[200px]">
            <div data-aos="fade-right" className="w-[500px] text-center flex flex-col justify-center items-center">
            <img
              className="mb-4"
              src="http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-about-icon.png"
              alt="Logo"
            />
            <p className="mb-4">Specialty of the Restaurant</p>
            <h1 className="text-[#4e2b1f] font-bold text-5xl">DISCOVER OUR TASTY MEALS</h1>
            <p className="text-textColor mt-4 mb-4 text-[14px]">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="px-4 py-2 bg-primary text-white rounded-md transition-all duration-300 ease-out hover:bg-opacity-50">
              Book a Table
            </button>
            </div>
          </div>
          <div data-aos="fade-up" className="banner_img">
            <img src="http://www.themezaa.com/html/leadgen/demo/restaurant/images/bg-image/restaurant-about-bg.jpg" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
