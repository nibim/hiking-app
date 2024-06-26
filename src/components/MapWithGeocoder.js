import { useRef, useEffect, useState } from "react";
import { Geocoder} from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const accessToken = "pk.eyJ1IjoibmlibSIsImEiOiJjbHh3NjQ4bHoxZ3NhMmlwZTA5N3ExcnhzIn0.TmnoMN4sx89lNt5BGlelYw";

export default function MapWithGeocoder() {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    console.log();
  }, []);

  
  return (
    <>
      <Geocoder
        accessToken={accessToken}
        map={mapInstanceRef.current}
        mapboxgl={mapboxgl}
        value={inputValue}
        onChange={(d) => {
          setInputValue(d);
        }}
        onRetrieve={(ev) => {console.log(ev.geometry.coordinates)}}
        marker 
      />
      <div id="map-container" ref={mapContainerRef} style={{ height: 300 , width: "100%"}} />
    </>
  );
}


