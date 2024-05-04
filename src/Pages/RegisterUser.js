import React from "react";
import Base from "../Components/Base";

import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

function RegisterUser() {
  return (
    <>
      <Base />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-200">
        <div className="bg-transparent shadow-2xl rounded-lg px-12 pt-8 pb-10 mb-4 w-full max-w-lg">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-center text-3xl font-semibold text-gray-700">
              Create Account
            </h2>
          </div>
          <form>
            <div className="mb-6 flex justify-between items-center w-full">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-6">
              <label
                className="block  text-gray-700 text-lg font-bold mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block  text-gray-700 text-lg font-bold mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-3 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block  text-gray-700 text-lg font-bold mb-3"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="password"
                  id="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-3 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-grey-700 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegisterUser;
