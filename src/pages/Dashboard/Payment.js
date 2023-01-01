import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4FX8EhNRtswp1ZwHJP122LD0R4H5xqdE02AI2pVAkdn2Ax1VnRrq9nJ1XEEkLfei20jaMQAVWUea6RBmTSuq3T00HbqNgxWl"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://food-delivery-20mn.onrender.com/orders/${id}`;
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-5">
        <div class="card-body">
          <div className="flex gap-3">
            <div className=" p-1">
              <h3 class="card-title">
                Pay for food :{" "}
                <span className="text-neutral font-sans">{orders.name}</span>
              </h3>
              <p>
                Please pay{" "}
                <span className="text-neutral font-sans">${orders.price}</span>
              </p>
            </div>
            <div className="p-1">
              <img className="w-20" src={orders.img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
