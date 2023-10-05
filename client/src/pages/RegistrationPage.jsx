import React, { useState } from "react";
import axiosInstance from "../utils/axiosRequest";
import { toast } from "react-toastify";
const RegistrationPage = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const registerUser = async (event) => {
    event.preventDefault();
    const endpoint = "api/register";
    const requestData = data;
    const id = toast.loading("Registering...");
    try {
      let response = await axiosInstance.post(endpoint, requestData);
      if (response.status === 201) {
        toast.update(id, {
          render: "Registration Successful",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        return;
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.update(id, {
          render: "User with this email already exists",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        return;
      } else {
        toast.update(id, {
          render: "Internal server error",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        return;
      }
    }
  };
  return (
    <>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "2rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Register for a free account
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      for="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="fname"
                      type="text"
                      name="fname"
                      onChange={handleInputChange}
                      value={data.fname}
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      for="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="last_name"
                      type="text"
                      name="lname"
                      value={data.lname}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    placeholder="Your secure password"
                  />
                  <p className="text-grey text-xs mt-1">
                    At least 6 characters
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="password"
                    type="password"
                    name="cpassword"
                    value={data.cpassword}
                    onChange={handleInputChange}
                    placeholder="Your secure password"
                  />
                  <p className="text-grey text-xs mt-1">
                    At least 6 characters
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={registerUser}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center my-4">
              <a
                href="#"
                className="text-grey-dark text-sm no-underline hover:text-grey-darker"
              >
                I already have an account
              </a>
            </p>
          </div>
        </div>

        <footer className="w-full bg-grey-lighter py-8">
          <div className="container mx-auto text-center px-8">
            <p className="text-grey-dark mb-2 text-sm">
              This is a product of{" "}
              <span className="font-bold">Health-Sphere</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RegistrationPage;
