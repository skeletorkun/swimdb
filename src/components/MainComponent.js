import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 
import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import FiltersContainer from './filters/FiltersContainer'
import UserInfoContainer from './user/UserInfoContainer'
import SwimMap from './SwimMap'

import './Main.css'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';


class MainComponent extends React.Component {
  
  render(){

    const appBarStyle = {height: '60px', backgroundColor: 'white'};
    const mapStyle = {float: 'left', width:'66%', height: '85%', margin: '0.5%'};
    const listStyle = {float: 'right', width:'33%', margin: '0, auto', height: '85%', overflow: 'auto'};
  
    return (
      <div style={{height: '100%', overflow: 'hidden'}}>   
        <Toolbar style={appBarStyle}>
          <ToolbarGroup >
            <ToolbarTitle text="Swim DB" />
          </ToolbarGroup>
            <UserInfoContainer auth={this.props.auth} profile={this.props.profile} firebase={this.props.firebase}/>          
        </Toolbar>
        <Divider />
        {/* <Link to='/add' style={{ margin: '20px 30px', float: 'right' }}> Add New Swim Event </Link> */}
        <FiltersContainer  {...this.props} />
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