import React from "react";
import Maps from "./Maps";
import { useJsApiLoader, Autocomplete  } from "@react-google-maps/api";
import { useRef } from "react";

const Card = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:['places'],
  });

  const originRef = useRef()
  const destinationRef = useRef()

  return (
    <div id="card">
      <h3 id="title">Let's calculate distance from google maps</h3>

      <div className="half">
        <Maps />

        <div className="loc">
          <h5 className="location" id="h51">
            Origin
          </h5>
          <form className="formm" id="form1">
            <label>
              <img
                id="img1"
                src="https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000"
                alt="place"
              />
            </label>
            <Autocomplete><input type="text"  ref={originRef}/></Autocomplete>
          </form>
        </div>

        <div className="loc loc2">
          <h5 className="location" id="h52">
            Destination
          </h5>
          <form className="formm" id="form2">
            <label>
              <img
                id="img2"
                src="https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000"
                alt="place"
              />
            </label>
            <Autocomplete><input type="text" ref={destinationRef} /></Autocomplete>
          </form>
        </div>

        <div id="dis">
          <div id="dis-nav">
            <div id="heading">Distance</div>
            <div id="km">0km</div>
          </div>
          <div id="dis-body">
            <h5>The distance between</h5>
            <h5 id="place1"></h5>
            <h5>and</h5>
            <h5 id="place2"></h5>
            <h5>is</h5>
            <h5 id="totaldis">10 km</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
