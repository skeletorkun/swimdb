import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCountryFromAddress } from './../autocomplete/LocationFieldComponent'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { AddNewSwimFormComponent } from './AddNewSwimFormComponent'
import * as actionCreators from './../../actions/actions'

class AddNewSwimFormContainer extends Component {

    getAddress = (geolocation) => {
        const address = {};
        address.formatted_address = geolocation.formatted_address;
        address.latitude = geolocation.geometry.location.lat();
        address.longitude = geolocation.geometry.location.lng();
        address.place_id = geolocation.place_id;
        address.country = getCountryFromAddress(geolocation);
        return address;
    }

    handleSubmit = (swim) => {
        if (!swim.location) {
            console.error('Something went wrong with the autocomplete');
            return;
        }

        console.log('handle submit for a swim ' + JSON.stringify(swim));
        const newSwim = Object.assign({}, swim);
        newSwim.location = this.getAddress(swim.location);
        console.log('handleSubmit for a swim ' + JSON.stringify(newSwim));
        this.props.addSwim(newSwim);

        console.log('Redirecting to /')
        this.props.history.push('/')
    }

    render = () => {

        if (!this.props.hasAuth) {
            return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
        else {
            return <AddNewSwimFormComponent {...this.props} handleSubmit={this.handleSubmit} />;
        }

    };
}

// add firebase
AddNewSwimFormContainer = firebaseConnect()(AddNewSwimFormContainer);

function mapStateToProps(state) {
    const auth = state.firebase.auth;
    return {
        swimToAdd: state.swimToAdd,
        hasAuth: isLoaded(auth) && !isEmpty(auth)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign
AddNewSwimFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewSwimFormContainer)

export default AddNewSwimFormContainer;