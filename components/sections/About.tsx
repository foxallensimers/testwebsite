import React from "react";

const About = () => {
  return (
    <section
      className="py-16 border-b border-gray-300"
      data-aos="fade-up"
      // data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="flex gap-x-20 items-center">
          <div className="w-[40%]">
            <div className="flex items-center gap-6">
              <img
                data-aos="flip-right"
                data-aos-delay="100"
                src="https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Art Logo"
                className="w-[241px] h-[362px] object-cover mt-[-20px]"
              />
              <img
                data-aos="flip-left"
                data-aos-delay="300"
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Art Logo"
                className="mt-10 block w-[241px] h-[362px] object-cover"
              />
            </div>
          </div>
          <div className="w-[40%]">
            <h1 className="text-gray-900 text-3xl font-semibold mb-4 tracking-[4px]">
              Why Sunbeam?
            </h1>
            <div className="flex gap-6 items-center">
              <div>
                <h1 className="text-gray-900 text-xl font-semibold mb-4 text_space">
                  Our Mission
                </h1>
                <p className="text-textColor mb-4 tracking-[2px]">
                  To have the curiosity and marketing know-how to discover the
                  large and small opportunities in our clients’ businesses —
                  helping them develop and reach their goals.
                </p>
              </div>
              <div>
                <h1 className="text-gray-900 text-xl font-semibold mb-4 tracking-[3px]">
                  Our Vision
                </h1>
                <p className="text-textColor mb-4 text_space">
                  Create a positive, collaborative environment for our team and
                  clients to successfully identify and solve tough marketing
                  opportunities and issues with skill and grace.
                </p>
              </div>
            </div>
            <p className="text-textColor text-[12px] leading-5 text_space">
              At Sunbeam Marketing Solutions, we understand what motivates
              customers to turn into enthusiasts. Through a customized approach,
              we elevate our clients as trusted brand leaders through the
              discovery and development of practical business and marketing
              solutions. Our team of specialized, innovative, diverse marketing
              experts cultivates your vision into a tangible brand inspired by
              passion, authenticity, strategy, and growth.
            </p>
            <button className="mt-4 border-2 border-primary text-primary  px-4 py-2 rounded-full uppercase text-[10px] tracking-[3px] transition-all font-bold duration-300 ease-out hover:tracking-[2px]">
              learn more about us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
