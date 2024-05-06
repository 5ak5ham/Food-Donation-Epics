import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
} from "../../Services/auth";
import { BsBellFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const handleDropdown = () => {
    const dropdown = document.getElementById("login-register-dropdown");
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
      dropdown.classList.add("block");
    } else {
      dropdown.classList.add("hidden");
      dropdown.classList.remove("block");
    }
  };

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      toast.success("Logged Out", {
        position: "bottom-center",
        className: "toast-message",
      });
      navigate("/");
    });
  };

  return (
    <nav className="bg-orange-300 flex justify-between items-center py-2 px-8 text-gray-700 shadow-lg">
      <div className="flex items-center">
        <ul className="flex list-none pl-10 pr-10 font-bold">
          {!login && (
            <>
              <li className="mr-6">
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <a
                  href="https://dashboard.tribal.gov.in/ngo.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </>
          )}
          {login && (
            <>
              <div className="relative inline-block">
                <li
                  onClick={handleDropdown}
                  className="font-bold text-black hover:text-orange-500 transition-colors duration-200"
                >
                  <Link to="/" className="no-underline mr-[10px]">
                    Home
                  </Link>
                </li>
                <div
                  id="login-register-dropdown"
                  className="absolute z-10 hidden bg-orange-300 rounded-md shadow-md"
                >
                  <a
                    href="#login"
                    className="block px-4  text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
                  >
                    Bank details
                  </a>
                  <a
                    href="#login"
                    className="block px-4  text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
                  >
                    Update Bank details
                  </a>
                  <a
                    href="#login"
                    className="block px-4  text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
                  >
                    View
                  </a>
                  <Link
                    to="/ngo/application"
                    className="block px-4  text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
                  >
                    Application Form
                  </Link>
                </div>
              </div>
              <a
                className="ml-2 text-black font-bold mr-[20px] hover:text-orange-500 transition-colors duration-200"
                href="https://dashboard.tribal.gov.in/ngo.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Dashboard
              </a>
              <li className="font-bold hover:text-orange-500 mr-[20px] transition-colors duration-200">
                <Link
                  className="text-black  hover:text-orange-500 no-underline"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="font-bold hover:text-orange-500 transition-colors duration-200">
                <Link
                  className="text-black no-underline hover:text-orange-500"
                  to="/event/maps"
                >
                  Events
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="flex items-center">
        {login && (
          <>
            <button>
              <BsBellFill className=" text-black hover:text-orange-500 transition-colors duration-200 mr-[30px]" />
            </button>

            <button
              onClick={logout}
              className="font-bold text-black hover:text-orange-500 transition-colors duration-200"
            >
              Logout
            </button>
            <h3 className="font-bold pl-4 text-black hover:text-orange-500">
              {user?.role === 2 ? (
                <Link className="mr-[50px]" to="/user/dashboard">
                  Welcome, {user ? user.username : "User"}
                </Link>
              ) : (
                <Link className="mr-[50px]" to="/ngo/dashboard">
                  Welcome, {user ? user.organization.organization_name : "User"}
                </Link>
              )}
              {/* Welcome, {user ? user.name : "User"} */}
            </h3>
          </>
        )}
        {!login && (
          <div className="relative inline-block">
            <button
              onClick={handleDropdown}
              className="font-bold hover:text-orange-500 mr-8 transition-colors duration-200"
            >
              Login / Register
            </button>
            <div
              id="login-register-dropdown"
              className="absolute z-10 hidden bg-orange-300 rounded-md shadow-md"
            >
              <Link
                className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
                to="/userLogin"
              >
                FOR USER
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400 transition-colors duration-200"
              >
                FOR NGO
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   doLogout,
//   getCurrentUserDetail,
//   isLoggedIn,
// } from "../../Services/auth";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleDropdown = () => {
//     const dropdown = document.getElementById("login-register-dropdown");
//     if (dropdown.classList.contains("hidden")) {
//       dropdown.classList.remove("hidden");
//       dropdown.classList.add("block");
//     } else {
//       dropdown.classList.add("hidden");
//       dropdown.classList.remove("block");
//     }
//   };

//   const [login, setLogin] = useState(false);
//   const [user, setUser] = useState(undefined);

//   useEffect(() => {
//     setLogin(isLoggedIn());
//     setUser(getCurrentUserDetail());
//   }, [login]);

//   const logout = () => {
//     doLogout(() => {
//       setLogin(false);
//       toast.success("Logged Out", {
//         position: "bottom-center",
//         className: "toast-message",
//       });
//       navigate("/");
//     });
//   };

//   return (
//     <nav className="bg-orange-300 flex justify-between items-center p-2 text-black">
//       <div className="flex items-center">
//         <ul className="flex list-none pl-44 pr-44">
//           {!login && (
//             <>
//               <li className="mr-4">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="mr-4">
//                 <a
//                   href="https://dashboard.tribal.gov.in/ngo.aspx"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Dashboard
//                 </a>
//               </li>
//               <li className="font-bold">
//                 <Link to="/about">About </Link>
//               </li>
//             </>
//           )}
//           {login && (
//             <>
//               <div className="relative inline-block">
//                 <button
//                   onClick={handleDropdown}
//                   className="font-bold hover:text-black"
//                 >
//                   <Link to="/" className="text-black no-underline">
//                     Home
//                   </Link>
//                 </button>
//                 <div
//                   id="login-register-dropdown"
//                   className="absolute z-10 hidden bg-orange-300 rounded-md shadow-lg"
//                 >
//                   <a
//                     href="#login"
//                     className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//                   >
//                     Bank details
//                   </a>
//                   <a
//                     href="#login"
//                     className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//                   >
//                     Update Bank details
//                   </a>
//                   <a
//                     href="#login"
//                     className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//                   >
//                     View
//                   </a>
//                   <Link
//                     to="/ngo/application"
//                     className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//                   >
//                     Application Form
//                   </Link>
//                 </div>
//               </div>
//               <a
//                 className="ml-2 font-bold hover:text-black"
//                 href="https://dashboard.tribal.gov.in/ngo.aspx"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Dashboard
//               </a>
//               <button
//                 className="font-bold hover:text-black"
//                 style={{ marginLeft: "3px" }}
//               >
//                 <Link className="text-black no-underline" to="/about">
//                   About
//                 </Link>
//               </button>
//               <button
//                 className="font-bold hover:text-black"
//                 style={{ marginLeft: "3px" }}
//               >
//                 <Link className="text-black no-underline" to="/event/maps">
//                   Maps
//                 </Link>
//               </button>
//             </>
//           )}
//         </ul>
//       </div>

//       <div className="flex items-center">
//         {login && (
//           <>
//             <button onClick={logout} className="font-bold hover:text-black">
//               Logout
//             </button>
//             <h3 className="font-bold">Welcome, {user.name}</h3>
//           </>
//         )}
//         {!login && (
//           <div className="relative inline-block">
//             <button
//               onClick={handleDropdown}
//               className="font-bold hover:text-black"
//             >
//               Login / Register
//             </button>
//             <div
//               id="login-register-dropdown"
//               className="absolute z-10 hidden bg-orange-300 rounded-md shadow-lg"
//             >
//               <a
//                 href="#login"
//                 className="block px-4 py-2 hidden text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 FOR USER
//               </a>
//               <Link
//                 to="/login"
//                 className="block px-4 py-2 hidden text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 FOR NGO
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// <nav className="bg-orange-300 flex justify-between items-center p-2 text-grey-700">
//   <div className="flex items-center">
//     <ul className="flex list-none pl-44 pr-44 font-bold">
//       {!login && (
//         <>
//           <li className="mr-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="mr-4">
//             <a
//               href="https://dashboard.tribal.gov.in/ngo.aspx"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li className="font-bold">
//             <Link to="/about">About</Link>
//           </li>
//         </>
//       )}
//       {login && (
//         <>
//           <div className="relative inline-block">
//             <button
//               onClick={handleDropdown}
//               className="font-bold hover:text-black"
//             >
//               <Link to="/" className="text-black no-underline">
//                 Home
//               </Link>
//             </button>
//             <div
//               id="login-register-dropdown"
//               className="absolute z-10 hidden bg-orange-300 rounded-md shadow-lg"
//             >
//               <a
//                 href="#login"
//                 className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 Bank details
//               </a>
//               <a
//                 href="#login"
//                 className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 Update Bank details
//               </a>
//               <a
//                 href="#login"
//                 className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 View
//               </a>
//               <Link
//                 to="/ngo/application"
//                 className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//               >
//                 Application Form
//               </Link>
//             </div>
//           </div>
//           <a
//             className="ml-2 font-bold hover:text-black"
//             href="https://dashboard.tribal.gov.in/ngo.aspx"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Dashboard
//           </a>
//           <button className="font-bold hover:text-black">
//             <Link className="text-black no-underline" to="/about">
//               About
//             </Link>
//           </button>
//           <button className="font-bold hover:text-black">
//             <Link className="text-black no-underline" to="/event/maps">
//               Maps
//             </Link>
//           </button>
//         </>
//       )}
//     </ul>
//   </div>

//   <div className="flex items-center">
//     {login && (
//       <>
//         <button onClick={logout} className="font-bold hover:text-black">
//           Logout
//         </button>
//         <h3 className="font-bold">Welcome, {user ? user.name : "User"}</h3>
//       </>
//     )}
//     {!login && (
//       <div className="relative inline-block">
//         <button
//           onClick={handleDropdown}
//           className="font-bold hover:text-black mr-[130px]"
//         >
//           Login / Register
//         </button>
//         <div
//           id="login-register-dropdown"
//           className="absolute z-10 hidden bg-orange-300 rounded-md shadow-lg"
//         >
//           <Link
//             className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//             to="/userLogin"
//           >
//             FOR USER
//           </Link>
//           <Link
//             to="/login"
//             className="block px-4 py-2 text-black font-semibold no-underline hover:bg-orange-400"
//           >
//             FOR NGO
//           </Link>
//         </div>
//       </div>
//     )}
//   </div>
// </nav>
