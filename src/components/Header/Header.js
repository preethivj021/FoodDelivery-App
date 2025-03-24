import React from "react";
import "./Header.css";

import food1 from "./food1.png";
import food2 from "./food2.png";
import food3 from "./food3.png";
import mobile from "./mobile.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <span>50% off on First Delivery</span>
        <h1>
          Made with Love, <br /> Savored with interest.
        </h1>
        <p>Savor delicious dishes delivered fast to your door.</p>
        <button>View Menu</button>
      </div>
      <div className="header-images">
        <img src={food2} className="food2" alt="food2" />
        <img src={food1} className="food1" alt="food1" />
        <img src={food3} className="food3" alt="food3" />
        </div>
        <div className="header-images12">
        <img src={mobile} className="mobile" alt="mobile" />
        </div>
    </div>
  );
};

export default Header;
