import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            accusamus adipisci quibusdam iure nihil, deleniti, iusto dignissimos
            dolore porro odit vitae, rem dolorum beatae corrupti inventore vero
            quo repellendus maxime.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-left">
            <h2>COMPANY</h2>
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+11 225 1125</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        cpoyright 2024 Tomato.com -All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
