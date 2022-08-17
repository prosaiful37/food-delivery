import { PlusCircleIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';
import React from "react";


const FoodProduct = ({ product }) => {
  const {_id, img, name, discription, price } = product;
  const navigate = useNavigate();

  const navigateToOrders = id =>{
    navigate(`/orders/${id}`)
  }

  return (
    <div class="card card-compact bg-base-100 shadow rounded-0">
      <figure className="image-box">
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body items-center">
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
          <span className="border p-2 rounded">$ {price}</span>
        </p>
        <hr />
        <div class="card-actions mt-5">
          <button onClick={() => navigateToOrders(_id)} class="btn btn-outline btn-primary font-sans font-bold text-white">
            Manage Order {" "} 
             <PlusCircleIcon className="h-5 w-auto ml-3"></PlusCircleIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodProduct;
