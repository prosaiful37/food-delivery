import React from "react";
import img1 from "../../../Images/auth.jpg";
import img2 from "../../../Images/signature.png";

const SingleSide = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={img1} class="max-w-sm rounded-lg shadow-2xl" />
          <div className="m-5">
            <h4 class="text-2xl font-bold text-primary">Sir Slice's Heritage</h4>
            <h2 className="text-5xl font-bold">Serving Pizzas By The Slice Since 1987</h2>
            <p class="py-6 font-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <p class="py-6 font-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <img src={img2} alt="" />
            <button class="btn btn-primary font-sans mt-5">Check Our Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSide;
