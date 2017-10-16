import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
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
    <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
      {props.data.map(swim => (
        <Marker
          key={swim.id}
          position={{ lat: parseFloat(swim.latitude), lng:parseFloat(swim.longitude) }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class SwimMap extends React.Component{

  render(){
    const data = this.props.data || [];
    return <Map data={data}/>;
  }
}

export default SwimMap;
