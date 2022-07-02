import React from "react";
import fizz1 from "../../../Images/heroimg/1.png";
import fizz2 from "../../../Images/heroimg/2 (1).png";
import fizz3 from "../../../Images/heroimg/5.png";

const Features = () => {
  return (
    <div className="my-8 grid md:grid-cols-3 ">
      <div class="card card-side shadow-xl p-4 m-5 bg-yellow-200">
        <figure>
          <img className="w-40 h-40" src={fizz1} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Specialty</h2>
          <p className="font-sans font-bold">$ 10.99</p>
        </div>
      </div>
      <div class="card card-side shadow-xl p-4 m-5 bg-orange-200">
        <figure>
          <img className="w-40 h-40" src={fizz3} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Ham & Cheese</h2>
          <p className="font-sans font-bold">$ 13.99</p>
        </div>
      </div>
      <div class="card card-side shadow-xl p-4 m-5 bg-red-200">
        <figure>
          <img className="w-40 h-40" src={fizz2} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Vegetarian</h2>
          <p className="font-sans font-bold">$ 5.99</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
