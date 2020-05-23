import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firebaseConnect, isEmpty, isLoaded} from 'react-redux-firebase'
import PropTypes from 'prop-types'
import {LoginComponent} from './GuestComponent'

let LoginContainer = ({hasAuth, location, firebase}) => {

    if (hasAuth) {
        return <Redirect to={{pathname: '/', state: {from: location}}}/>
    } else {
        return <LoginComponent firebase={firebase}/>;
    }
};

LoginContainer.propTypes = {
    hasAuth: PropTypes.bool,
};

function mapStateToProps(state) {
    const auth = state.firebase.auth;
    return {
        firebase: state.firebase,
        hasAuth: isLoaded(auth) && !isEmpty(auth)
    }
}

// add firebase
LoginContainer = firebaseConnect()(LoginContainer);

// enrich and reassign
LoginContainer = connect(mapStateToProps)(LoginContainer);

export default LoginContainer;