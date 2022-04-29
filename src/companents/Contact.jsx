import React from "react";

import { BsPlusLg } from "react-icons/bs";
import Flag from "../image/flag.png";
import Brat from "../image/brat.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-block">
        <img className="flag" src={Flag} alt="" />
        <div className="container container-con">
          <div className="contact-top">
            <div className="contact-desc">
              <h2>See why we are trusted the world over</h2>
              <p>
                The first rule of any technology used in a business is that
                automation applied to an efficient operation will magnify the
                efficiency.
              </p>
            </div>
            <div className="contact-table">
              <div>
                <h3>Do you provide customer support?</h3>
                <BsPlusLg />
              </div>
              <div className="contact-table-active">
                <h3>How much traffic can the hosting handle?</h3>
                <BsPlusLg />
              </div>
              <div>
                <h3>Do you have any questions for us?</h3>
                <BsPlusLg />
              </div>
              <div className="contact-table-active">
                <h3>What is your return policy?</h3>
                <BsPlusLg />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="contact-pos">
          <h2>How our client made 10x revenue</h2>
          <div style={{ backgroundImage: `url(${Brat})` }}>
            <div>
              <h3>"I learned so much, even as a professional".</h3>
              <p>
                "Ut vehicula lacus a lacus tempor, nec viverra justo
                condimentum. Integer eu urna dapibus, scelerisque nisl non,
                semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
              </p>
              <h3>Juan Huang</h3>
            </div>
            <a href="">more stories</a>
          </div>
        </div>
        <div className="contact-pos">
          <h2>Other successful stories</h2>
          <div className="contact-pos-"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
