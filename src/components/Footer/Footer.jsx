import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>MealMate</h1>
          <p>Food Delivery provides fast and reliable delivery service for your favorite meals.</p>
          <div className="footer-content-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Delivery</a></li>
              <li><a href="#contact">Privacy policy</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><a href="mailto:contact@fooddelivery.com">contact@fooddelivery.com</a></li>
                <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
        </div>
      </div>
      <hr/>
        <p className="footer-copyright">© 2024 Food Delivery. All rights reserved.</p>
    </div>
  );
};

export default Footer;
