import React from "react";
// import heor1 from "../../../Images/heroimg/1.png";
import background from "../../../Images/heroimg/7.jpg";
import banner1 from "../../../Images/heroimg/1 (1).png";
// import banner3 from "../../../Images/heroimg/3.png";
// import banner4 from "../../../Images/heroimg/12.png";

const Banner = () => {
  return (
    <div className=" ">
      <div
        class="hero min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="">
            <img className="w-100 mx-auto" src={banner1} alt="" />
            <h1 class="mb-5 md:text-7xl font-bold text-white">
              MODERNIZING THE <br /> TRADITIONAL ITALIAN PIZZA
            </h1>
            <p class="mb-5 font-sans">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary font-sans">View menu</button>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Banner;
