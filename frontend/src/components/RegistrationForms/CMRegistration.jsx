import React, { useState } from "react";
import { FaKey, FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toast } from "../../utils/Toast";

const CMRegistration = ({ title, dispatchFunction, selector }) => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const [fullname, setFullname] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [email, setEmail] = useState("");
  const [blood_group, setblood_group] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleSubmit = async (e) => {
         // console.log( selector.isLoading)
    try {
      e.preventDefault();
      //All fields are required error handle
      console.log(fullname , phone_no , email , blood_group , password , confirmPassword)
      if (!fullname || !phone_no || !email || !blood_group  || !password || !confirmPassword) {
        return Toast("error", "All fields are required");
      }
      //Confirm password error handle
      if (password !== confirmPassword) {
        return Toast("error", "Password and confirm password does not match");
      }

      //password at least 8 character
      if (!(password.length >= 8)) {
        return Toast("error", "Password must contain 8 character");
      }

      //select blood group 
      if(blood_group == "Select Blood Group"){
        return Toast("error", "Please select your blood type")
      }

      const userData = {
        fullname,
        phone_no,
        email,
        blood_group,
        password,
        confirmPassword,
      };

      dispatch(dispatchFunction(userData)).then((results)=>{
        console.log(results)
       if(results.type == `${title}/registration/fulfilled`){
        return navigate(`/${title}/login`)
       }
      });

    } catch (error) {
      console.log(`Error in ${title} registration handleSubmit`, error.message);
      Toast("error", error.message);
    }
  };

  return (
    <>
      <div className=" p-5 col-span-12 lg:col-span-6 rounded-xl ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            to={`/${title}/registration`}
            className="mt-10 flex justify-center text-center text-3xl font-bold leading-9 tracking-tight text-gray-700 font-mono"
          >
            {` ${title} register here`}
          </Link>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 max-w-[400px] mx-auto"
              method="POST"
            >
              <div className="">
                <label className="input input-bordered  min-w-72 flex items-center gap-2">
                  <span>
                    <FaUserTie />
                  </span>
                  <input
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="fullname"
                  />
                </label>
              </div>
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
                <label className="input input-bordered  flex items-center gap-2 ">
                  <span>
                    
                    <FaPhoneAlt />
                  </span>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Phone no"
                      value={phone_no}
                      onChange={(e) => setphone_no(e.target.value)}
                  />
                </label>
              </div>
              <div className="">
                <select value={blood_group} onChange={(e)=> setblood_group(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5">
                  <option value="Select Blood Group">Select Blood Group</option>
                  {bloodGroups.map((bloodGroup, index) => (
                    <option key={index} value={bloodGroup}>
                      {bloodGroup}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label className="input input-bordered min-w-72 flex items-center gap-2">
                  <span>
                    <FaKey />
                  </span>
                  <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="grow"
                  />
                </label>
              </div>
              <div className="">
                <label className="input input-bordered min-w-72 flex items-center gap-2">
                  <span>
                    <FaKey />
                  </span>
                  <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm password"
                    className="grow"
                  />
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={false}
                  className="flex min-w-full  justify-center rounded-md bg-red-500 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 "
                >
                  {selector.isLoading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-5 text-center sm:text-lg text-sm ">
              <Link
                to={`/${title}/login`}
                className="font-bold text-gray-600 hover:text-gray-700"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CMRegistration;
