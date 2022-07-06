import React from "react";
import menuimg from "../../../Images/MenuDetails/My project (1).jpg";

const MenuDetails1 = () => {
  return (
    <div className="grid md:grid-cols-2">
      <img className='h-full' src={menuimg} alt="" />
      <div className="menudetails p-12">
        <div>
          <div className="menuheading">
            <h4 className="text-primary font-bold text-2xl my-3">Pizza Menu</h4>
            <h2 className="text-5xl font-bold my-3">
              Our Passion, Our Heritage, Our Pizzas
            </h2>
            <p className="font-sans my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="menuprices grid md:grid-cols-2 gap-5">
            <div className="menu1">
              <h3 className="font-bold">
                Pepperoni Pizza ..........................................{" "}
                <span className="text-primary">14.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu2">
              <h3 className="font-bold">
                Four Cheese
                ......................................................{" "}
                <span className="text-primary">13.00$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu3">
              <h3 className="font-bold">
                Vegetarian
                ......................................................{" "}
                <span className="text-primary">09.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu4">
              <h3 className="font-bold">
                Barbeque Chicken ............................................{" "}
                <span className="text-primary">13.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu5">
              <h3 className="font-bold">
                Ham & Cheese ................................................{" "}
                <span className="text-primary">11.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu2">
              <h3 className="font-bold">
                Specialty Pizza ................................................{" "}
                <span className="text-primary">14.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails1;
