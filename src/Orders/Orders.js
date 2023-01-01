import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../pages/Shared/Loading/Loading";

const Orders = () => {
  const [user, loading, error] = useAuthState(auth);
  const { ordersId } = useParams();

  const [quentity, setQuentity] = useState(1);
  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = `https://food-delivery-20mn.onrender.com/products/${ordersId}`;
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
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const handleOrder = (e) => {
    e.preventDefault();

    const img = order.img;
    const name = order.name;
    const price = order.price;
    const discription = order.discription;
    const quentites = quentity;
    const userEmail = user.email;

    const orders = {
      img,
      name,
      price,
      discription,
      quentites,
      userEmail,
    };

    fetch("https://food-delivery-20mn.onrender.com/orders/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Your Order Added successfull");
        }

        setOrder(data);
      });
  };

  return (
    <div className="my-10">
      <div class="card md:w-7/12 mx-auto  bg-base-100 shadow">
        <div>
          <form onSubmit={handleOrder} action="">
            <figure class="px-10 pt-10">
              <img src={order.img} alt="food" class="rounded-xl" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-4xl">{order.name}</h2>
              <p className="hidden">user email: {user.email}</p>

              <h4 className="text-2xl font-bold font-sans text-primary">
                $ {order.price}
              </h4>
              <p className="font-sans">{order.discription}</p>

              <div className="coustomize-variation flex">
                <div>
                  <h4 className="font-bold mr-2 text-2xl">Size: </h4>
                </div>

                <div className="px-2 m-2 font-bold rounded text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ...">
                  " 11 "
                </div>
                <div className="px-2 m-2 font-bold rounded text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ...">
                  " 16 "
                </div>
                <div className="px-2 m-2 font-bold rounded text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ...">
                  " 21 "
                </div>
              </div>

              {/* add item1 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div class="card  bg-accent shadow">
                  <div class="card-body">
                    <h2 class="card-title">Dough</h2>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-6"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Red pill
                        </span>
                        <span class="label-text font-sans font-bold">+0$</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-6"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Hand Flipped
                        </span>
                        <span class="label-text font-sans font-bold">+2$</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-6"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Multi Grain
                        </span>
                        <span class="label-text font-sans font-bold">+4$</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="card  bg-accent shadow">
                  <div class="card-body">
                    <h2 class="card-title">Crust</h2>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-7"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Cheese
                        </span>
                        <span class="label-text font-sans font-bold">+4$</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-7"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Butter
                        </span>
                        <span class="label-text font-sans font-bold">
                          +3.25$
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* add item 2 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div class="card  bg-accent shadow ">
                  <div class="card-body">
                    <h2 class="card-title">Add</h2>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-8"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Chicken
                        </span>
                        <span class="label-text font-sans font-bold">+2$</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-8"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Four Cheese
                        </span>
                        <span class="label-text font-sans font-bold">
                          +1.2$
                        </span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-8"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Fresh Mushroom
                        </span>
                        <span class="label-text font-sans font-bold">
                          +0.75$
                        </span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-8"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Bell Peppers
                        </span>
                        <span class="label-text font-sans font-bold">
                          +0.25$
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="card bg-accent shadow">
                  <div class="card-body">
                    <h2 class="card-title">Cheese</h2>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-9"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Mozarella
                        </span>
                        <span class="label-text font-sans font-bold">+1$</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-9"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Cheddar
                        </span>
                        <span class="label-text font-sans font-bold">
                          +1.25$
                        </span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-9"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Gruyere
                        </span>
                        <span class="label-text font-sans font-bold">
                          +3.25$
                        </span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <input
                          type="radio"
                          name="radio-9"
                          class="radio checked:bg-red-500"
                          checked
                        />
                        <span class="label-text font-sans font-bold">
                          Blue Cheese
                        </span>
                        <span class="label-text font-sans font-bold">
                          +0.25$
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className=" font-bold mb-2">Quentity</h5>
              <div className="input-group mb-3">
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
          </form>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Orders;
