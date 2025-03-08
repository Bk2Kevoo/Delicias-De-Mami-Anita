import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

const center = {
  lat: 41.2277, 
  lng: -73.2171, 
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAOETUXqqgbPvWLqdt8bX46rRxjQFpe3Ss">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
