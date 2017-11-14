import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompetitionCard extends Component{

    handleClick = () =>{
        console.log('card clicked');
        this.props.selectCard(this.props.data.id);
    }

    render = () =>{
        const color = this.props.isSelected ? '#ffe684' : 'none';
        var divStyle = {padding:20, border: 'solid 1px', margin: 10, background: color};
        var swim = this.props.data;
        return (
            <div style={divStyle} onClick={ this.handleClick }>          
              <h3>{swim.competition}</h3><br/>
              <p>Distance : {swim.distance}</p><br/>
              <p>Location : {swim.location.formatted_address}</p><br/>
              <p>Date : {swim.date}</p><br/>
              <a href={swim.link}>website</a>
            </div>
        );
    }
}

CompetitionCard.propTypes = {
    data : PropTypes.object.isRequired,
    selectCard : PropTypes.func.isRequired,
    isSelected : PropTypes.bool.isRequired
  }

export default CompetitionCard;