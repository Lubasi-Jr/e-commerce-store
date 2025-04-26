import React from "react";
import Categories from "@/features/about/components/Categories";
import NewsLetter from "@/features/about/components/Newsletter";
import AboutLu from "@/features/about/components/AboutLu";

const About = () => {
  return (
    <>
      <AboutLu />
      <Categories />
      <NewsLetter />
    </>
  );
};

export default About;
