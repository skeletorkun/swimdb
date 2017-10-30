import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SwimApp from './SwimApp'
import * as actionCreators from './../actions/actions'

class App extends Component{

    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return <SwimApp {...this.props}/>;
    }
}

function mapStateToProps(state){
    return {
        filters : state.filters,
        filteredData : state.filteredData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;