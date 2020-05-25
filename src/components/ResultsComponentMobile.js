import React from 'react'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'

import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import SwimMap from './SwimMap'
import Button from "@material-ui/core/Button/Button";

class ResultsComponentMobile extends React.Component {
  state = {
    value: 1,
  };

  toggle = () => {
    const newVal = (this.state.value + 1) % 2;
    this.setState({ value: newVal });
  };

  render() {

    const mapStyle = { height: '100%', margin: '0.5%' };
    const listStyle = { margin: '0, auto', height: '85%', overflow: 'auto' };

    const map = () => (
      <div className='swim-map-container' style={mapStyle}>
        <SwimMap {...this.props} />
      </div>
    );
    const list = () => (
      <div className='competition-list-container' style={listStyle}>
        <CompetitionTableComponent {...this.props} />
      </div>
    );

    const Compo = this.state.value === 0 ? map : list;
    const ButtonIcon = () => this.state.value === 0 ? <ListIcon/> : <MapIcon/>;

    return (
      <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
        <Compo/>

        <Button variant="fab"
                mini color="primary"
                className="map-list-switcher-floating-button"
                style={{ position: 'fixed', left: '20px', top: '80px' }}
                onClick={this.toggle}>
          <ButtonIcon/>
        </Button>
      </div>
    );
  }
}

export default ResultsComponentMobile;