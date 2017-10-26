import React from 'react'
import PropTypes from 'prop-types'

const FiltersComponent = props => {

  const divStyle = {padding:20, border: 'solid 1px', margin: 10};  
  const filterStyle = {margin :10}  
  
  return(
    <div style={divStyle}> 
      <label style={filterStyle}>Location: </label> <input type="text" onChange={(e) => props.onChange(e, 'location')}/>
      <label style={filterStyle}>Distance Min: </label> <input type="text" onChange={(e) => props.onChange(e, 'distanceMin')}/>
      <label style={filterStyle}>Distance Max: </label> <input type="text" onChange={(e) => props.onChange(e, 'distanceMax')}/>      
    </div>
  );
};

class FiltersContainer extends React.Component {
  
  handleChange(e, field){
    var filter = {};
    filter[field] = e.target.value;
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