import React from 'react'
import PropTypes from 'prop-types'

const CompetitionComponent = (props) => {
  var divStyle = {padding:20, border: 'solid 1px', margin: 10};
  var swim = props.data;    
  return (      
      <div style={divStyle}>          
        <h3>{swim.competition}</h3><br/>
        <p>Distance : {swim.distance}</p><br/>
        <p>Location : {swim.location}</p><br/>
        <p>Date : {swim.date}</p><br/>
        <a href={swim.link}>website</a>
      </div>      
  );
}
    
class CompetitionTableComponent extends React.Component {
  
    render(){
      const data = this.props.filteredData || [];
      const listItems = data.map((swim) => <li key={swim.id}><CompetitionComponent data={swim}/></li>);        
      return (
          <ul style = {{listStyle: 'none', paddingLeft:0 }}>{listItems}</ul>
      );
    }  
}

CompetitionTableComponent.propTypes = {
  filteredData : PropTypes.array.isRequired,
  updateFilters : PropTypes.func.isRequired
}

export default CompetitionTableComponent;