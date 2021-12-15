import React from "react";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 br2 shadow-2" style={{ height: 100, width: 100 }}>
      <div className="pa3">
        <img style={{ paddingTop: "5px" }} src={brain} alt="brain" />
      </div>
    </div>
  );
};

export default Logo;
