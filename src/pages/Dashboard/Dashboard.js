import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
// import { EmojiHappyIcon, EmojiSadIcon } from '@heroicons/react/solid'

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-3 bg-natural">
        <h2 className="text-4xl font-bold text-secondary">
          Welcome To our Dashboard{" "}
          <span className="text-primary text-2xl font-sans ">
            <small> Mr.{user.displayName}  </small> 
          </span>{" "}
        </h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side ">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-neutral text-white font-sans">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-1">
            <Link to="/dashboard">Orders</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/review">Reviews</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
