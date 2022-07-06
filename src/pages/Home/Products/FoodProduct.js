import { ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";

const FoodProduct = ({ product }) => {
  const { img, name, discription, price } = product;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="text-left font-sans mb-3">{discription}</p>
        <p className="text-left font-sans font-bold my-3">
          <span className="border p-2 rounded">${price}</span>
        </p>
        <hr />
        <div class="card-actions mt-5">
          <button class="btn btn-primary font-sans font-bold text-white">
            Order{" "}
            <ShoppingCartIcon className="h-5 w-auto ms-2"></ShoppingCartIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodProduct;
