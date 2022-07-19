import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`, {
        method: "GET",
        headers: {
          'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h2>My All Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full mt-3">
          {/* <!-- head --> */}
          <thead>
            <tr >
              <th>S/L</th>
              <th>Foods-Name</th>
              <th>Picture</th>
              <th>Price</th>
              <th>Quentity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="font-sans hover">
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td className="w-20 h-20">
                  {" "}
                  <img src={order.img} alt="" />{" "}
                </td>
                <td>$ {order.price}</td>
                <td>{order.quentites}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrder;
