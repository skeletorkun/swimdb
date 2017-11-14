import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Control, Form } from 'react-redux-form'
import { Redirect } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import LocationAutocompleteComponent, { getCountryFromAddress } from './../autocomplete/LocationAutoCompleteComponent'
import * as actionCreators from './../../actions/actions'

class AddNewSwimFormComponent extends Component {

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

    autoComplete = (props) => {
        return(
            <LocationAutocompleteComponent {...props} />
        );
    };

    
    render = () => {

        const addNewSwimFormContainer = (props) => {
            return (
                <Form model="form.swimToAdd" onSubmit={(s) => this.handleSubmit(s)}>
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
                        <Control.custom model="swimToAdd.location" component={this.autoComplete} mapProps={{onLocationSelected: (props) => props.onChange }}/>
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
        
        if(!this.props.hasAuth){
            return <Redirect to={{ pathname: '/login', state: { from: this.props.location }}}/>
        }
        else{
            return addNewSwimFormContainer(this.props);
        }
        
    };
}

// add firebase
AddNewSwimFormComponent = firebaseConnect()(AddNewSwimFormComponent);

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
AddNewSwimFormComponent = connect(mapStateToProps, mapDispatchToProps)(AddNewSwimFormComponent)

export default AddNewSwimFormComponent;