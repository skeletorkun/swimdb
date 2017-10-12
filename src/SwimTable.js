import React from 'react';

class Competition extends React.Component {
  
  render (){    
    var divStyle = {padding:20, border: 'solid 1px', margin: 10};
    var swim = this.props.data;    
    return (      
        <div style={divStyle}>          
          <h3>{swim.Name}</h3><br/>
          <p>Distance : {swim.Distance}</p><br/>
          <p>Location : {swim.Location}</p><br/>
          <p>Date : {swim.Date}</p  ><br/>
          <a href={swim.Link}>website</a>
        </div>      
    );
  }
}

/**
* A List of Competitions
*/
class SwimTable extends React.Component {
  
  getFilteredDataRows(filters, data){
      console.log('rendering with filters ' + JSON.stringify(filters));
      var distanceMin = parseInt(filters.distanceMin) || 0;
      var distanceMax = parseInt(filters.distanceMax) || 9999999999;
      var location = filters.location.toLowerCase();
      return (
        data
        .filter((swim) => swim.Location.toLowerCase().includes(location))
        .filter((swim) => swim.Distance > distanceMin)
        .filter((swim) => swim.Distance < distanceMax)
        .map((swim) => <li key={swim.id}><Competition data={swim}/></li>)
      );
  }

 render() {   
    const listItems = this.getFilteredDataRows(this.props.filters, this.props.data);
    return (
     <ul style = {{listStyle: 'none', paddingLeft:0 }}>{listItems}</ul>
   );
 }
}
export default SwimTable;