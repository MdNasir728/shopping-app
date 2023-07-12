import "./FooterBanner.css";
import headphones_c_1 from "../../../assets/headphones_c_1.webp";

import React from "react";

const FooterBanner = () => {
  return (
    <div className="footer__banner section__padding">
      <div className="footer__banner-content">
        <div className="footer__banner-content_left flex__colLeft">
          <p style={{ fontSize: "1.2rem" }}>20% OFF</p>
          <h3>
            FINE <br /> SMILE
          </h3>
          <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
            15 Nov - 7 dec
          </p>
        </div>
        <img src={headphones_c_1} alt="" />
        <div className="footer__banner-content_right flex__colLeft">
          <p style={{ fontSize: "1.2rem" }}>Beats Solo Air</p>
          <h3>Summer Sale</h3>
          <p style={{ fontSize: "1rem", fontWeight: 100 }}>
            company that's grown from 270 to 480 employees in the last 12 months
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
