import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { ordersId } = useParams();

  

  const [quentity, setQuentity] = useState(1);
  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${ordersId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [ordersId]);


  //   handle decrement
  const handleDecrement = () => {
    if (quentity > 1) {
      setQuentity((previousCount) => previousCount - 1);
      
    }
    
    
  };

  //   handle increment
  const handleIncrement = () => {
    if (quentity < 10) {
      setQuentity((previousCount) => previousCount + 1);
      setOrder(order.price * quentity)
    }
   
  };

  

  return (
    <div className="my-10">
      <div class="card md:w-4/5 mx-auto card-side bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={order.img} alt="food" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-4xl">{order.name}</h2>

          <h4 className="text-2xl font-bold font-sans text-primary">
            $ {order.price}
          </h4>
          <p className="font-sans">{order.discription}</p>
          {/* add item1 */}
          <div className="grid md:grid-cols-2 gap-5">
            
            <div class="card w-96 bg-accent shadow">
              <div class="card-body">
                <h2 class="card-title">Dough</h2>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Red pill</span>
                        <span class="label-text font-sans font-bold">+0$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Hand Flipped</span>
                        <span class="label-text font-sans font-bold">+2$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Multi Grain</span>
                        <span class="label-text font-sans font-bold">+4$</span>
                    </label>
                </div>
              </div>
            </div>
            
            
            
            <div class="card w-96 bg-accent shadow">
              <div class="card-body">
                <h2 class="card-title">Crust</h2>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-7" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Cheese</span>
                        <span class="label-text font-sans font-bold">+4$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-7" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Butter</span>
                        <span class="label-text font-sans font-bold">+3.25$</span>
                    </label>
                </div>
              </div>
            </div>
            
            
          </div>
          
          {/* add item 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            
            <div class="card w-96 bg-accent shadow ">
              <div class="card-body">
                <h2 class="card-title">Add</h2>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-8" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Chicken</span>
                        <span class="label-text font-sans font-bold">+2$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-8" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Four Cheese</span>
                        <span class="label-text font-sans font-bold">+1.2$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-8" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Fresh Mushroom</span>
                        <span class="label-text font-sans font-bold">+0.75$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-8" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Bell Peppers</span>
                        <span class="label-text font-sans font-bold">+0.25$</span>
                    </label>
                </div>
              </div>
            </div>
            
            
            
            <div class="card w-96 bg-accent shadow">
              <div class="card-body">
                <h2 class="card-title">Cheese</h2>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-9" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Mozarella</span>
                        <span class="label-text font-sans font-bold">+1$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-9" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Cheddar</span>
                        <span class="label-text font-sans font-bold">+1.25$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-9" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Gruyere</span>
                        <span class="label-text font-sans font-bold">+3.25$</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer">
                    <input type="radio" name="radio-9" class="radio checked:bg-red-500" checked />
                        <span class="label-text font-sans font-bold">Blue Cheese</span>
                        <span class="label-text font-sans font-bold">+0.25$</span>
                    </label>
                </div>
              </div>
            </div>
            
            
          </div>




          <h5 className=" font-bold">Quentity</h5>
          <div className="input-group ">
            <button onClick={handleDecrement} className="btn text-2xl">
              -
            </button>
            <div class="input input-bordered text-2xl ">{quentity}</div>
            <button
              type="button"
              onClick={handleIncrement}
              className="btn text-2xl"
            >
              +
            </button>
          </div>

          <div class="card-actions">
            <button class="btn btn-primary text-2xl font-sans">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
