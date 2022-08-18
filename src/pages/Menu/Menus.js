import { PlusCircleIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';
import React from "react";
import './Menu.css';

const Menus = ({ product }) => {
  const { _id ,img, name, discription, price } = product;
  const navigate = useNavigate();
  

  const navigateToOrders = id =>{
    navigate(`/orders/${id}`)
  }



  return (
    <div>
      
      <div class="card card-compact bg-accent shadow-xl">
        <figure className="image-box">
          <img className="d-block" src={img} alt="foods" />
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
            <span className="border p-2 rounded">Price - <span className="text-primary">${price}</span></span>
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
    </div>
  );
};

export default Menus;
