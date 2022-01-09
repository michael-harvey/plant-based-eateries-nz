import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Markers from "./Markers";

export default function Map() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <>
      <MapContainer
        className="h-full z-0"
        center={[-40.681, 173.826]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          <Markers />
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
