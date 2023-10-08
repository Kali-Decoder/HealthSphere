import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
const Dashboard = () => {
  const {loggedUserData}  = useDataContext();
  const [image, setImage] = useState(loggedUserData?.imageUrl);
  return (
    <>
      <main className="p-6 sm:p-10 space-y-6 container mx-auto">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h2 className="text-blue-500 uppercase font-bold">Health-Sphere</h2>
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          </div>
         
        </div>
        <div className="grid grid-cols-2 gap-0">
          <div className="profile-pic ">
            {image ? <img src={`../uploads/${image}`} className="border shadow-2xl  " width="400" alt="profile pic" />: <img src="http://i.pravatar.cc/500?img=7" className="border shadow-2xl  " width="400" alt="profile pic" />}
          </div>

          <div>
            <section className="grid grid-cols-2 gap-1 mt-5">
              <div className="flex items-center p-8 bg-white rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{loggedUserData?.fname}</span>
                  <span className="block text-gray-500">First Name</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{loggedUserData?.lname}</span>
                  <span className="block text-gray-500">Last Name</span>
                </div>
              </div>
            </section>
            <div className="flex items-center p-8 bg-white  rounded-lg mt-2">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">
                 {loggedUserData?.email}
                </span>
                <span className="block text-gray-500">Email</span>
              </div>
            </div>
            <div className=" flex justify-end">
            <button className="inline-flex mt-8 px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <Link to="/edit-profile">Edit Profile</Link>
          
            </button>
            <button className="inline-flex mt-8 px-5 py-3 text-white bg-violet-600 hover:bg-violet-700 focus:bg-violet-700 rounded-md ml-6 mb-3">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            
            <Link to="/get-abha">Get ABHA Card</Link>
          
            </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
