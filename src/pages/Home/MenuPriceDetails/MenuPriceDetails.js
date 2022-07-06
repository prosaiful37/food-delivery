import React from 'react';
import menuImg from "../../../Images/MenuDetails/My project.jpg";

const MenuPriceDetails = () => {
    return (
        <div className="grid md:grid-cols-2 mb-10">
      
      <div className="menudetails p-12">
        <div>
          <div className="menuheading">
            <h4 className="text-primary font-bold text-2xl my-3">Pasta Menu</h4>
            <h2 className="text-5xl font-bold my-3">
            Did Someone Say Italian Food?
            </h2>
            <p className="font-sans my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="menuprices grid md:grid-cols-2 gap-5">
            <div className="menu1">
              <h3 className="font-bold">
              Pesto Pasta ...........................................................{" "}
                <span className="text-primary">14.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu2">
              <h3 className="font-bold">
              Fettucini
                .................................................................{" "}
                <span className="text-primary">13.00$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu3">
              <h3 className="font-bold">
              Chicken Alfredo
                ...................................................{" "}
                <span className="text-primary">09.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu4">
              <h3 className="font-bold">
              Linguini ..................................................................{" "}
                <span className="text-primary">13.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu5">
              <h3 className="font-bold">
              Mac & Cheese ......................................................{" "}
                <span className="text-primary">11.99$</span>
              </h3>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been.
              </p>
            </div>
            <div className="menu2">
              <h3 className="font-bold">
              Italian Specialty ...................................................{" "}
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
      <img className='h-full' src={menuImg} alt="" />
    </div>
    );
};

export default MenuPriceDetails;