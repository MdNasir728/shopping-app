import React from "react";
import "./TopBanner.css";
import headphones_a_1 from '../../../assets/headphones_a_1.webp'

const TopBanner = () => {
  return (
    <div className="app__banner section__padding">
      <div className="app__banner-content">
        <p>Beats solo</p>
        <h3>Wireless</h3>
        <h1>HEADPHONE</h1>
        <button>Shop wireless headphone</button>
      </div>
      <div className="app__banner-img">
        <img src={headphones_a_1} alt="" />
      </div>
      <div className="app__banner-desc">
        <h6>Description</h6>
        <p>The game begins here. With Immortal 1000D gaming headphones, don’t just play the game - feel it, live it, and own it. Level up your audio game with 7.1 Channel.</p>
      </div>
    </div>
  );
};

export default TopBanner;
