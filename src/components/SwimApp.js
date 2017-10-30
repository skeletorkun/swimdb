import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import CompetitionTableComponent from './CompetitionTableComponent'
import FiltersContainer from './FiltersContainer'
import SwimMap from './SwimMap'

class SwimApp extends React.Component {

  render(){
    return (
      <div style={{height: '100%', overflow: 'hidden'}}>
        <FiltersContainer {...this.props}/>
        <button onClick = { this.props.addSwim }> AddNewSwim </button>
        <hr/>
        <div style={{float: 'left', width:'66%', height: '90%'}}>
          <SwimMap {...this.props}/>          
        </div>
        <div style={{float: 'right', width:'33%', margin: '0, auto', height: '90%', overflow: 'auto'}}>
          <CompetitionTableComponent {...this.props}/>
        </div>
      </div>   
    )
  }     
}

SwimApp.propTypes = {
  filters: PropTypes.object.isRequired,
  filteredData : PropTypes.array.isRequired,
  updateFilters : PropTypes.func.isRequired
}

export default SwimApp;