import React from "react";
import icon1 from "../../../Images/deliver/online-booking.png";
import icon2 from "../../../Images/deliver/burn.png";
import icon3 from "../../../Images/deliver/delivery-man.png";
import icon4 from "../../../Images/deliver/customer.png";

const DeliverySteps = () => {
  return (
    <div className="my-8">
      <div class="">
        <div class="text-center">
          <div class="">
            <h6 className="text-primary font-bold text-2xl">How We Do It</h6>
            <h2 className="md:text-5xl font-bold font-sans">
              We Deliver Your Food In 4 Steps
            </h2>
            <p class="py-6 font-serif">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        
        </div>
        
      </div>
      <div className="deliver grid md:grid-cols-4">
        <div class="card w-96">
          <figure class="px-10 pt-10">
            <img className="w-20 h-20" src={icon1} alt="" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl">Order</h2>
            <p className="font-sans">If a dog chews shoes whose <br /> shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-96">
          <figure class="px-10 pt-10">
            <img className="w-20 h-20" src={icon2} alt="" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl">Cook</h2>
            <p className="font-sans">If a dog chews shoes whose <br />shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-96">
          <figure class="px-10 pt-10">
            <img className="w-20 h-20" src={icon3} alt="" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl">Deliver</h2>
            <p className="font-sans">If a dog chews shoes whose <br /> shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-96">
          <figure class="px-10 pt-10">
            <img className="w-20 h-20" src={icon4} alt="" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl">Enjoy</h2>
            <p className="font-sans">If a dog chews shoes whose <br /> shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySteps;
