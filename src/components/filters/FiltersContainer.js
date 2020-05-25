import React from 'react'
import PropTypes from 'prop-types'
import FiltersComponent from './FiltersComponent'

class FiltersContainer extends React.Component {

    handleChange(value, field) {
        let filter = {};
        filter[field] = value;
        this.props.updateFilters(filter);
    }

    render() {
        return (
            <div className='filters-container-big' >
                <FiltersComponent onChange={(value, field) => this.handleChange(value, field)} filters={this.props.filters}/>
            </div>
        );
    }
}

FiltersContainer.propTypes = {
    updateFilters: PropTypes.func.isRequired
};

export default FiltersContainer;