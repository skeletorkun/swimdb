import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect} from 'react-redux-firebase'
import { updateFilters } from './../../actions/actions'
import FiltersContainer from './FiltersContainer'

//material ui
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import NavigationClose from '@material-ui/icons/Close'

class FiltersForm extends Component {

    goBack = () => this.props.history.push('/');

    render = () => {
        let title = "Filters";
        return (
            <div >
                <AppBar
                    title={<span >{title}</span>}
                    iconElementLeft={<IconButton><NavigationClose onClick={this.goBack} /></IconButton>}
                />

                <div style={{ padding: '20px' }}>
                    <FiltersContainer {...this.props} />
                </div>
            </div>
        );
    }
};


// add firebase
FiltersForm = firebaseConnect()(FiltersForm);

function mapStateToProps(state) {
    return {
        filters : state.filters,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateFilters }, dispatch);
}

// enrich and reassign
FiltersForm = connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

export default FiltersForm;