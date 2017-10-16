import React from 'react';

class Competition extends React.Component {
  
  render (){    
    var divStyle = {padding:20, border: 'solid 1px', margin: 10};
    var swim = this.props.data;    
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
}

class SwimTable extends React.Component {
  
  render() {       
    const listItems = this.props.data.map((swim) => <li key={swim.id}><Competition data={swim}/></li>);        
    return (
      <ul style = {{listStyle: 'none', paddingLeft:0 }}>{listItems}</ul>
    );
  }
}
export default SwimTable;