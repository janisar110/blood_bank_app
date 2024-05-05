import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import CMHeader from "../Headers/CMHeader";
import CMFooter from "../Footers/CMFooter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../store/Slices/adminAuth/adminLoginSlice";
import { Toast } from "../../utils/Toast";

const CMLogin = ({ title, dispatchFunction , selector }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      //All fields are required error handle
      if (!email || !password) {
        return Toast("error", "All fields are required");
      }

      const userData = {
        email,
        password,
      };
      console.log(userData)

      dispatch(dispatchFunction(userData)).then((results)=>{
        console.log(results)
        console.log(results.type)
        if(results.type ==  `${title}/fetch/fulfilled`){
         return navigate(`/${title}/dashboard`);
        }
      
      })
    } catch (error) {
      console.log(`Error in ${title} login handleSubmit`, error.message);
      Toast("error", error.message);
    }
  };

  return (
    <>
      <div className=" p-10 col-span-12 lg:col-span-6 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            to={`/${title}/login`}
            className="mt-10 flex justify-center text-center text-3xl font-bold leading-9 tracking-tight text-gray-700 font-mono"
          >
            {`${title} login here`}
          </Link>
        </div>
        <form
          className="mt-10 space-y-6 max-w-[400px] mx-auto"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="">
            <label className="input input-bordered  flex items-center gap-2 ">
              <span>
                <MdEmail />
              </span>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="">
            <label className="input input-bordered  flex items-center gap-2">
              <span>
                <FaKey />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="flex min-w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 "
            >
              {selector.isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "login"
              )}
            </button>
          </div>
        </form>

        <div className="mt-5 text-center sm:text-lg text-sm ">

          {
            title === "admin" ? "Registrations protected" :  <Link
            to={`/${title}/registration`}
            className="font-bold text-gray-600 hover:text-gray-700"
          >
            Don't have an account?
          </Link>
          }
         
        </div>
      </div>
    </>
  );
};

export default CMLogin;
