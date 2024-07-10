import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const accessToken = "pk.eyJ1IjoibmlibSIsImEiOiJjbHh3NjQ4bHoxZ3NhMmlwZTA5N3ExcnhzIn0.TmnoMN4sx89lNt5BGlelYw";

export default function Map(params) {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [18.0686, 59.3293], // starting position [lng, lat]
      zoom: 4, // starting zoom
    });
  }, []);

  useEffect(() => {
    params.events.forEach(event => {
        new mapboxgl.Marker().setLngLat(event.location).addTo(mapInstanceRef.current);
    });
  }, [params.events]);
 
  return (
    <>
      <div id="map-container" ref={mapContainerRef} style={{ height: 300 , width: "100%"}} />
    </>
  );
}
