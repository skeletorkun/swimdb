import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import SwimApp from './SwimApp'
import * as actionCreators from './../actions/actions'
import { getFilteredDataRows } from './../selectors/dataSelector'

class App extends Component{

    static propTypes = {
        data: PropTypes.object,
        firebase: PropTypes.object
    }

    render(){
        return <SwimApp {...this.props}/>;
    }
}

function mapStateToProps(state){
    const data = state.firebase.data.data;
    const auth = state.firebase.auth;
    return {
        auth: auth,
        profile: state.firebase.profile,
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
App = firebaseConnect([
    'data'
])(App)

// enrich and reassign
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;