import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CompetitionCardComponent } from './CompetitionCardComponent'

class CompetitionCard extends Component{

    handleCardAction = (type) => {
      console.log('Card action ' + type);
      switch(type){
        case 'DELETE':
          this.props.deleteCard(this.props.data.id);
          break;
        case 'SEND_FEEDBACK':
          this.props.flagCard(this.props.data.id);
          break;
        case 'EDIT':
          this.props.editCardRequest(this.props.data);
          break;
        default:
          console.error('Unexpected Card Action');
          break;
      }
    }
                  
    render = () => {
        return (
            <CompetitionCardComponent 
              handleCardAction = {this.handleCardAction}
              {...this.props} 
            />
        );
    }
}

CompetitionCard.propTypes = {
    data : PropTypes.object.isRequired,
    deleteCard : PropTypes.func.isRequired,
    flagCard : PropTypes.func.isRequired,
    editCardRequest : PropTypes.func.isRequired,
  }

export default CompetitionCard;