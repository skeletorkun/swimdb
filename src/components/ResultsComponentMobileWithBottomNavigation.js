import React from 'react'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import SwimMap from './SwimMap'

class ResultsComponentMobile extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {

        const mapStyle = {height: '100%', margin: '0.5%'};
        const listStyle = {margin: '0, auto', height: '85%', overflow: 'auto'};

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
        return (
            <div style={{height: '100%', width: '100%', overflow: 'hidden'}}>
                <BottomNavigation
                    value={this.state.value}
                    onChange={this.handleChange}
                    showLabels
                >
                    <BottomNavigationAction
                        label="Map"
                        icon={<MapIcon/>}
                    >
                        <SwimMap {...this.props} />
                    </BottomNavigationAction>
                    <BottomNavigationAction
                        label="List"
                        icon={<ListIcon/>}
                    >

                    </BottomNavigationAction>
                </BottomNavigation>
                <Compo/>
            </div>
        );
    }
}

export default ResultsComponentMobile;