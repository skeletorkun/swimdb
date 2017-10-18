import React from 'react';
import Axios from 'axios';
import CompetitionTableComponent from './CompetitionTableComponent';
import FiltersContainer from './FiltersContainer';
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
      data : [],
      displayedData : []
    };
  }
  
  componentDidMount(){
    Axios.get("/data")
    .then(json => {      
        console.log('Data loaded ' + json.data)
        this.setState({data : json.data, displayedData: json.data});
    });    
  }
  
  getFilteredDataRows(filters, data){
    console.log('getFilteredDataRows ' + JSON.stringify(filters));
    const distanceMin = parseInt(filters.distanceMin) || 0;
    const distanceMax = parseInt(filters.distanceMax) || 9999999999;
    const location = filters.location.toLowerCase();
    return (
      data
      .filter((swim) => swim.location.toLowerCase().includes(location))
      .filter((swim) => swim.distance > distanceMin)
      .filter((swim) => swim.distance < distanceMax)
    );
  }

  onFiltersChanged(filterChanges){
    console.log('filterChanges are propagated ' + JSON.stringify(filterChanges)); 
    const newFilters = Object.assign({}, this.state.filters, filterChanges);
    const filteredData = this.getFilteredDataRows(newFilters, this.state.data)   
    this.setState({
      filters: newFilters,
      displayedData: filteredData
    }); 
    
  }

  render(){
    return(
      <div style={{height: '100%', overflow: 'hidden'}}>
        <FiltersContainer onFiltersChanged={(e) => this.onFiltersChanged(e)} />
        <hr/>
        <div style={{float: 'left', width:'66%', height: '90%'}}>
          <SwimMap data={this.state.displayedData}/>          
        </div>
        <div style={{float: 'right', width:'33%', margin: '0, auto', height: '90%', overflow: 'auto'}}>
          <CompetitionTableComponent data={this.state.displayedData}/>
        </div>
      </div>        
    );
  }
}

export default SwimApp;