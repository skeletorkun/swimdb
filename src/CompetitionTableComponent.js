import React from 'react';

const CompetitionComponent = (props) => {
  var divStyle = {padding:20, border: 'solid 1px', margin: 10};
  var swim = props.data;    
  return (      
      <div style={divStyle}>          
        <h3>{swim.competition}</h3><br/>
        <p>Distance : {swim.distance}</p><br/>
        <p>Location : {swim.location}</p><br/>
        <p>Date : {swim.date}</p  ><br/>
        <a href={swim.link}>website</a>
      </div>      
  );
}
    
const CompetitionTableComponent = (props) => {
  const listItems = props.data.map((swim) => <li key={swim.id}><CompetitionComponent data={swim}/></li>);        
  return (
    <ul style = {{listStyle: 'none', paddingLeft:0 }}>{listItems}</ul>
  );
}

export default CompetitionTableComponent;