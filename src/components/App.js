import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './../actions/actions'

import SwimApp from './SwimApp'

function mapStateToProps(state){
    return {
        filters : state.filters,
        data : state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(SwimApp)

export default App;