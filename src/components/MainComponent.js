import React from 'react'
import PropTypes from 'prop-types'
import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import FiltersContainer from './filters/FiltersContainer'
import { AddNewLink } from './AddNewLink'
import { AppBarContainer } from './AppBarContainer'

import './Main.css'
import Divider from 'material-ui/Divider'
import SwimMap from './SwimMap'


class MainComponent extends React.Component {
  
  render(){

    const mapStyle = {float: 'left', width:'66%', height: '85%', margin: '0.5%'};
    const listStyle = {float: 'right', width:'33%', margin: '0, auto', height: '85%', overflow: 'auto'};
    return (
      <div style={{height: '100%', overflow: 'hidden'}}>   
        <AppBarContainer {...this.props}/>
        <Divider />
        <AddNewLink addCardRequest={this.props.addCardRequest} history={this.props.history}/>   
        <div className='filters-container-big'>      
          <FiltersContainer {...this.props} />
        </div>
        <div className='swim-map-container' style={mapStyle}>
          <SwimMap {...this.props}/>          
        </div>
        <div className='competition-list-container' style={listStyle}>
          <CompetitionTableComponent {...this.props}/>
        </div>
      </div>   
    );
  }     
}

MainComponent.propTypes = {
  filters: PropTypes.object.isRequired,
  filteredData : PropTypes.array.isRequired,
  updateFilters : PropTypes.func.isRequired
}

export default MainComponent;