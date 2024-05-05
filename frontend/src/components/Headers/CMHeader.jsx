import React from "react";
import bloodpng from "../../assets/Images/blood.png";
import { Link } from "react-router-dom";

const CMHeader = () => {
  return (
    <>
      <div className="bg-red-500 text-white px-4 py-2 items-center ">
        <div className="flex justify-between ">
          <div className="flex gap-1 items-center ">
            <img src={bloodpng} alt="logo" width={100} height={100} />
            <h1 className="text-2xl font-mono font-bold">
              Jm Blood bank
            </h1>
          </div>
          <div className='flex '>
            <ul className="flex justify-center items-center font-semibold gap-1">
              <li>
                <Link
                  to="/"
                  className=" rounded-md px-5 py-2  bg-red-600 hover:bg-red-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="  rounded-md px-5 py-2  bg-red-600 hover:bg-red-700"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  to="/donor/login"
                  className="  rounded-md px-5 py-2  bg-red-600 hover:bg-red-700"
                >
                  Donor
                </Link>
              </li>
              <li>
                <Link
                  to="/patient/login"
                  className="rounded-md px-5 py-2  bg-red-600 hover:bg-red-700"
                >
                  Patient
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-slate-200"> </div>
        </div>
      </div>
    </>
  );
};

export default CMHeader;
