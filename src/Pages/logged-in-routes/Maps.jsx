// import React from "react";
// import "../CSS/maps.css";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// // import Navbar from "../../Components/Navbar/Navbar";
// import Base from "../../Components/Base";

// const position = [23.0709, 76.8317];
// function Maps() {
//   const [formPosition, setFormPosition] = useState(position);

//   function handleSubmit(e) {
//     e.preventDefault();
//     ChangeCenter(formPosition);
//   }

//   return (
//     <>
//       <Base />
//       <MapContainer center={position} zoom={13}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <img src="bg.webp" alt="" />
//           <Popup>
//             FOOD DONATION <br /> ON 9 MARCH, 2024.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// }

// function ChangeCenter({ position }) {
//   const map = useMap();

//   map.setView(position, 6);
//   return null;
// }

// export default Maps;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/maps.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Navbar from "../../Components/Navbar/Navbar";

const position = [23.0709, 76.8317];

function Maps() {
  const [formPosition, setFormPosition] = useState(position);

  function handleSubmit(e) {
    e.preventDefault();
    ChangeCenter(formPosition);
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                TITLE <br /> DATE.
                <button>
                  <Link className="text-blue font-bold" to="/event/description">
                    View More
                  </Link>
                </button>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="col-span-1 bg-yellow-100 flex items-center justify-center">
          <form className="w-full max-w-md p-5" onSubmit={handleSubmit}>
            <h2 className="text-black font-bold align-middle ml-[165px] mb-[20px]">
              Add New Event
            </h2>
            <div className="mb-4">
              <label
                htmlFor="Title"
                className="block text-sm font-bold text-gray-700"
              >
                Title Of Event
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Title"
                value={formPosition[0]}
                onChange={(e) =>
                  setFormPosition([e.target.value, formPosition[1]])
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Title"
                className="block text-sm font-bold text-gray-700"
              >
                Description
              </label>
              <textarea
                type="text"
                id="title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Description"
                value={formPosition[0]}
                onChange={(e) =>
                  setFormPosition([e.target.value, formPosition[1]])
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Date"
                className="block text-sm font-bold text-gray-700"
              >
                Date
              </label>
              <input
                type="text"
                id="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="DD-MM-YYYY"
                value={formPosition[0]}
                onChange={(e) =>
                  setFormPosition([e.target.value, formPosition[1]])
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-bold text-gray-700"
              >
                Time
              </label>
              <input
                type="text"
                id="time"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="00:00 am/pm"
                value={formPosition[0]}
                onChange={(e) =>
                  setFormPosition([e.target.value, formPosition[1]])
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-bold text-gray-700"
              >
                Address
              </label>
              <textarea
                type="text"
                id="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Description"
                value={formPosition[0]}
                onChange={(e) =>
                  setFormPosition([e.target.value, formPosition[1]])
                }
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="longitude"
                className="block text-sm font-bold text-gray-700"
              >
                Longitude
              </label>
              <input
                type="text"
                id="longitude"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter longitude"
                value={formPosition[1]}
                onChange={(e) =>
                  setFormPosition([formPosition[0], e.target.value])
                }
              />
            </div> */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-blue-700"
              >
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function ChangeCenter(position) {
  const map = useMap();
  map.setView(position, map.getZoom());
}

export default Maps;
