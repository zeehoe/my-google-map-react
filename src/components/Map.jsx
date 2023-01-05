import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import "./../styles/map.scss";
import { DEFAULT_MAP_POS, DEFAULT_MAP_ZOOM } from "../contants/map";

export default function Map({latlng}) {

  return (
    <GoogleMap
      zoom={DEFAULT_MAP_ZOOM}
      center={latlng?latlng:DEFAULT_MAP_POS}
      mapContainerClassName="map-container"
    >
      <MarkerF position={latlng?latlng:DEFAULT_MAP_POS} />
    </GoogleMap>
  );
}
