import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import social1 from "../../../Images/social/google.png";
import social2 from "../../../Images/social/facebook.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()
  let errormsg;



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (gerror || error ) {
    return errormsg = <p className="text-red"> <small>{error?.message || gerror?.message}</small> </p>
  }
  if (loading || gloading) {
    return <Loading></Loading>;
  }
  if (user || guser) {
    return (
      navigate('/')
    );
  }



  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h2 className="text-center pt-4 font-bold text-3xl">Please Login !</h2>
          <div class="card-body md:w-96 font-sans">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
              <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "please valid email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}

                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control">
              <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be 6 cheracter",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
              {errormsg}
            </form>
            <p className="text-center">
              <small>
                New Slice pizza ?{" "}
                <Link className="text-primary" to="/register">
                  Create New Account
                </Link>{" "}
              </small>
            </p>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle() } class="btn btn-outline btn-primary text-black">
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

export default Login;
