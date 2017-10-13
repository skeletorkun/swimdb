import React from 'react';
import Axios from 'axios';
import SwimTable from './SwimTable';
import SwimFilters from './SwimFilters';
import SwimMap from './SwimMap';

class SwimApp extends React.Component {
  constructor(){
    super();
    this.state = {
      filters : {
        location: '',
        distanceMin: 0,
        distanceMax: 999999
      },
      data : []
    };
  }

  componentDidMount(){
    Axios.get("/data")
    .then(json => {      
        console.log('Data loaded ' + json.data)
        this.setState({data : json.data});
    });    
  }

  onFiltersChanged(filterChanges){
    console.log('filterChanges are propagated ' + JSON.stringify(filterChanges));    
    this.setState({
      filters: Object.assign({}, this.state.filters, filterChanges)
    }); 
  }

  render(){        
    return(    
      <div style={{height: '100%', overflow: 'hidden'}}>
        <SwimFilters onFiltersChanged={(e) => this.onFiltersChanged(e)} />
        <hr/>
        <div style={{float: 'left', width:'66%', height: '90%'}}>
          <SwimMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <div style={{float: 'right', width:'33%', margin: '0, auto', height: '90%', overflow: 'auto'}}>
          <SwimTable filters={this.state.filters} data={this.state.data}/>
        </div>
      </div>        
    );
  }
}

export default SwimApp;