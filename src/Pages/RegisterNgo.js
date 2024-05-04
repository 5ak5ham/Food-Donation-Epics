import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Base from "../Components/Base";
import { signup } from "../Services/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterNgo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    registeredAddress: "",
    chairman: "",
    email: "",
    mobileNo: "",
    treasurer: "",
    websiteUrl: "",
    registrationDate: null,
    state: "",
    village: "",
    password: "",
    memberNames: [],
    authSignatory: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (error.isError) {
      console.log("Invalid form data");
      return;
    }

    const formattedDate = formData.registrationDate
      ? formData.registrationDate.toLocaleDateString("en-GB")
      : "";

    const membersToSend = formData.memberNames
      .slice(0, 4)
      .map((name) => name || "");

    const formattedData = {
      ...formData,
      member1: membersToSend[0] || "",
      member2: membersToSend[1] || "",
      member3: membersToSend[2] || "",
      member4: membersToSend[3] || "",
      registrationDate: formattedDate,
    };

    delete formattedData.memberNames;
    delete formattedData.numberOfMembers;

    // Implement form submission logic here, e.g., send data to a server
    console.log(formattedData);

    signup(formattedData)
      .then((resp) => {
        console.log(resp);
        console.log("success log");

        toast.success("Please activate your account through your mail", {
          position: "bottom-center",
          className: "toast-message",
        });

        setFormData({
          name: "",
          registeredAddress: "",
          block: "",
          district: "",
          chairman: "",
          email: "",
          mobileNo: "",
          secretory: "",
          treasurer: "",
          websiteUrl: "",
          state: "",
          village: "",
          password: "",
          memberNames: [],
          registrationDate: null,
          authSignatory: "",
        });

        navigate("/verification", { state: { email: formattedData.email } });
      })
      .catch((error) => {
        console.log(error);
        toast.error("There is some error in registering");
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    // <div>
    //   <Base />
    //   <form className="registration-form" onSubmit={handleSubmit}>
    //     <p className="req">*</p>
    //     <label htmlFor="name">Name Of NGO :</label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="email">Email :</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="mobileNo">Mobile Number :</label>
    //     <input
    //       type="text"
    //       id="mobileNo"
    //       name="mobileNo"
    //       value={formData.mobileNo}
    //       onChange={handleChange}
    //       required
    //     />

    //     <p className="note">
    //       Password length should range from 8-15 characters
    //     </p>
    //     <p className="note">
    //       Password should contain atleast 1 uppercase letter
    //     </p>
    //     <p className="note">
    //       Password should contain atleast 1 special character
    //     </p>
    //     <p className="note">Password should contain atleast 1 digit</p>
    //     <label htmlFor="password">Password :</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={formData.password}
    //       onChange={handleChange}
    //       required
    //     />

    //     <p className="req">*</p>
    //     <label htmlFor="registeredAddress">Registered Address :</label>
    //     <input
    //       type="text"
    //       id="registeredAddress"
    //       name="registeredAddress"
    //       value={formData.registeredAddress}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="chairman">Name of Chairman :</label>
    //     <input
    //       type="text"
    //       id="chairman"
    //       name="chairman"
    //       value={formData.chairman}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="secretory">Name of Secretory :</label>
    //     <input
    //       type="text"
    //       id="secretory"
    //       name="secretory"
    //       value={formData.secretory}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="treasurer">Name of Treasurer :</label>
    //     <input
    //       type="text"
    //       id="treasurer"
    //       name="treasurer"
    //       value={formData.treasurer}
    //       onChange={handleChange}
    //       required
    //     />
    //     <p className="req">*</p>
    //     <label htmlFor="authSignatory">Name of Authory Signatory :</label>
    //     <input
    //       type="text"
    //       id="authSignatory"
    //       name="authSignatory"
    //       value={formData.authSignatory}
    //       onChange={handleChange}
    //       required
    //     />

    //     <label htmlFor="numberOfMembers">Number of Members (1-4) :</label>
    //     <input
    //       type="number"
    //       id="numberOfMembers"
    //       name="numberOfMembers"
    //       min="1"
    //       max="4"
    //       value={formData.numberOfMembers}
    //       onChange={handleChange}
    //     />

    //     <p className="req">*</p>
    //     <div className="row">
    //       <label htmlFor="state">State :</label>
    //       <select
    //         id="state"
    //         name="state"
    //         value={formData.state}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="">Select State</option>
    //         {statesData.map((state) => (
    //           <option key={state.state} value={state.state}>
    //             {state.state}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     <p className="req">*</p>
    //     <label htmlFor="block">Block :</label>
    //     <input
    //       type="text"
    //       id="block"
    //       name="block"
    //       value={formData.block}
    //       onChange={handleChange}
    //     />

    //     <label htmlFor="village">Village :</label>
    //     <input
    //       type="text"
    //       id="village"
    //       name="village"
    //       value={formData.village}
    //       onChange={handleChange}
    //     />

    //     <label htmlFor="websiteUrl">URL of Website :</label>
    //     <input
    //       type="text"
    //       id="websiteUrl"
    //       name="websiteUrl"
    //       value={formData.websiteUrl}
    //       onChange={handleChange}
    //     />=

    //     <button type="submit">Register NGO</button>
    //   </form>
    // </div>
    <>
      <Base />
      <div className=" min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-200">
        <div className="bg-transparent shadow-2xl rounded-lg px-12 pt-8 pb-10 mb-4 w-full max-w-lg">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-center text-3xl font-semibold text-gray-700">
              NGO Registration
            </h2>
          </div>
          <form>
            <div className="mb-6 flex">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-3"
                  htmlFor="ngoName"
                >
                  Name of NGO
                </label>
                <input
                  type="text"
                  id="ngoName"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter NGO's name"
                />
              </div>
              <div className="w-1/2 pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-3"
                  htmlFor="chairmanName"
                >
                  Name of Chairman
                </label>
                <input
                  type="text"
                  id="chairmanName"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter chairman's name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email address"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="address"
              >
                Registered Address
              </label>
              <textarea
                id="address"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter registered address"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm your password"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-3"
                htmlFor="verification"
              >
                Verification (Attach File)
              </label>
              <input
                type="file"
                id="verification"
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
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

export default RegisterNgo;
