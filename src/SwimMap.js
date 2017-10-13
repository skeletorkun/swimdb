import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class SwimMap extends React.Component{

  render(){
    
    const Map = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 43.7, lng: 7.1 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 43.7, lng: 7.1 }} />}
      </GoogleMap>
    );

    return <Map/>;
  };
}

export default SwimMap;
