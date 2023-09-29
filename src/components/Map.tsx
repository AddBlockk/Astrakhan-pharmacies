"use client";

import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
export default function Maps() {
  const defaultState = {
    center: [46.365347, 48.069093],
    zoom: 17,
  };
  {
    return (
      <div id="map">
        <YMaps>
          <Map defaultState={defaultState} width="100%" height="50vh">
            <Placemark geometry={[46.365347, 48.069093]} />
            <FullscreenControl options={{ float: "left" }} />
            <ZoomControl />
            <GeolocationControl options={{ float: "right" }} />
            <TrafficControl />
          </Map>
        </YMaps>
      </div>
    );
  }
}
