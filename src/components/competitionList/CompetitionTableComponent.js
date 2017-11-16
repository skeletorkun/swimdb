import React from 'react'
import PropTypes from 'prop-types'
import CompetitionCard from './CompetitionCard'
    
class CompetitionTableComponent extends React.Component {
  
    render(){
      
      if(!this.props.isDataLoaded){
        return <h1> Loading... </h1>;
      }

      const data = this.props.filteredData || [];
      
      if(data.length === 0){
        return <h1> No Competitions found </h1>
      }

      const selectedId = this.props.selectedId;
      const listItems = data.map((swim) => 
        <li key={swim.id}>
          <CompetitionCard 
            data={swim} 
            isSelected= { swim.id === selectedId}
            selectCard = { this.props.selectCard }
            deleteCard = { this.props.deleteCard }
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