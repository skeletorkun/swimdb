import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, isEmpty, isLoaded} from 'react-redux-firebase'
import MainComponent from './MainComponent'
import * as actionCreators from './../actions/actions'
import {getFilteredDataRows} from './../selectors/dataSelector'
import PropTypes from "prop-types";

let Main = (props) => {
    return <MainComponent {...props}/>;
};

Main.propTypes = {
    data: PropTypes.object,
    firebase: PropTypes.object
};

function mapStateToProps(state) {

    const fb = state.firebase;
    const data = fb.data.data;
    const auth = fb.auth;
    return {
        auth: auth,
        profile: fb.profile,
        filters: state.filters,
        dialogState: state.dialogState,
        filteredData: getFilteredDataRows(data, state.filters),
        selectedId: state.selectedId,
        isDataLoaded: isLoaded(data),
        isDataEmpty: isEmpty(data),
        hasAuth: isLoaded(auth) && !isEmpty(auth),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign with Firebase
Main = firebaseConnect([
    'data'
])(Main);

// enrich and reassign
Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;