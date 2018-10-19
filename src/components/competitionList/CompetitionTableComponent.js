import React from 'react'
import PropTypes from 'prop-types'
import CompetitionCard from './CompetitionCard'
import Typography from '@material-ui/core/Typography'

import grey from '@material-ui/core/colors/grey'


class CompetitionTableComponent extends React.Component {

    render() {

        if (!this.props.isDataLoaded) {
            return <Typography variant="title" gutterBottom>Loading...</Typography>
        }

        const data = this.props.filteredData || [];

        if (data.length === 0) {
            return <Typography variant="title" >No Competitions found</Typography>
        }

        const listItems = data.map((swim) =>
            <li key={swim.id}>
                <CompetitionCard
                    data={swim}
                    showDeleteDialog={this.props.showDeleteDialog}
                    flagCard={this.props.flagCard}
                    editCard={this.props.editCard}
                    hasAuth={this.props.hasAuth}
                    isAdmin={this.props.profile.isAdmin}
                />
            </li>
        );

        const title = "Showing " + data.length + " venues";
        const titleStyle = {
            color: grey.A700,
            fontSize: 14,
            textAlign: 'right',
            paddingRight: '20px',
            fontFamily: 'Roboto, sans-serif'
        };
        console.log("totals " + title);
        return (
            <div>
                <p style={titleStyle}>{title}</p>
                <ul style={{listStyle: 'none', paddingLeft: 0}}>{listItems}</ul>
            </div>
        );
    }
}

CompetitionTableComponent.propTypes = {
    filteredData: PropTypes.array.isRequired,
    updateFilters: PropTypes.func.isRequired
};

export default CompetitionTableComponent;