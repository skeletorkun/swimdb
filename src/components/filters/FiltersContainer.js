import React from 'react'
import PropTypes from 'prop-types'
import LocationFieldComponent, { getCountryFromAddress }  from './../autocomplete/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'

const FiltersComponent = props => {

  const divStyle = {padding:20, margin: 10};  

  const handleLocationSelected = (value) => { 
      const country = getCountryFromAddress(value);
      props.onChange(country, 'location');
  }

  const handleDistanceSelected = (value) => {
    console.log('handle distance selected ' + value);
    props.onChange(value, 'distance');
  }

  return(
    <div style={divStyle}> 
      <LocationFieldComponent onLocationSelected={handleLocationSelected}/>
      <DistanceSelectComponent onChange={handleDistanceSelected} style={{float:'right'}}/>
    </div>
  );
};

class FiltersContainer extends React.Component {
  
  handleChange(value, field){
    var filter = {};
    filter[field] = value;
    this.props.updateFilters(filter);
  }
  
  render(){    
    return(      
      <FiltersComponent onChange={this.handleChange.bind(this)}/>
    );
  }
}

FiltersContainer.propTypes = {
  updateFilters : PropTypes.func.isRequired
}

export default FiltersContainer;