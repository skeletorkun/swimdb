import React from 'react'
import PropTypes from 'prop-types'
import FiltersContainer from './filters/FiltersContainer'
import AddNewLinkDesktop from './AddNewLinkDesktop'
import AddNewLinkMobile from './AddNewLinkMobile'
import MenuAppBar from './MenuAppBar'
import ResultsComponentDesktop from './ResultsComponentDesktop'
import ResultsComponentMobile from './ResultsComponentMobile'
import {isMobile} from 'react-device-detect';

import './Main.css'


class MainComponent extends React.Component {

    render() {

        const title = isMobile ? "Find Swim" : "Find Swim - Open Water Swimming Database";
        const ResultsComponent = isMobile ? ResultsComponentMobile : ResultsComponentDesktop;

        return (
            <div className={'main-compo'}>
                <MenuAppBar {...this.props} title={title}/>
                <div style={{display: 'flex',  marginTop: '10px', marginBottom: '10px'}}>
                    <FiltersContainer {...this.props}/>
                    <AddNewLinkDesktop addCardRequest={this.props.addCardRequest} history={this.props.history}/>
                </div>
                <ResultsComponent {...this.props}/>
                <AddNewLinkMobile addCardRequest={this.props.addCardRequest} history={this.props.history}/>
            </div>
        );
    }
}

MainComponent.propTypes = {
    filters: PropTypes.object.isRequired,
    filteredData: PropTypes.array.isRequired,
    updateFilters: PropTypes.func.isRequired
};

export default MainComponent;