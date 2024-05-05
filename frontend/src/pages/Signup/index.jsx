// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { MdEmail } from "react-icons/md";
// import { FaKey, FaUserTie } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import leftArrow from "../../assets/left-arrow.png";
// import grocery from "../../assets/grocery.gif";
// import { Toast } from "../../utils/Toast";
// import { useDispatch, useSelector } from "react-redux";
// import {userSignup} from "../../store/Slices/auth/signupSlice"
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../../constant";
// import axios from "axios";



// const Signup = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();


//   const dispatch = useDispatch();
//   const { isLoading , error } = useSelector((state) => state.signupReducer);
  
//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       // console.log(fullName, email, password, confirmPassword);
//       //All fields are required error handle
//       if (!fullName || !email || !password || !confirmPassword) {
//         return Toast("error", "All fields are required");
//       }
//       //Confirm password error handle
//       if (password !== confirmPassword) {
//         return Toast("error", "Password and confirm password does not match");
//       }

//       //password at least 8 character
//       if (!(password.length >= 8)) {
//         return Toast("error", "Password must contain 8 character");
//       }

//       const userData = {
//         fullName,
//         email,
//         password,
//         confirmPassword,
//       };

//       dispatch(userSignup(userData)).then((results)=>{
//         console.log(results)
//        if(results.type == "user/signup/fulfilled"){
//         return navigate("/otp", {
//           state: {
//             email,
//             fullName
//           },
//         });
//        }
//       });

//     } catch (error) {
//       console.log("Error in Signup handleSubmit", error.message);
//       Toast("error", error.message);
//     }
//   };

//  const  handleContinuewithgooglebtn = async ()=>{
//   try {
//         window.open(`${BASE_URL}/auth/google/callback`,"_self") ;
//   } catch (error) {
//     console.log("Error in handleContinuewithgooglebtn signup ", error.message);
//       Toast("error", error.message);
//   }
//  }

//   return (
//     <>
//       <div className="max-w-[1000px] mx-auto min-h-screen place-content-center">
//         <div className="grid grid-cols-12 bg-white border  shadow-lg rounded-xl">
//           <div className=" p-10 col-span-12 lg:col-span-6 rounded-xl ">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//               <Link
//                 to="/login"
//                 className="mt-10 flex justify-center text-center text-3xl font-bold leading-9 tracking-tight text-gray-700 font-mono"
//               >
//                 Signup here
//               </Link>

//               <button
//                 type="submit"
//                 className="mt-10 flex gap-2 items-center text-lg border rounded-full px-5 py-2 mx-auto"
//                 onClick={handleContinuewithgooglebtn}
//               >
//                 <span className="text-2xl">
//                   {" "}
//                   <FcGoogle />
//                 </span>
//                 Continue with google
//               </button>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//               <form
//                 onSubmit={handleSubmit}
//                 className="mt-10 space-y-6 max-w-[400px] mx-auto"
//                 action="#"
//                 method="POST"
//               >
//                 <div className="">
//                   <label className="input input-bordered  min-w-72 flex items-center gap-2">
//                     <span>
//                       <FaUserTie />
//                     </span>
//                     <input
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       type="text"
//                       className="grow"
//                       placeholder="Fullname"
//                     />
//                   </label>
//                 </div>
//                 <div className="">
//                   <label className="input input-bordered  flex items-center gap-2 ">
//                     <span>
//                       <MdEmail />
//                     </span>
//                     <input
//                       type="email"
//                       className="grow"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </label>
//                 </div>
//                 <div className="">
//                   <label className="input input-bordered min-w-72 flex items-center gap-2">
//                     <span>
//                       <FaKey />
//                     </span>
//                     <input
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       type="password"
//                       placeholder="Password"
//                       className="grow"
//                     />
//                   </label>
//                 </div>
//                 <div className="">
//                   <label className="input input-bordered min-w-72 flex items-center gap-2">
//                     <span>
//                       <FaKey />
//                     </span>
//                     <input
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       type="password"
//                       placeholder="Confirm password"
//                       className="grow"
//                     />
//                   </label>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="flex min-w-full  justify-center rounded-md bg-green-500 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-green-600 "
//                   >
//                     {isLoading ? (
//                    <span className="loading loading-dots loading-md"></span>
//                     ) : (
//                       "Signup"
//                     )}
//                   </button>
//                 </div>
//               </form>

//               <div className="mt-5 text-center sm:text-lg text-sm ">
//                 <Link
//                   to="/login"
//                   className="font-bold text-gray-600 hover:text-gray-700"
//                 >
//                   Already have an account?
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className=" hidden  lg:block p-10 col-span-12 lg:col-span-6 place-content-center">
//             <div className="font-extrabold text-gray-600 text-2xl text-center">
//               Wellcome to{" "}
//               <span className="text-green-600 text-3xl">Janisar's shop</span>
//             </div>
//             <div className="flex justify-center">
//               <img src={grocery} alt="Cart gif " width={200} height={200} />
//             </div>
//             <div className="image-container rounded-full mx-auto w-max border border-green-600 animate-bounce translate-x-1 px-32">
//               <img src={leftArrow} width={50} height={50} className="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
