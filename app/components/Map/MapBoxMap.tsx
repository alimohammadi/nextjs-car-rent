"use client";
import React, { useContext, useRef } from "react";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserLocationContext } from "@/context/UserLocationContext";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

function MapboxMap() {
  const mapRef = useRef<any>();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  return (
    <div>
      {userLocation ? (
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation?.lng,
            latitude: userLocation?.lat,
            zoom: 14,
          }}
          style={{ width: "100%", height: 450, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            longitude={userLocation?.lng}
            latitude={userLocation?.lat}
            anchor="bottom"
          >
            <Image width={40} height={40} alt="map-pin" src="/pin.png" />
          </Marker>
          {/* <Markers />

          {directionData?.routes ? (
            <MapBoxRoute
              coordinates={directionData?.routes[0]?.geometry?.coordinates}
            />
          ) : null} */}
        </Map>
      ) : null}
    </div>
  );
}

export default MapboxMap;
