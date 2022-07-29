import { ShoppingCartIcon, ThumbUpIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
// import { EmojiHappyIcon, EmojiSadIcon } from '@heroicons/react/solid'

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);
  
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-3 bg-natural">
        <h2 className="md:text-4xl font-bold text-secondary">
          Welcome To our Dashboard{" "}
          <span className="text-primary text-2xl font-sans ">
            <small> Mr.{user.displayName}  </small> 
          </span>{" "}
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-neutral text-white font-sans">
          <li className="text-2xl mb-1 font-bold">
            Slice pizza
          </li>
          <hr />
          {/* <!-- Sidebar content here --> */}
          <li className="mb-1 mt-3">
            <Link to="/dashboard"> <span> <ShoppingCartIcon className="h-5 w-auto ms-2"></ShoppingCartIcon> </span> Orders</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/review"><span> <ThumbUpIcon className="h-5 w-auto ms-2"></ThumbUpIcon> </span> Reviews</Link>
          </li>
          { admin && <li className="mb-1"><Link to="/dashboard/users"><span> <UserGroupIcon className="h-5 w-auto ms-2"></UserGroupIcon> </span> All Users</Link></li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
