import React from "react";

const gallary = [
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-13.jpg",
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-08.jpg",
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-02.jpg",
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-14.jpg",
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-04.jpg",
  "http://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-work-06.jpg",
];

const FoodGllary = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-center items-center flex-col mb-10">
          <h1 className="text-4xl text-black font-bold mb-3">FOOD GALLERY</h1>
          <p className="text-textColor text-[12px] max-w-[650px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4">
        {gallary.map((img, index) => (
          <div key={index} data-aos="fade-right" className=" cursor-pointer relative before:hover:bg-opacity-30 before:content-[''] before:absolute before:hover:bg-gray-900 before:w-full before:h-full transition-all duration-300 ease-out">
            <img src={img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodGllary;
