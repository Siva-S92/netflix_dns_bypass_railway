import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/movieSlice";

function Header() {
  const user = useSelector((store)=> store.users.user);
  const toggle = useSelector((store)=> store.movies.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async()=> {
    try {
      const res = await axios.get(`${API_ENDPOINT}/logout`);
      if (res.data.message){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const toggleHandler = () => {
    dispatch(setToggle());
    
  }

  return (
    <div className="container fixed z-10 w-[100%] px-2 flex justify-between items-center bg-gradient-to-b from-black bg-opacity-50">
      <img
        className="w-32 lg:w-56"
        src="/images/Netflix_logo.svg.png"
        alt="netflix-logo"
      />
      { user && (
        <div className="flex justify-center items-center">
        <IoIosArrowDropdown size="24px" className="text-white"/>
        <h1 className="text-xs lg:text-lg font-medium text-white shrink-0">{user.fullname}</h1>

        <button onClick={logoutHandler} type="button" className="bg-red-800 text-xs lg:text-lg text-white px-4 py-1 ml-2">
          logout
        </button>
        <button onClick={toggleHandler} type="button" className="bg-red-800 text-xs lg:text-lg text-white px-4 py-1 ml-2">
          { !toggle ? "SearchMovie" : "Home"}
        </button>
      </div>
      )}
    </div>
  );
}

export default Header;
