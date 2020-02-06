import React from 'react'
import PropTypes from 'prop-types'
import FiltersContainer from './filters/FiltersContainer'
import AddNewLink from './AddNewLink'
import MenuAppBar from './MenuAppBar'
import ResultsComponentDesktop from './ResultsComponentDesktop'
import ResultsComponentMobile from './ResultsComponentMobile'
import './Main.css'


class MainComponent extends React.Component {

    render() {

        const isMobile = window.innerWidth <= 500;
        const title = isMobile  ? "Find Swim" : "Find Swim - Open Water Swimming Database";
        const ResultsComponent = isMobile ? ResultsComponentMobile : ResultsComponentDesktop;

        return (
            <div style={{height: '100%', width: '100%', overflow: 'hidden'}}>
                <MenuAppBar {...this.props} title={title} />
                <AddNewLink addCardRequest={this.props.addCardRequest} history={this.props.history}/>
                <div className='filters-container-big' >
                    <FiltersContainer {...this.props} />
                </div>
                <ResultsComponent  {...this.props} />
            </div>
        );
    }
}

MainComponent.propTypes = {
    filters: PropTypes.object.isRequired,
    filteredData: PropTypes.array.isRequired,
    updateFilters: PropTypes.func.isRequired
}

export default MainComponent;