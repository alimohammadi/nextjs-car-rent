"use client";

import { useEffect, useState } from "react";
import Booking from "./components/Booking/Booking";
import MapboxMap from "./components/Map/MapBoxMap";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [soruceCordinates, setSourceCordinates] = useState<any>([]);
  const [destinationCordinates, setDestinationCordinates] = useState<any>([]);
  const [directionData, setDirectionData] = useState<any>([]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <section className="grid md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="col-span-2 max-md:order-first">
          <MapboxMap />
        </div>
      </section>
    </UserLocationContext.Provider>
  );
}
