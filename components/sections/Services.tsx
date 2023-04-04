import React from "react";
import Logo from '../../assets/logo.png'

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1968/1968641.png",
    name: "Social Media Management",
    description:
      "storyboards content creation posting and engagement analytics report ads",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1006/1006771.png",
    name: "Website Development",
    description: "design build support analytics report",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/6103/6103951.png",
    name: "Email Marketing",
    description:
      "email design and copy newsletters event emails lead generation campaigns nurture campaigns drip campaigns analytics report",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2939/2939047.png",
    name: "Design",
    description: "logo one sheets business cards brochures zoom rooms etc.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2977/2977872.png",
    name: "Full Marketing & Creative Services",
    description:
      "Go-to-Market Strategy Vision & Brand Development Strategic Growth",
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex gap-6 items-center" data-aos="fade-left">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-[23%] flex justify-center items-center flex-col"
              data-aos="flip-right"
            >
              <img
                className="w-16 h-16 object-cover"
                src={item.icon}
                alt="Icon"
              />
              <h4 className="text-center mt-4 text-black font-semibold tracking-[2px]">
                {item.name}
              </h4>
              <p className="text-center text-textColor mt-4 tracking-[2px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 bg-[#f7f5e7]">
        <div className="flex items-center">
          <div className="px-[200px]">
            <div
              data-aos="fade-right"
              className="w-[500px] text-center flex flex-col justify-center items-center"
            >
              <img
                className="mb-4 h-20 object-contain"
                src={Logo.src}
                alt="Logo"
              />
              <h1 className="text-black font-bold text-5xl header_space">
                Our Methodology
              </h1>
              <p className="text-textColor mt-4 mb-4 text-[14px] text_space">
                We work with you to define and refine your path to growth and
                profitability. With a classical marketing foundation enhanced by
                digital-age methods, we create practical and logical
                possibilities that flourish. At Sunbeam Marketing Solutions, we:
                <br />
                <span>- Develop solutions that you can own to succeed.</span> <br />
                <span>- Accelerate your growth by creating enthusiasts.</span>
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-md transition-all duration-300 ease-out hover:bg-opacity-50">
                Contact Us
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="banner_img">
            <img
              src="https://images.pexels.com/photos/5833772/pexels-photo-5833772.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
