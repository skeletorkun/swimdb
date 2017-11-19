import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 
import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import FiltersContainer from './filters/FiltersContainer'
import UserInfoContainer from './user/UserInfoContainer'
import SwimMap from './SwimMap'

import './Main.css'
import Paper from 'material-ui/Paper';


class MainComponent extends React.Component {

  render(){

    var topContainerStyle = { zDepth:2 };

    return (
      <div style={{height: '100%', overflow: 'hidden'}}>  
        <Paper className="top-container" style={ topContainerStyle }>
          <div style={{float: 'left', width:'75%'}}>
            <FiltersContainer  {...this.props}/>
          </div>
          <div style={{float: 'right', width:'25%'}}>
            <UserInfoContainer auth={this.props.auth} profile={this.props.profile} firebase={this.props.firebase}/>                                 
            <Link to='/add' style={{ margin: '20px 30px', float: 'right' }}> Add New Swim Event </Link>
          </div>
        </Paper>
        <div style={{float: 'left', width:'66%', height: '90%'}}>
          <SwimMap {...this.props}/>          
        </div>
        <div style={{float: 'right', width:'33%', margin: '0, auto', height: '90%', overflow: 'auto'}}>
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