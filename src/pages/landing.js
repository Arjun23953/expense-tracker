import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white">
      <div className=" bg-purple-400 h-3/5"></div>
      <div className="w-screen grid grid-rows-2 justify-items-center gap-5 mt-20">
        <h1 className="text-3xl font-semibold">Spend Smarter Save More</h1>
        <button class="btn w-2/5" onClick={() => navigate("/signup")}>
          Get Started
        </button>
        <p>
          Already have a account?
          <a
            className="font-semibold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
