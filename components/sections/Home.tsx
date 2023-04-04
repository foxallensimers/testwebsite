import React from "react";
import Header from "../Header";
import Hero from "../Hero";

const Home = () => {
  return (
    <section data-aos="fade-right" id="Home">
      <Header />
      <div className="flex justify-start items-center min-h-screen">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
