import React from 'react'
import PropTypes from 'prop-types'
import LocationAutocompleteComponent, { getCountryFromAddress } from './autocomplete/LocationAutoCompleteComponent' 

const FiltersComponent = props => {

  const divStyle = {padding:20, border: 'solid 1px', margin: 10};  
  const filterStyle = {margin :10}  

  const handleLocationSelected = (address) => {   
      const country = getCountryFromAddress(address);
      props.onChange(country, 'location');
  }

  return(
    <div style={divStyle}> 
      <label style={filterStyle}>Location: </label> <LocationAutocompleteComponent onLocationSelected={(e) => handleLocationSelected(e)}/>      
      <label style={filterStyle}>Distance Min: </label> <input type="text" onChange={(e) => props.onChange(e.target.value, 'distanceMin')}/>
      <label style={filterStyle}>Distance Max: </label> <input type="text" onChange={(e) => props.onChange(e.target.value, 'distanceMax')}/>      
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