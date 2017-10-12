import React from 'react';
import Axios from 'axios';
import SwimTable from './SwimTable';
import SwimFilters from './SwimFilters';


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
      <div >
        <SwimFilters onFiltersChanged={(e) => this.onFiltersChanged(e)} />
        <hr/>
        <SwimTable filters={this.state.filters} data={this.state.data}/>
      </div>        
    );
  }
}

export default SwimApp;