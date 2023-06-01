"use client";
import { useEffect, useRef } from "react";

function GoogleMap({ apiKey }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;

    googleMapScript.addEventListener("load", initializeMap);

    document.body.appendChild(googleMapScript);

    return () => {
      googleMapScript.removeEventListener("load", initializeMap);
    };
  }, [apiKey]);

  function initializeMap() {
    const mapOptions = {
      center: { lat: 35.09796834, lng: 129.0301417 },
      zoom: 12,
    };

    // mapRef.current = new window.google.maps.Map(
    //   document.getElementById("map"),
    //   mapOptions
    // );
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    // 마커 생성
    const marker = new window.google.maps.Marker({
      position: { lat: 35.09796834, lng: 129.0301417 },
      map: map,
      title: "마커 제목",
    });
  }

  return <div id="map" style={{ width: "80%", height: "800px" }} />;
}

export default GoogleMap;
