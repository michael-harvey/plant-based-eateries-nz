import { Marker as LeafletMarker, Popup } from "react-leaflet";
import Card from "../Card";

/**
 * Component for displaying a map location marker
 */
type MarkerProps = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  description: string;
  link: string;
  logo: string;
};

export default function Marker({ id, lat, lng, ...rest }: MarkerProps) {
  return (
    <LeafletMarker position={[lat, lng]} key={id}>
      <Popup closeButton={false} ClassName="">
        <Card {...rest} />
      </Popup>
    </LeafletMarker>
  );
}
