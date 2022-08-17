import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://limitless-mountain-39246.herokuapp.com/orders?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://limitless-mountain-39246.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaning = orders.filter((order) => order._id !== id);
          setOrders(remaning);
        });
    }
  };

  return (
    <div>
      <h2>My All Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table md:w-full mt-3">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL/NO</th>
              <th>Foods-Name</th>
              <th>Picture</th>
              <th>Price</th>
              <th>Cancel-item</th>
              <th>Payments</th>
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
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(order._id)}
                    class="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button class="btn btn-success">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span class="text-success">Paid</span>
                      </p>
                      <p>
                        TransctionId:{" "}
                        <span class="text-success">{order.transctionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrder;
