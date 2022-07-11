import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import social1 from "../../../Images/social/google.png";
import social2 from "../../../Images/social/facebook.png";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, perror] = useUpdateProfile(auth);

  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let errormsg;




  // registration form error handalling
  if (gerror || error || perror) {
    return errormsg = <p className="text-red"> <small>{error?.message || gerror?.message || perror?.message}</small> </p>
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
    await createUserWithEmailAndPassword( data.email, data.password);
    await updateProfile({ displayName: data.name });

    
  };


  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h2 className="text-center p-5 font-sans font-bold text-3xl">
            Registration
          </h2>
          <div class="card-body md:w-96 font-sans">
            <form onSubmit={handleSubmit(onSubmit)}  action="">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                  {errors.name?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
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
                <input
                  type="email"
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
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
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
                <input
                  type="text"
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
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Sign Up</button>
              </div>
              {errormsg}
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
            <button onClick={() => signInWithGoogle() }  class="btn btn-outline btn-primary text-black">
              {" "}
              <img className="w-5 mr-3" src={social1} alt="" /> Continue with
              Google{" "}
            </button>
            <button class="btn btn-outline btn-primary text-black">
              {" "}
              <img className="w-5 mr-3" src={social2} alt="" /> Continue with
              facebook{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
