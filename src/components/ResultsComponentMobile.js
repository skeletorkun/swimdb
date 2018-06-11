import React from 'react'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'
import { BottomNavigation, BottomNavigationItem } from '@material-ui/core/BottomNavigation'

import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import SwimMap from './SwimMap'

class ResultsComponentMobile extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

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

        const Compo = this.state.selectedIndex === 0 ? map : list;
        return (
            <div style={{ height: '100%', width: '100%', overflow: 'hidden'}}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Map"
                        icon={<MapIcon />}
                        onClick={() => this.select(0)}
                    >
                        <SwimMap {...this.props} />
                    </BottomNavigationItem>
                    <BottomNavigationItem
                        label="List"
                        icon={<ListIcon />}
                        onClick={() => this.select(1)}
                    >

                    </BottomNavigationItem>
                </BottomNavigation>
                <Compo />
                
            </div >
        );
    }
}

export default ResultsComponentMobile;