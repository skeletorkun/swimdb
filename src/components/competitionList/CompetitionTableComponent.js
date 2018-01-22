import React from 'react'
import PropTypes from 'prop-types'
import CompetitionCard from './CompetitionCard'
    
class CompetitionTableComponent extends React.Component {
  
    render(){
      
      if(!this.props.isDataLoaded){
        return <h2> Loading... </h2>;
      }

      const data = this.props.filteredData || [];
      
      if(data.length === 0){
        return <h2> No Competitions found </h2>
      }

      const listItems = data.map((swim) => 
        <li key={swim.id}>
          <CompetitionCard
            data={swim} 
            deleteCard = { this.props.deleteCard }
            flagCard = {this.props.flagCard}
            editCardRequest = {this.props.editCardRequest}
            hasAuth = { this.props.hasAuth }
            isAdmin = { this.props.profile.isAdmin }
          />
        </li>
      );        
      return (
          <ul style = {{listStyle: 'none', paddingLeft:0 }}>{listItems}</ul>
      );
    }  
}

CompetitionTableComponent.propTypes = {
  filteredData : PropTypes.array.isRequired,
  updateFilters : PropTypes.func.isRequired
}

export default CompetitionTableComponent;