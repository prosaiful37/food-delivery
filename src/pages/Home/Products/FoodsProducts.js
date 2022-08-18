import { ArrowSmRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodProduct from "./FoodProduct";

const FoodsProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://limitless-mountain-39246.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // click to menu page
  const navigateToMenu = () => {
    navigate("/menu");
  };

  return (
    <div class="hero my-12 ">
      <div class="hero-content text-center">
        <div class="">
          <h6 class="text-2xl font-bold text-primary">Trending</h6>
          <h6 class="text-5xl font-bold">Our Customers' Top Picks</h6>
          <p class="py-6 font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {products.slice(0, 6).map((product) => (
              <FoodProduct key={product.id} product={product}></FoodProduct>
            ))}
          </div>
          {/* {order && <OrdersModal order={order}></OrdersModal>} */}
          <div className="flex-justify-end mt-7">
            <button onClick={navigateToMenu} class="btn btn-active btn-link">
              More Products{" "}
              <ArrowSmRightIcon className="h-5 w-auto ml-1"></ArrowSmRightIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsProducts;
