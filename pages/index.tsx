// Animation package
import {
  AboutSection,
  FoodSection,
  HomeSection,
  MenuSection,
  ServiceSection,
} from "@/components/sections";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import Footer from "@/components/sections/Footer";
import Meta from "@/components/Meta";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Meta title="Sunbeam Landing Page" />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <MenuSection />
      <FoodSection />
      <Footer />
    </>
  );
}
