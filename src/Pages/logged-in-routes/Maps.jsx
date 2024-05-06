import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/maps.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Navbar from "../../Components/Navbar/Navbar";
import { getCurrentUserDetail } from "../../Services/auth";
import { useGeolocated } from "react-geolocated";
import { useMapEvents } from "react-leaflet";

function Maps() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    address: "",
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  const initialPosition = [53.0709, 76.8317];
  const [mapCenter, setMapCenter] = useState(initialPosition);

  useEffect(() => {
    if (coords) {
      setMapCenter([coords.latitude, coords.longitude]);
    }
  }, [coords]);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userDetails = getCurrentUserDetail();
    setUser(userDetails);
  }, []);

  const [clickedLocation, setClickedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setClickedLocation(location);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1">
          <MapContainer
            key={`${mapCenter[0]}-${mapCenter[1]}`}
            center={mapCenter}
            zoom={13}
            className="h-[100vh] w-[100vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={initialPosition}>
              <Popup className="bg-red">
                <button>
                  <Link to="/event/description" className="text-blue font-bold">
                    View More
                  </Link>
                </button>
              </Popup>
            </Marker>
            <Marker position={mapCenter}>
              <Popup className="bg-red">
                <button>
                  <Link to="/event/description" className="text-blue font-bold">
                    View More
                  </Link>
                </button>
              </Popup>
            </Marker>
            <LocationMarker onLocationClick={handleLocationClick} />
          </MapContainer>
        </div>
        {user?.role === 1 ? (
          <div className="col-span-1 bg-yellow-100 flex items-center justify-center">
            <form className="w-full max-w-md p-5">
              <h2 className="text-black font-bold align-middle ml-[165px] mb-[20px]">
                Add New Event
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-bold text-gray-700"
                >
                  Title Of Event
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-bold text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-bold text-gray-700"
                >
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="DD-MM-YYYY"
                  value={formData.date}
                  onChange={handleChange}
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
                  name="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="00:00 am/pm"
                  value={formData.time}
                  onChange={handleChange}
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
                  id="address"
                  name="address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Description"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <input
                type="text"
                id="latitude"
                name="time"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="00:00 am/pm"
                value={clickedLocation?.lat ? clickedLocation.lat : 0}
              />
              <input
                type="text"
                id="longitude"
                name="time"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="00:00 am/pm"
                value={clickedLocation?.lng ? clickedLocation.lng : 0}
              />
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
        ) : (
          <div className="col-span-1 bg-yellow-100 flex items-center justify-center">
            <form className="w-full max-w-md p-5">
              <h2 className="text-black font-bold align-middle ml-[165px] mb-[20px]">
                DONATE FOOD ?
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="donorName"
                  className="block text-sm font-bold text-gray-700"
                >
                  Name of Donor
                </label>
                <input
                  type="text"
                  id="donorName"
                  name="donorName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Donor's Name"
                  value={formData.donorName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deliveryMethod"
                  className="block text-sm font-bold text-gray-700"
                >
                  Pickup or Drop
                </label>
                <select
                  id="deliveryMethod"
                  name="deliveryMethod"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.deliveryMethod}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="pickup">Pickup</option>
                  <option value="drop">Drop</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deliveryMethod"
                  className="block text-sm font-bold text-gray-700"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="pickup">Perishable</option>
                  <option value="drop">Non Perishable</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deliveryMethod"
                  className="block text-sm font-bold text-gray-700"
                >
                  Type 2
                </label>
                <select
                  id="type2"
                  name="type2"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.type2}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="pickup">Veg</option>
                  <option value="drop">Non Veg</option>
                  <option value="drop">Vegan</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-bold text-gray-700"
                >
                  Time of Pickup/Drop
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="00:00 am/pm"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-bold text-gray-700"
                >
                  Date of Pickup/Drop
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="DD-MM-YYYY"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="foodType"
                  className="block text-sm font-bold text-gray-700"
                >
                  Type of Food
                </label>
                <input
                  type="text"
                  id="foodType"
                  name="foodType"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Type of Food"
                  value={formData.foodType}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-bold text-gray-700"
                >
                  Quantity of Food
                </label>
                <textarea
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

function LocationMarker({ onLocationClick }) {
  const map = useMapEvents({
    click(e) {
      onLocationClick(e.latlng);
    },
  });

  return null;
}

export default Maps;
