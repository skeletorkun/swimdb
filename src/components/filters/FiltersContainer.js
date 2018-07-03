import React from 'react'
import PropTypes from 'prop-types'
import FiltersComponent from './FiltersComponent'

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