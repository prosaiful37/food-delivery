import React from "react";
import DeliveryChart from "./MyDeliveryChart/DeliveryChart";
import MyRevenueChart from "./MyRevenueChart/MyRevenueChart";

const Dashboards = () => {
  return (
    <div className=" my-5">
      <div className="grid md:grid-cols-3 gap-5">

        <div class="card card-compact bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Total User</h2>
            <p className="text-primary font-bold text-2xl">20+</p>
            <div class="card-actions justify-start">
                <button class="btn btn-sm btn-neutral font-sans">Details</button>
            </div>
          </div>
        </div>

        <div class="card card-compact  bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Total Order Delivery</h2>
            <p className="text-primary font-bold text-2xl">1800+</p>
            <div class="card-actions justify-start">
                <button class="btn btn-sm btn-neutral font-sans">Details</button>
            </div>
          </div>
        </div>

        <div class="card card-compact  bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Total Menus</h2>
            <p className="text-primary font-bold text-2xl">70+</p>
            <div class="card-actions justify-start">
                <button class="btn btn-sm btn-neutral font-sans">Details</button>
            </div>
          </div>
        </div>

    

      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Revenue chart */}
        <div class="card card-compact  bg-base-100 shadow-xl my-5">
            <div class="card-body">
            <h2 className="text-secondary font-semi-bold text-2xl">
                Last 6 Month Revenue
            </h2>
                <MyRevenueChart></MyRevenueChart>
            </div>
        </div>

        <div class="card card-compact  bg-base-100 shadow-xl my-5">
            <div class="card-body">
            <h2 className="text-secondary font-semi-bold text-2xl">
                Last 6 Month Delivery
            </h2>
                <DeliveryChart></DeliveryChart>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboards;
