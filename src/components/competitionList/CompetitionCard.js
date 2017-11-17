import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CompetitionCardComponent } from './CompetitionCardComponent'

class CompetitionCardContainer extends Component{

    handleClick = () =>{
        console.log('card clicked');
        this.props.selectCard(this.props.data.id);
    }

    handleDelete = (e) =>{
        console.log('card clicked ' + e);
        this.props.deleteCard(this.props.data.id);
        e.stopPropagation();
    }

    render = () =>{
        var swim = this.props.data;
        return (
            <CompetitionCardComponent swim={swim} {...this.props} handleClick={this.handleClick } handleDelete={this.handleDelete} />
        );
    }
}

CompetitionCardContainer.propTypes = {
    data : PropTypes.object.isRequired,
    selectCard : PropTypes.func.isRequired,
    deleteCard : PropTypes.func.isRequired,
    isSelected : PropTypes.bool.isRequired
  }

export default CompetitionCardContainer;