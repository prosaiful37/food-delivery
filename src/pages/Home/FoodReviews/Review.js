import React from "react";
import quotes from "../../../Images/reviews-image/left-quote.png";

const Review = ({ review }) => {
  const { name, image, description, title } = review;
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl py-5">
      <figure>
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
          </div>
        </div>
      </figure>
      <div class="card-body">
        <img className="w-5 h-5 mx-auto" src={quotes} alt="" />
        <p className="font-sans text-sm italic ">{description}</p>
        <h4 className="text-2xl">{name}</h4>
        <h6 className="font-sans">{title}</h6>
      </div>
    </div>
  );
};

export default Review;
