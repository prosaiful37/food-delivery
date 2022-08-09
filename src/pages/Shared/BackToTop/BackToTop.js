import React, { useState, useEffect } from "react";
import "./BackToTop.css";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [showTopToBtn, setShowTopToBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        showTopToBtn(true);
      } else {
        setShowTopToBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 

  return (
    <div>
      <div className="top-to-btm">
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      </div>
      
    </div>
  );
};

export default BackToTop;
