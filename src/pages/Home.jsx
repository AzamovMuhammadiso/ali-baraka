import React from "react";
import "./style/style.css";

import Section from "../companents/Section";
import About from "../companents/About";
import Contact from "../companents/Contact";

const Home = () => {
  return (
    <div className="home-container">
      <Section />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
