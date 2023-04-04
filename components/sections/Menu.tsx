import React from "react";

const menus = [
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam01.png",
    title: "STARTERS",
  },
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam02.png",
    title: "MEAT",
  },
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam03.png",
    title: "FISH",
  },
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam04.png",
    title: "VEGETARIAN",
  },
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam05.png",
    title: "DESSERT",
  },
  {
    image:
      "http://www.themezaa.com/html/leadgen/demo/restaurant/images/restaurant-menu-iteam06.png",
    title: "DRINKS",
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
    <section id="menu" className="py-16">
      <div className="container">
        <div data-aos="fade-right" className="flex justify-center items-center flex-col mb-10">
          <h1 className="text-4xl text-black font-bold mb-3">MAIN MENU</h1>
          <p className="text-textColor text-[12px] max-w-[650px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div data-aos="flip-right" className="flex gap-10 items-center justify-center">
          {menus.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              <img src={item.image} alt="Image" className="object-cover" />
              <p className="text-primary font-semibold mt-2">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-12 mt-16">
          {menusItems.map((item, index) => (
            <div data-aos="flip-left" className="w-[45%] border-b border-gray-300" key={index}>
              <div className="flex justify-between items-center">
                <p className="text-black">{item.title}</p>
                <p className="text-black">${item.price}</p>
              </div>
              <p className="mt-2 text-textColor text-[12px] pb-4">
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
