import React from 'react'
import PropTypes from 'prop-types'
import CompetitionCard from './CompetitionCard'
    
class CompetitionTableComponent extends React.Component {
  
    render(){      
      const data = this.props.filteredData || [];
      const selectedId = this.props.selectedId;
      const listItems = data.map((swim) => 
        <li key={swim.id}>
          <CompetitionCard 
            data={swim} 
            isSelected= { swim.id === selectedId}
            selectCard = { this.props.selectCard }
          />
        </li>
      )
      ;        
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