/* eslint-disable no-undef */
/* eslint-disable no-new */

"use client";

import React, { useEffect, useRef } from "react";

const mapId = "map";
const Maps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
        zoom: 15,
        zoomControl: true,
      });
    }
  }, []);

  return (
    <div id={mapId} ref={mapRef} className=" w-[536px] h-[460px] rounded-lg" />
  );
};

export default Maps;
