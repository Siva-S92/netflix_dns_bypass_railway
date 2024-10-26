import React, { useState } from "react";
import Header from "../components/Header";
import netflixBackgroundImg from "/images/netflix-background.jpg";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setUser } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((store)=> store.users.isLoading)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    if (isLogin) {
      // go to login api call
      try {
        const formData = { email, password };
        const response = await axios.post(`${API_ENDPOINT}/login`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (response.data.success) {
          toast.success(`welcome ${response.data.user.fullname}, You ${response.data.message}`, {duration: 2000});
          dispatch(setUser(response.data.user))
          navigate("/browse-contents")
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setIsLoading(false))
      }
    } else {
      // go to register api call
      try {
        const formData = { fullname, email, password };
        const response = await axios.post(`${API_ENDPOINT}/register`, formData);
        if (response.data.success) {
          toast.success(response.data.message, {duration: 3000});
          setIsLogin(true)
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setIsLoading(false))
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Header />
      <div className="absolute top-0">
        <img
          className="w-screen h-screen object-cover"
          src={netflixBackgroundImg}
          alt="netflix background image"
        />
      </div>
      <div className="w-[100%] h-[100%] flex justify-center items-center text-white">
        <form
          onSubmit={handleSubmit}
          className="sm:w-[100%] md:w-[25%] px-5 pt-4 pb-12 bg-[black] rounded-md opacity-90 absolute top-52"
        >
          <h1 className="text-3xl text-center font-semibold pb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          {!isLogin && (
            <div className="flex flex-col w-full pb-2">
              <label htmlFor="name">Enter your FullName:</label>
              <input
                className="border border-gray-500 hover:border-[#e35d5d] rounded py-1 px-2 bg-gray-700"
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                placeholder="Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}
          <div className="flex flex-col w-full pb-2">
            <label htmlFor="email">Enter your Email:</label>
            <input
              className="border border-gray-500 hover:border-[#e35d5d] rounded py-1 px-2 bg-gray-700"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full pb-2">
            <label htmlFor="password">Enter your Password:</label>
            <input
              className="border border-gray-500 hover:border-[#e35d5d] rounded py-1 px-2 bg-gray-700"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-red-600 px-3 rounded w-full my-3 py-1"
            type="submit"
          >
            {`${isLoading ? "loading...." : (isLogin ? "Login" : "Sign Up")}`}
          </button>

          <p>
            {isLogin ? "are you new to netflix?" : "already have an account?"}{" "}
            <span
              onClick={clickHandler}
              className="ml-5 text-[blue] underline underline-offset-1 font-bold p-1 cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
