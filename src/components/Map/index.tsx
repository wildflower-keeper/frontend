"use client";

import React, { useEffect, useRef, useState } from "react";

const initialCenter = [37.5262411, 126.99289439];
const mapId = "map";
const Maps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(mapRef);
    if (mapRef.current) {
      const mapItem = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
        zoom: 15,
        zoomControl: true,
      });
    }
  }, []);

  return (
    <>
      <div
        id={mapId}
        ref={mapRef}
        className=" w-[536px] h-[460px] rounded-lg"
      />
    </>
  );
};

export default Maps;
