import { useRef, useEffect, useState } from "react";
import { Geocoder} from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const accessToken = process.env.REACT_APP_MAPBOX_KEY;

export default function MapWithGeocoder(params) {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [-74.5, 40], // starting position [lng, lat] it is initialized with stockholm
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
        
        onRetrieve={(ev) => {params.setLocation(ev.geometry.coordinates)}}
        marker 
      />
      <div id="map-container" ref={mapContainerRef} style={{ height: 300 , width: "100%"}} />
    </>
  );
}


