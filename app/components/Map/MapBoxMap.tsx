"use client";
import React from "react";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapboxMap() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      boxZoom
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100%", height: 400, borderRadius: 12 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default MapboxMap;
