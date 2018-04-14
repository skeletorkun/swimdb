import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps, withState, withHandlers } from "recompose"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer"

import InfoWindow from "./map/InfoWindow"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAbsXVAovwScQcJ4wHfBol0nJTizRjKX18&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('places', 'updatePlaces', ''),
  withState('selectedPlace', 'updateSelectedPlace', null),
  withHandlers(() => ({
    onToggleOpen: ({ updateSelectedPlace }) => key => {
      updateSelectedPlace(key);
    }
  })
  ),
  withGoogleMap
)((props) =>

  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 43.7, lng: 7.1 }}
    defaultOptions={{
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      rotateControl: false,
      fullscreenControl: false
    }}

  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.data.map(swim => (
        <Marker
          key={swim.id}
          position={{ lat: parseFloat(swim.location.latitude), lng: parseFloat(swim.location.longitude) }}
          onClick={() => props.onToggleOpen(swim.id)}
        >
          {props.selectedPlace === swim.id &&
            <InfoWindow onCloseClick={props.onToggleOpen} swim={swim} />
          }
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
  );

class SwimMap extends React.Component {
  render() {
    const data = this.props.filteredData || [];
    return <Map data={data} />;
  }
}

SwimMap.propTypes = {
  filteredData: PropTypes.array.isRequired,
  updateFilters: PropTypes.func.isRequired
}

export default SwimMap;
