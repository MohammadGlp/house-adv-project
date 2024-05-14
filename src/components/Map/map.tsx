import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

const LocationMarker = ({ position, onPosition, isAccessToClick }: any) => {
  const map = useMap();

  useEffect(() => {
    if (isAccessToClick) {
      map.locate().on("click", function (e) {
        onPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }
  }, [map, isAccessToClick]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Your mark of house.</Popup>
    </Marker>
  );
};
export const Location = ({ position, setPosition, isAccessToClick }: any) => {
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      className="!w-full !h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} onPosition={setPosition} isAccessToClick={isAccessToClick} />
    </MapContainer>
  );
};
