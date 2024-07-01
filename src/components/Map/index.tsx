/* eslint-disable no-undef */
/* eslint-disable no-new */

"use client";

import React, { useEffect, useRef } from "react";

const mapId = "map";
const Maps = () => {
  const mapRef = useRef(null);

  const initMap = () => {
    if (mapRef.current) {
      const naverMap = new window.naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(37.557568172519396, 126.97583680325434),
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.RIGHT_BOTTOM,
        },
      });
      new window.naver.maps.Marker({
        position: new naver.maps.LatLng(37.557568172519396, 126.97583680325434),
        map: naverMap,
      });
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      initMap();
    }
  }, []);

  return (
    <div id={mapId} ref={mapRef} className=" w-[500px] h-[440px] rounded-lg" />
  );
};

export default Maps;
