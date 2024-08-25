import React, { useContext, useState } from "react";
import './Login.css'; // Add this line to include the new CSS
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await fetch(SummaryApi.signin.url, {
        method: SummaryApi.signin.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!dataResponse.ok) {
        throw new Error("Failed to login");
      }

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        dispatch(setUserDetails(dataApi.user)); // Assuming dataApi.user contains profilePic
        navigate("/");
        fetchUserDetails();
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login");
    }
  };

  return (
    <div id="login"className="container" onClick={() => {}}>
      <div id="login"className="top"></div>
      <div id="login"className="bottom"></div>
      <div id="login"className="center">
        <h2>Please Sign In</h2>
        <form id="login"onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={data.password}
            name="password"
            onChange={handleOnChange}
          />
          <div
            className="cursor-pointer text-xl"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </div>
          {/* <Link to={"/forgot-password"} className="hover:underline hover:text-red-600">
            Forgot password?
          </Link> */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full mt-4">
            Login
          </button>
        </form>
        <p id="login" className="my-5">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="text-red-600 hover:text-red-700 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
