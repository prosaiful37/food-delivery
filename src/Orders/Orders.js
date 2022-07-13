import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { ordersId } = useParams();

  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${ordersId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [ordersId]);
  return (
    <div className="my-10">
      <div class="card md:w-3/5 mx-auto bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={order.img} alt="food" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-4xl">{order.name}</h2>
            <div>
                
            </div>
          <h4 className="text-2xl font-bold font-sans text-primary">$ {order.price}</h4>
          <p className="font-sans">{order.discription}</p>
          <div class="card-actions">
            <button class="btn btn-primary text-2xl font-sans">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
