import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-white z-0">
      <div className=" bg-gradient-to-r from-purple-300 to-purple-400 h-2/5 p-10 z-10 rounded-b-lg">
        <h3 className="text-xl text-white text-center">Good afternoon</h3>
        <h1 className="text-3xl text-white text-center font-semibold">
          User Name
        </h1>
      </div>
      <div className="h-2/6 w-2/5 mx-auto -mt-32 bg-purple-400 bg-opacity-50 rounded-xl">
        <div className="grid grid-rows-2 grid-cols-2 p-10 text-white h-full">
          <div className="col-span-2">
            <p>Total Balance</p>
            <h2 className="text-3xl font-semibold">$69,420</h2>
          </div>

          <div className="self-end">
            <div className="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              <p>Income</p>
            </div>

            <h2 className="text-2xl font-semibold">$69,420</h2>
          </div>
          <div className="self-end justify-self-end">
            <div className="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>

              <p>Expense</p>
            </div>
            <h2 className="text-2xl font-semibold">$69,420</h2>
          </div>
        </div>
      </div>
      <div className="flex m-5 ">
        <div className="bg-white h-72 w-screen mr-2">Graph</div>
        <div className="bg-white text-black h-72 w-screen basis-1/2 ">
          <div className="w-full flex justify-between">
            <h1>Recent Histore</h1>
            <a class="link link-hover">view all</a>
          </div>
          <div className="card bg-white shadow-xl my-2 px-3 rounded-lg">
            <div className="p-2 w-full flex justify-between">
              <div>
                <h2 className="card-title  text-xs">Title!</h2>
                <p className=" text-xs">Date.</p>
              </div>
              <div>
                <h2 className="card-title  text-xs">+</h2>
                <h2 className="card-title text-xs">$69,420</h2>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-xl my-2 px-3 rounded-lg">
            <div className="p-2 w-full flex justify-between">
              <div>
                <h2 className="card-title  text-xs">Title!</h2>
                <p className=" text-xs">Date.</p>
              </div>
              <div>
                <h2 className="card-title  text-xs">+</h2>
                <h2 className="card-title text-xs">$69,420</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
