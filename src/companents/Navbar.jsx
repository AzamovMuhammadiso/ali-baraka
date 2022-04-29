import React from "react";
import { BsTelephone } from "react-icons/bs";
import Logo from '../image/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="nav-tel">
          <div className="nav-icon">
            <BsTelephone />
          </div>
          <div className="nav-number">
            <a href="tel: +998 95-004-80-90">95-004-80-90</a>
            <a href="tel: +998 94-641-40-00">94-641-40-00</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
