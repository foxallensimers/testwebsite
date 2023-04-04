import React from "react";

const menus = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1968/1968641.png",
    name: "Social Media Management",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1006/1006771.png",
    name: "Website Development",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/6103/6103951.png",
    name: "Email Marketing",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2939/2939047.png",
    name: "Design",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2977/2977872.png",
    name: "Full Marketing & Creative Services",
  },
];

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
const menusItems = [
  {
    title: "Green Salad",
    price: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
  {
    title: "Appeteaser Platter        ",
    price: 23,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
  {
    title: "Eggs Any Style        ",
    price: 53,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
  {
    title: "Spicy Mixed Olives        ",
    price: 45,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
  {
    title: "Chicken Wings        ",
    price: 25,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
  {
    title: "Wing Roulette        ",
    price: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.        ",
  },
];

const Menu = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <div
          data-aos="fade-right"
          className="flex justify-center items-center flex-col mb-10"
        >
          <h1 className="text-4xl text-black font-bold mb-3 header_space">
            MAIN SERVICE
          </h1>
          <p className="text-textColor text-[12px] max-w-[650px] text-center text_space">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="flex gap-10 items-center justify-center"
        >
          {menus.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              <img
                src={item.icon}
                alt="Image"
                className="object-cover w-16 h-16"
              />
              <p className="text-black font-semibold mt-2 text_space">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-12 mt-16">
          {services.map((item, index) => (
            <div
              data-aos="flip-left"
              className="w-[45%] border-b border-gray-300"
              key={index}
            >
              <div className="flex justify-between items-center">
                <p className="text-black text_space">{item.name}</p>
              </div>
              <p className="mt-2 text-textColor text-[12px] pb-4 text_space">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
