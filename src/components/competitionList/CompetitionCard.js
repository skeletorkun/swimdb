import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CompetitionCardComponent } from './CompetitionCardComponent'

class CompetitionCardContainer extends Component{

    handleCardAction = (type) => {
      console.log('action type ' + type);
      switch(type){
        case 'DELETE':
          this.props.deleteCard(this.props.data.id);
          break;
        case 'SEND_FEEDBACK':
          this.props.flagCard(this.props.data.id);
          break;
        case 'EDIT':
          console.log('EDIT selected but it s not yet supported');
          break;
        default:
          console.error('Unexpected Card Action');
          break;
      }
    }
                  
    render = () => {
        var swim = this.props.data;
        return (
            <CompetitionCardComponent 
              swim={swim} 
              handleCardAction = {this.handleCardAction}
              {...this.props} 
            />
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