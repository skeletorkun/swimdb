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
                <FiltersComponent onChange={this.handleChange.bind(this)} filters={this.props.filters}/>
            </div>
        );
    }
}

FiltersContainer.propTypes = {
    updateFilters: PropTypes.func.isRequired
};

export default FiltersContainer;