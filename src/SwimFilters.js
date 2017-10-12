import React from 'react';

class SwimFilters extends React.Component {
  
  handleChange(e, field){
    var filter = {};
    filter[field] = e.target.value;
    this.props.onFiltersChanged(filter);
  }

  render(){
    var filters = this.props.filters;
    var divStyle = {padding:20, border: 'solid 1px', margin: 10};  
    var filterStyle = {margin :10}  
    return(      
      <div style={divStyle}> 
        <label style={filterStyle}>Location: </label> <input type="text" onChange={(e) => this.handleChange(e, 'location')}/>
        <label style={filterStyle}>Distance Min: </label> <input type="text" onChange={(e) => this.handleChange(e, 'distanceMin')}/>
        <label style={filterStyle}>Distance Max: </label> <input type="text" onChange={(e) => this.handleChange(e, 'distanceMax')}/>      
      </div>
    );
  }
}

export default SwimFilters;