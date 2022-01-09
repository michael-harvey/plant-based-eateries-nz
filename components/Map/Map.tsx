import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Marker from "./Marker";
import data from "./markers.json";

export default function Map() {
  // TODO: revise this 'fix' for next attempting to render leaflet map via SSR
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
        tap={false} // fixes leaflet issue of marker tap event being buggy on mobile
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {data.map((marker) => (
            <Marker {...marker} key={marker.id} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
