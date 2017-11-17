import React from 'react'
import Paper from 'material-ui/Paper';
import './Card.css'

export const CompetitionCardComponent = ( {swim, ...props} ) => {

    const color = props.isSelected ? '#ffe684' : 'none';
    var divStyle = { background: color, zDepth:2 };
    
    return(
        <Paper className="Paper" style={ divStyle } onClick={ (e) => props.handleClick(e)} >
            <button style={{float: 'right' }} onClick={ props.handleDelete }> Delete </button> 
            <h3>{swim.competition}</h3><br/>
            <p>Distance : {swim.distance}</p><br/>
            <p>Location : {swim.location.formatted_address}</p><br/>
            <p>Date : {swim.date}</p><br/>
            <a href={swim.link} alt='website'>{swim.link}</a>
        </Paper>
    );
}
