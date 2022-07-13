import React, { useEffect, useState } from "react";
import Menus from "./Menus";
import subHeader from "../../Images/subheader.jpg";
import menu1 from "../../Images/menuimage/1.jpg";
import menu2 from "../../Images/menuimage/2.jpg";
import menu3 from "../../Images/menuimage/3.jpg";
import menu4 from "../../Images/menuimage/4.jpg";
import menu5 from "../../Images/menuimage/5.jpg";
import menu7 from "../../Images/menuimage/7.jpg";
import menu8 from "../../Images/menuimage/8.jpg";

const Menu = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div
        class="hero bg-cover bg-center ... flex md:flex-col"
        style={{
          background: `url(${subHeader})`,
        }}
      >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center py-10">
          <div class="">
            <h1 className="text-5xl font-bold text-left">Menus</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-8 gap-5 p-7 rounded bg-primary">
          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu1} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Sides</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu2} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Pizzas</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu3} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Salads</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu4} />
              </div>
              
            </div>
            <h4 className="text-2xl text-white text-center">Pasta</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu5} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Desserts</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu7} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Beverages</h4>
          </div>

          <div>
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src={menu8} />
              </div>
            </div>
            <h4 className="text-2xl text-white text-center">Offers</h4>
          </div>
        </div>
      </div>

      <div class="hero my-12 ">
        <div class="hero-content text-center">
          <div class="">
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {products.map((product) => (
                <Menus key={product.id} product={product}></Menus>
              ))}  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
