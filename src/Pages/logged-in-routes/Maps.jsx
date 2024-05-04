import React from "react";
import "../CSS/maps.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "../../Components/Navbar/Navbar";

const position = [23.0709, 76.8317];
function Maps() {
  return (
    <>
      <Navbar />
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <img src="bg.webp" alt="" />
          <Popup>
            FOOD DONATION <br /> ON 9 MARCH, 2024.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Maps;
