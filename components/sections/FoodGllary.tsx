import React from "react";

const gallary = [
  "https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6483626/pexels-photo-6483626.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const FoodGllary = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-center items-center flex-col mb-10">
          <h1 className="text-4xl text-black font-bold mb-3 tracking-[4px]">OUR OFFICE TOUR</h1>
          <p className="text-textColor text-[12px] max-w-[650px] text-center tracking-[1px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="columns-2 md:columns-3 lg:columns-4">
        {gallary.map((img, index) => (
          <div key={index} data-aos="fade-left"       data-aos-duration="3000"
          className="rounded-md cursor-pointer relative before:hover:bg-opacity-30 before:content-[''] before:absolute before:hover:bg-gray-900 before:w-full before:h-full transition-all duration-300 ease-out">
            <img src={img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodGllary;
