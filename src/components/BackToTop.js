import React from "react";
import backtotopbtn from "../images/up.png";
import topBtn from "../images/top-btn.png";
import topBtnOne from "../images/top-btn-one.png";

const BackToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="back-to-top-btn"
      onClick={scrollToTop}
      id="scroll-to-top-btn"
    >
      <div className="back-to-top-content">
        <img src={backtotopbtn} alt="back to top button" />
        {/* <img src={topBtn} alt="back to top button" /> */}
        {/* <img src={topBtnOne} alt="back to top button" /> */}
      </div>
    </div>
  );
};

export default BackToTopButton;