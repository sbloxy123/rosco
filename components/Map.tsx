/*Since the map was loaded on client side,
we need to make this component client rendered as well*/
"use client";
import RPLogo from "../app/assets/images/RoscoLogo.png";
//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
// const defaultMapContainerStyle = {
//   width: "100%",
//   height: "100%",
//   position: "absolute"
//   // borderRadius: "15px 0px 0px 15px",
// };

//K2's coordinates
const defaultMapCenter = {
  lat: 51.50905830872913,
  lng: -0.14043260793980805,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 14;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerClassName="w-full h-full absolute"
        // mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={{ lat: 51.50905830872913, lng: -0.14043260793980805 }}
          // label={"Label onTop? pls"}
          // label={{
          //   text: "Label with Icon",
          //   className: "marker-label",
          // }}
        />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
