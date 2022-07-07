import React from "react";
import { Link } from "react-router-dom";
import social1 from "../../../Images/social/google.png";
import social2 from "../../../Images/social/facebook-app-symbol.png";

const Login = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h2 className="text-center p-5 font-sans font-bold text-3xl">
            Please Login!
          </h2>
          <div class="card-body md:w-96 font-sans">
            <form action="">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center"><small>New pizza hank ? <Link className="text-primary" to="/signUp">Create New Account</Link> </small></p>
              <div class="divider">OR</div>
              <button  class="btn btn-outline btn-primary text-black"> <img className="w-5 mr-4" src={social1} alt="" /> Continue with Google </button>
              <button  class="btn btn-outline btn-primary text-black"> <img className="w-5 mr-4" src={social2} alt="" /> Continue with facebook </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
