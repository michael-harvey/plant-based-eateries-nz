import { Marker, Popup } from "react-leaflet";
import data from './markers.json';

export default function Markers() {
    return (
        <>
            {data.map(({ id, name, lat, lng, link }) => {
                return (
                    <Marker position={[lat, lng]} key={id}>
                        <Popup>
                            {name}
                            <a href={link}>Website</a>
                        </Popup>
                    </Marker>
                );
            })}
        </>
    );
}