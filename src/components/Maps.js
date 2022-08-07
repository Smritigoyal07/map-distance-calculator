import React from "react";
import { useJsApiLoader, GoogleMap, Marker , Autocomplete , DirectionsRenderer} from "@react-google-maps/api";
import { useState } from "react"
import { useRef } from "react";

const center = { lat: 28.6448, lng: 77.216721 };

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:['places'],
  });

  const [map, setmap] = useState(null)

  // const [directionResponse, setdirectionResponse] = useState(null)
  // const [distance, setdistance] = useState('')

  // const originRef = useRef()

  // const destinationRef = useRef()

  if (!isLoaded) {
    return (
      <div id="maps">
        <h1>Please wait. Its Loading !!!!</h1>
      </div>
    );
  }

  // async function calculateRoute() {
  //   if (originRef.current.value === '' || destinationRef.current.value === '') {
  //     return 
  //   }

  //   const directionsService = new window.google.maps.DirectionsService()
  //   const results = await directionsService.route({
  //     origin: originRef.current.value,
  //     destination: destinationRef.current.value,
  //     travelMode: window.google.maps.TravelMode.DRIVING
  //   })

  //   setdirectionResponse(results)
  //   setdistance(results.routes[0].legs[0].distance.text)
  // }

  return (
    <div id="maps">
      <input id="cal" type="button" value="Calulate" />
      {/* onClick={calculateRoute} */}

      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}

        // options={
        //   {
        //     zoomControl:false,
        //   }
        //}

        onLoad={(map)=>setmap(map)}
      >
        <Marker position={center} />

        {/* { directionResponse && <DirectionsRenderer directions={directionResponse} />} */}
      </GoogleMap>

      <button onClick={() => map.panTo(center)}>center</button>
      <Autocomplete><input type="text"/></Autocomplete>
      
    </div>
  );
};

export default Maps;
