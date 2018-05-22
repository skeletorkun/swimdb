import React from 'react'
import CompetitionTableComponent from './competitionList/CompetitionTableComponent'
import SwimMap from './SwimMap'

class ResultsComponentDesktop extends React.Component {

    render() {

        const mapStyle = { float: 'left', width: '66%', height: '85%', margin: '0.5%' };
        const listStyle = { float: 'right', width: '33%', margin: '0, auto', height: '85%', overflow: 'auto' };

        return (
            <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                <div className='swim-map-container' style={mapStyle}>
                    <SwimMap {...this.props} />
                </div>
                <div className='competition-list-container' style={listStyle}>
                    <CompetitionTableComponent {...this.props} />
                </div>
            </div>
        );
    }
}

export default ResultsComponentDesktop;