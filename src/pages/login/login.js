import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
  return (
    <div className="h-screen bg-gradient-to-r from-purple-600 to-purple-400 flex justify-center items-center">
      <div className="border-solid bg-purple-300 text-white border-purple-700 h-min w-2/5 bg-opacity-50 rounded-xl">

        <div className="m-10">
        <h1 className="  font-bold text-3xl mb-3">Login</h1>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-white text-black"
            />
            
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Password</span>
            </div>
            <input ttype="password" className="input input-bordered w-full bg-white text-black" placeholder="********" />
        
          </label>
          <p className=" text-xs mt-2 underline underline-offset-1 cursor-pointer">Forgot Password?</p>
          <button class="btn w-full my-5" onClick={() => navigate("/home")}>
          Sign In
        </button>
        <p className="text-center">
          Already have a account?{" "}
          <a
            className="font-semibold cursor-pointer underline underline-offset-1"
            onClick={() => navigate("/")}
          >
            Sign In
          </a>
        </p>
        </div>
        
      </div>
    </div>
  );
}
