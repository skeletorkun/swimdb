import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import MainComponent from './MainComponent'
import * as actionCreators from './../actions/actions'
import { getFilteredDataRows } from './../selectors/dataSelector'

class AppContainer extends Component{

    static propTypes = {
        data: PropTypes.object,
        firebase: PropTypes.object
    }

    render(){
        return <MainComponent {...this.props}/>;
    }
}

function mapStateToProps(state){
    
    const fb = state.firebase;
    const data = fb.data.data;    
    const auth = fb.auth;
    return {
        auth: auth,        
        profile: fb.profile,
        filters : state.filters,
        filteredData : getFilteredDataRows(data, state.filters),
        selectedId : state.selectedId,
        isDataLoaded : isLoaded(data),
        isDataEmpty : isEmpty(data),
        hasAuth : isLoaded(auth) && !isEmpty(auth)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign with Firebase
AppContainer = firebaseConnect([
    'data'
])(AppContainer)

// enrich and reassign
AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppContainer;