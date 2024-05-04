import React from "react";

function Hello() {
  return (
    <div className="flex items-center">
      <div className="w-24 h-24 rounded-full border-2 border-blue-500 mr-8">
        User DashBoard
      </div>
      <div>
        <img className="" src="bg4.png" alt="" />
        <h2 className="text-lg font-semibold mb-1">Name</h2>
        <p className="text-gray-600 mb-2">Phone Number</p>
        <p className="text-gray-600 mb-6">Address</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          button
        </button>
      </div>
    </div>
  );
}

export default Hello;
