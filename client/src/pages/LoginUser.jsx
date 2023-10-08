import React, { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import axiosInstance from "../utils/axiosRequest";
import {useNavigate} from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
const LoginUser = () => {
  const {getUserData} = useDataContext();
    const history = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const loginUser = async (event) => {
    event.preventDefault();
    if (!data.password || !data.email) {
      toast.error("Incomplete Details Provided");
      return;
    }
    const id = toast.loading("Logging in...");
    try {
      const endpoint = "api/login";
      const requestData = data;
      let response = await axiosInstance.post(endpoint, requestData);
      if (response.status === 200) {
        toast.update(id, {
          render: "Login Successful",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        await getUserData(requestData.email);
        history("/dashboard");
        return;
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.update(id, {
          render: "User not found",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        history("/register");
        return;
      } else if (error.response.status === 401) {
        toast.update(id, {
          render: "Invalid password",
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
  }
  return (
    <>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "2rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Login
              </div>
              <div className="py-4 px-8">
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
                 
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={loginUser}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center my-4">
              <Link
                to="/"
                className="text-grey-dark text-sm no-underline hover:text-grey-darker"
              >
                Sign-up for an account
              </Link>
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default LoginUser;
