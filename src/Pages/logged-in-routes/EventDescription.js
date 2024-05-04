import React from "react";
import Base from "../../Components/Base";

function EventDescription() {
  return (
    <>
      <Base />
      <div className="bg-yellow-100 p-6 min-h-screen">
        <div className="bg-transparent shadow-2xl rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center">
            {/* <img
              className="h-48 w-48 rounded-full mr-4"
              src="defaultUser.png"
              alt=""
            /> */}
            <div>
              <h2 className="text-2xl font-semibold">EVENT NAME</h2>
              <p className="text-sm text-gray-500">Organizer</p>
              <p className="text-sm text-gray-500">City</p>
              {/* <div className="flex mt-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600 ml-2">8.6</span>
              </div> */}
            </div>
          </div>
          <div className="flex mt-4 md:mt-0">
            <button className="bg-red-500 hover:bg-red-800 text-black font-bold py-2 px-4 rounded-r">
              Report Event
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
                <strong>Address:</strong> 525 6th Street, New York, NY 10011
              </p>
              <p>
                <strong>Email:</strong> hello@jeremyrose.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Additional Information</h3>
              <p>
                <strong>Date:</strong> June 5, 1992
              </p>
              <p>
                <strong>Time:</strong> 10:00 AM
              </p>
            </div>
            <div>
              <button className="ml-[1150px] bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-l">
                Volunteer
              </button>
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

export default EventDescription;
