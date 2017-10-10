import React from 'react';
import Axios from 'axios';

class Competition extends React.Component {
  
  render (){    
    var divStyle = {padding:20, border: 'solid 1px', margin: 10};
    var swim = this.props.data;
    return (      
        <div style={divStyle}>          
          <h3>{swim.name}</h3><br/>
          <p>Distance : {swim.distance}</p><br/>
          <p>Location : {swim.Location}</p><br/>
          <a href={swim.link}>website</a>
        </div>      
    );
  }
}
  

/**
* A List of Swim competitions
*/
class SwimTable extends React.Component {
 constructor() {
   super();
   this.state = {
     data: []
   };
 }

 componentDidMount(){
  Axios.get("/data")
    .then(json => {      
        console.log(json.data)
        this.setState({data : json.data});
      });    
 }

 render() {   
    const listItems = this.state.data.map((swim) => <li key={swim.id}><Competition data={swim}/></li>);
    return (
     <ul style = {{listStyle: 'none'}}>{listItems}</ul>
   );
 }
}
export default SwimTable;