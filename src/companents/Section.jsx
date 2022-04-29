import React from 'react'
import Navbar from "../companents/Navbar";
import Bg from "../image/bg.png";
import Img from "../image/img.png";
import { BsArrowRightShort } from "react-icons/bs";

const Section = () => {
  return (
    <div
    className="background"
    style={{
      backgroundImage: `url(${Bg})`,
    }}
  >
    <div className="container">
      <Navbar />
      <div className="bg-text">
        <div className="bg-block">
          <h1>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
          <p>
            Here will be brief information about our company and some of
            advantages of our offers. Here will be brief information about
            our company.
          </p>
          <a href="">
            <p>EXPLORE</p>
            <BsArrowRightShort style={{ color: "#fff" }} />
          </a>
        </div>
        <div className="bg-block-img"> </div>
      </div>
    </div>
    <div className="home_foo_img">
      <div
        className="home_img"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      ></div>
      <div
        className="home_img"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      ></div>
    </div>
  </div>
  )
}

export default Section