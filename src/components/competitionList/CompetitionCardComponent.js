import React from 'react'

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import './Card.css'

export const CompetitionCardComponent = ( {swim, ...props} ) => {

    const color = props.isSelected ? '#ffe684' : 'none';
    const displayDelete = props.isSelected ? 'block': 'none';
    var divStyle = { background: color, zDepth:2 };
    
    return(
        <Paper className="card" style={ divStyle } onClick={(e) => props.handleClick(e)} >
            <FlatButton style={{float: 'right', display: displayDelete }} primary={true} onClick={ props.handleDelete }> Delete </FlatButton> 
            <h3>{swim.competition}</h3><br/>
            <p>Distance : {swim.distance}</p><br/>
            <p>Location : {swim.location.formatted_address}</p><br/>
            <p>Date : {swim.date}</p><br/>
            <a href={swim.link} alt='website'>{swim.link}</a>
        </Paper>
    );
}
