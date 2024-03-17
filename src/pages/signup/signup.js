import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {


    const handleSignUp = async (e) => {
    // e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/auth/register",
    //     {
    //       firstname,
    //       lastname,
    //       mobile_number,
    //       password,
    //     }
    //   );

    //   // Handle successful response (you may redirect or show a success message)
    //   console.log("Success:", response.data);

    //   // Display success message using react-toastify
    //   toast.success(response.data.message);
    //   toast.success("Signup is successful");

    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 100);
    //   // Redirect to the home page
    //   await router.push("/login");
    // }catch (error) {
    //     tos
    // }
};

  return (
    <div className="h-screen bg-gradient-to-r from-purple-600 to-purple-400 flex justify-center items-center">
      <div className="border-solid bg-purple-300 text-white border-purple-700 h-min w-2/5 bg-opacity-50 rounded-xl">
        <div className="m-10">
          <h1 className="  font-bold text-3xl mb-3">Register</h1>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-white text-black"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-white text-black"
            />
          </label>
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
            <input
              ttype="password"
              className="input input-bordered w-full bg-white text-black"
              placeholder="********"
            />
          </label>
          <button class="btn w-full my-5" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
