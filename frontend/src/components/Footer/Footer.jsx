import "./Footer.css";

import React from "react";
import { FaRegCopyright, FaTelegram } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="section__padding">
      <div className="app__footer-copyright flex__center">
        <FaRegCopyright />
        <p> 2022 Phanox All Rights Reserved</p>
      </div>
      <div className="app__footer-social_icons flex__center">
        
        <BsInstagram cursor={'pointer'} />
        <BsTwitter cursor={'pointer'} />
        <BsFacebook cursor={'pointer'} />
        <FaTelegram cursor={'pointer'} />
      </div>
    </div>
  );
};

export default Footer;
