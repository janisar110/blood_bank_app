import React from "react";
import donation from "../../assets/icons/donation.png"
import pull from "../../assets/icons/pull.png"
import write from "../../assets/icons/write.png"
import box from "../../assets/icons/box.png"
import man from "../../assets/Images/man.png"
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CMAdminSidebar = ({name , }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-max bg-red-500 ">
          {/* Sidebar content */}
          <div className="px-10 py-5 ">
            <div className="flex justify-center py-5">
              <img src={man} alt="avatar" width={200} />
            </div>
            <div className="py-5">
              <h1 className="text-2xl font-mono font-bold text-white text-center">
                {name}
              </h1>
            </div>
            <div className="py-5">
              <div className="py-3 text-white bg-red-600 hover:bg-red-700 rounded-md flex px-2 gap-2 my-5 ">
                <img
                  src={donation}
                  width={30}
                  className="rounded-full outline outline-1"
                  height={30}
                  alt="donationicon"
                />
                <h1 className="text-xl font-bold font-mono text-center">
                  Donors
                </h1>
              </div>

              <div className="py-3 text-white bg-red-600 hover:bg-red-700 rounded-md flex px-2 gap-2 my-5 ">
                <img
                  src={pull}
                  width={30}
                  className="rounded-full outline outline-1"
                  height={30}
                  alt="donationicon"
                />
                <h1 className="text-xl font-bold font-mono text-center">
                  Patients
                </h1>
              </div>

              <div className="py-3 text-white bg-red-600 hover:bg-red-700 rounded-md flex px-2 gap-2 my-5 ">
                <img
                  src={box}
                  width={30}
                  className="rounded-full outline outline-1"
                  height={30}
                  alt="donationicon"
                />
                <h1 className="text-xl font-bold font-mono text-center">
                  Donations requests
                </h1>
              </div>


              <div className="py-3 text-white bg-red-600 hover:bg-red-700 rounded-md flex px-2 gap-2 my-5 ">
                <img
                  src={write}
                  width={30}
                  className="rounded-full outline outline-1"
                  height={30}
                  alt="donationicon"
                />
                <h1 className="text-xl font-bold font-mono text-center">
                  Blood Need requests
                </h1>
              </div>
              
            </div>
            <div className=" bottom-0 fixed my-10 mx-auto items-center">
              <div className="flex bg-red-600 py-2 px-5 rounded-lg">
                <span className="flex gap-1 text-center text-3xl font-bold font-mono text-white">
                  <RiLogoutBoxLine />
                </span>
                <Link to="/" className=" text-center text-xl font-bold font-mono text-white">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CMAdminSidebar;
