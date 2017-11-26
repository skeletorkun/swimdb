import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { GuestContainer } from './GuestContainer'

class LoginContainer extends Component {
   
    render(){    
        const loginPageContent = GuestContainer(this.props);
        if(this.props.hasAuth){
            return <Redirect to={{ pathname: '/', state: { from: this.props.location }}}/>
        }
        else{
            return loginPageContent;
        } 
    }    
}

LoginContainer.propTypes = {
    hasAuth : PropTypes.bool,    
}

function mapStateToProps(state){
    const auth = state.firebase.auth;
    return {
        firebase : state.firebase,        
        hasAuth : isLoaded(auth) && !isEmpty(auth)
    }
}
// add firebase
LoginContainer = firebaseConnect()(LoginContainer);

// enrich and reassign
LoginContainer = connect(mapStateToProps)(LoginContainer)

export default LoginContainer;