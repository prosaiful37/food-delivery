import React from "react";
import { Link } from "react-router-dom";
import social1 from "../../../Images/social/google.png";
import social2 from "../../../Images/social/facebook.png";

const Register = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h2 className="text-center p-5 font-sans font-bold text-3xl">
            Registration
          </h2>
          <div class="card-body md:w-96 font-sans">
            <form action="">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center">
              <small>
                Already Have an account ?{" "}
                <Link className="text-primary" to="/login">
                  Login now
                </Link>{" "}
              </small>
            </p>
            <div class="divider">OR</div>
            <button class="btn btn-outline btn-primary text-black">
              {" "}
              <img className="w-5 mr-4" src={social1} alt="" /> Continue with
              Google{" "}
            </button>
            <button class="btn btn-outline btn-primary text-black">
              {" "}
              <img className="w-5 mr-4" src={social2} alt="" /> Continue with
              facebook{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
