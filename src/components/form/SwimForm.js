import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCountryFromAddress } from './../autocomplete/LocationFieldComponent'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import SwimFormComponent from './SwimFormComponent'
import { updateSwim, addSwim } from './../../actions/formActions'

class SwimForm extends Component {

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

        if (swim.id) {
            //update
            this.props.updateSwim(swim);
        }
        else {
            //new swim
            const newSwim = Object.assign({}, swim);
            newSwim.location = this.getAddress(swim.location);
            this.props.addSwim(newSwim);
        }

        console.log('Redirecting to /')
        this.props.history.push('/')
    }

    render = () => {

        if (!this.props.hasAuth) {
            return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
        else {
            return <SwimFormComponent {...this.props} handleSubmit={this.handleSubmit} />;
        }

    };
}

// add firebase
SwimForm = firebaseConnect()(SwimForm);

function mapStateToProps(state) {
    const auth = state.firebase.auth;
    return {
        swimToEdit: state.swimToEdit,
        hasAuth: isLoaded(auth) && !isEmpty(auth)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateSwim, addSwim }, dispatch);
}

// enrich and reassign
SwimForm = connect(mapStateToProps, mapDispatchToProps)(SwimForm)

export default SwimForm;