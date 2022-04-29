import React from "react";
import { data } from "../data/data";
import Traktir from "../image/tracktir.png";
import Parnik from "../image/parnik.png";
import Parnik1 from "../image/parnik1.png";
import Daraxt from "../image/daraxt.png";
import Bulut from "../image/bulut.png";
import Bottom from '../image/about-bottom.png'
import BotItem from '../image/about-item.png'

const About = () => {
  return (
      <div className="about-container">
        <img className="about-daraxt" src={Daraxt} alt="" />
        <div className="container">
          <div className="about-desc">
            <h2>OUR PRODUCTION</h2>
            <p>
              "Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work]
            </p>
          </div>
          <div className="about-product">
            {data.map((object, index) => (
              <div className="about-data">
                <img src={object.img} alt="" />
                <div className="about-data-item">
                  <h3>{object.title}</h3>
                  <p>{object.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-company">
            <div className="about-desc about-deck1">
              <h2>little ABout our company </h2>
              <p>
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do."
              </p>
              <a className="link-active" href="">
                MORE ABOUT
              </a>
              <a href="">OUR YOUTUBE</a>
            </div>
            <div className="about-desc about-deck1">
              <img className="bulut" src={Bulut} alt="" />
              <img className="position position-1" src={Parnik} alt="" />
              <img className="position position-2" src={Parnik1} alt="" />
              <img className="position position-3" src={Traktir} alt="" />
            </div>
          </div>
        </div>
        <div className="about-bottom" style={{backgroundImage: `url(${Bottom})`}}>
          <div style={{backgroundImage: `url(${BotItem})`}}></div>
        </div>
      </div>
  );
};

export default About;
