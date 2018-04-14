import React from 'react'
import LocationFieldComponent, { getCountryFromAddress }  from './../autocomplete/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'
import './FiltersComponent.css'

export const FiltersComponent = props => {

    const handleLocationSelected = (value) => { 
        const country = getCountryFromAddress(value);
        props.onChange(country, 'location');
    }
  
    const handleDistanceSelected = (value) => {
      console.log('handle distance selected ' + value);
      props.onChange(value, 'distance');
    }
  
    return(
      <div className='filters-div'> 
        <LocationFieldComponent onLocationSelected={handleLocationSelected} />
        <DistanceSelectComponent onChange={handleDistanceSelected} />      
      </div>
    );
  };