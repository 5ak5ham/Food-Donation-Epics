import React from "react";
import { FaStar } from "react-icons/fa";
import { GrFormEdit } from "react-icons/gr";
// Using react-icons for star ratings
import Base from "../../Components/Base";
import { Link } from "react-router-dom";
import { getCurrentUserDetail } from "../../Services/auth";
import { useState, useEffect } from "react";

function NgoDashboard() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(getCurrentUserDetail());
  });

  return (
    <>
      <Base />
      {/* <HomeBase /> */}
      <div className="bg-yellow-100 p-6 min-h-screen">
        <div className="bg-transparent shadow-2xl rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold">NGO NAME</h2>
              {/* <p className="text-sm text-gray-500">Product Designer</p>
              <p className="text-sm text-gray-500">New York, NY</p> */}
              <div className="flex mt-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600 ml-2">8.6</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4 md:mt-0">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-l">
              <Link to="/ngo/rate">Rate NGO</Link>
            </button>
            <button className="bg-red-500 hover:bg-red-800 text-black font-bold py-2 px-4 rounded-r">
              <Link to="/ngo/report">Report NGO</Link>
            </button>
          </div>
        </div>
        <div className="bg-transparent shadow-2xl rounded-lg p-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg">NGO Contact Information</h3>
              <p>
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p>
                <strong>Name of Chairman:</strong> Saksham Agrawal
              </p>
              <p>
                <strong>Address:</strong> 525 6th Street, New York, NY 10011
              </p>
              <p>
                <strong>Email:</strong> hello@jeremyrose.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-[10px]">
                Additional Information
              </h3>
              <p>
                <strong>JOINED ON:</strong> June 5th, 1992
              </p>
            </div>
            <div className="ml-[90vw] mt-0">
              <Link to="/ngo/edit">
                <GrFormEdit className="h-[60px] w-[30px]" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="font-semibold text-lg">Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Spotify New York</strong>
          </p>
          <p>120 William Street, New York, NY 10038</p>
        </div>
        <div>
          <p>
            <strong>Metropolitan Museum</strong>
          </p>
          <p>525 6th Street, New York, NY 10011</p>
        </div>
      </div>
    </div> */}
      </div>
    </>
  );
}

export default NgoDashboard;
