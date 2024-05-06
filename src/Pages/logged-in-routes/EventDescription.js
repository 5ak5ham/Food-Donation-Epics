import React from "react";
import Base from "../../Components/Base";
import { useLocation } from "react-router-dom";

function EventDescription() {
  const location = useLocation();
  // console.log(location);
  const event = location.state;
  console.log(event);

  function formatDate(dateString) {
    // Parse the date from the string
    const [day, month, year] = dateString
      .split("-")
      .map((num) => parseInt(num, 10));

    // Create a new Date object (Note: Month is 0-indexed in JavaScript Date)
    const date = new Date(year, month - 1, day);

    // Use toLocaleDateString to format the date as "6 May, 2024"
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function formatTime(timeString) {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(":").map(Number);

    // Determine AM or PM suffix based on the hour
    const suffix = hours >= 12 ? "PM" : "AM";

    // Convert hour from 24-hour to 12-hour format
    const hour12 = hours % 12 || 12; // Converts "0" hours to "12"

    // Return the formatted time string
    return `${hour12}:${minutes < 10 ? "0" + minutes : minutes} ${suffix}`;
  }

  const date = formatDate(event?.event.date);
  const time = formatTime(event?.event.time);
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
              <h2 className="text-2xl font-semibold">{event?.event.title}</h2>
              <p className="text-sm text-gray-500 mb-2">Organizer</p>
              <h3 className="text-sm font-semibold">About the event</h3>
              <p className="text-sm text-gray-500">
                {event?.event.description}
              </p>
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
                <strong>Date Of Event: </strong>
                {date}
              </p>
              <p>
                <strong>Time Of Event: </strong> {time}
              </p>
            </div>
            <div>
              <button className="ml-[1250px] bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-l">
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
