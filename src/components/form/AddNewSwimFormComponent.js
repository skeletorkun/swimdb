import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Control, Form } from 'react-redux-form'
import { Redirect } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import LocationFieldComponent, { getCountryFromAddress } from './../autocomplete/LocationFieldComponent'
import * as actionCreators from './../../actions/actions'

const FormComponent = (props) => {

    const autoComplete = (props) => {
        return(
            <LocationFieldComponent {...props} />
        );
    };

    return (
        <Form model="form.swimToAdd" onSubmit={(s) => props.handleSubmit(s)}>
            <div className="field">
                <label>Name</label>
                <Control.text model="swimToAdd.competition" placeholder="" />
            </div>
            <div className="field">
                <label>Date</label>
                <Control.text model="swimToAdd.date" placeholder="dd/mm/yyyy" />
            </div>
            
            <div className="field">
                <label>Distance (in meters)</label>
                <Control.text model="swimToAdd.distance" placeholder="e.g. 3500"/>
            </div>
            
            <div className="field">
                <label>Location</label>
                <Control.custom model="swimToAdd.location" component={autoComplete} mapProps={{ onLocationSelected: (props) => props.onChange }}/>
            </div> 
            
            <div className="field">
                <label>Website</label>
                <Control.text model="swimToAdd.link" placeholder="Url" />
            </div> 
            
            <button type="submit">
                Submit
            </button>
            <Control.reset model="swimToAdd" className="secondary">
                Clear Values
            </Control.reset>
        </Form>
    )
};

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
        if(!swim.location) {
            console.error('Something went wrong with the autocomplete');
            return;
        }
        
        console.log('handle submit for a swim ' + JSON.stringify(swim));
        const newSwim = Object.assign({}, swim);
        newSwim.location = this.getAddress(swim.location); 
        console.log('handleSubmit for a swim ' + JSON.stringify(newSwim));
        this.props.addSwim(newSwim);
            
        // console.log('Redirecting to /')  
        // this.props.history.push('/')
    }

    render = () => {
    
        if(!this.props.hasAuth){
            return <Redirect to={{ pathname: '/login', state: { from: this.props.location }}}/>
        }
        else{
            return <FormComponent {...this.props} handleSubmit={ this.handleSubmit } />;
        }
        
    };
}

// add firebase
AddNewSwimFormContainer = firebaseConnect()(AddNewSwimFormContainer);

function mapStateToProps(state){
    const auth = state.firebase.auth;
    return {
        swimToAdd : state.swimToAdd,
        hasAuth: isLoaded(auth) && !isEmpty(auth)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign
AddNewSwimFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewSwimFormContainer)

export default AddNewSwimFormContainer;