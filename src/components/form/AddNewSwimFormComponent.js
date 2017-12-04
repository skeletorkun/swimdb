import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Control, Form } from 'react-redux-form'
import { Redirect } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import LocationFieldComponent, { getCountryFromAddress } from './../autocomplete/LocationFieldComponent'
import * as actionCreators from './../../actions/actions'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

const FormComponent = (props) => {

    const autoComplete = (props) => {
        return(
            <LocationFieldComponent {...props} />
        );
    };

    const customTextField = (props) => {        
        return (
            <TextField
                hintText={props.hintText}
                floatingLabelText= {props.floatingLabelText}
                {...props}
            />
        );
    }

    const customDatePicker = (props) => {
        
        const today = new Date();
        return(
            <DatePicker
                floatingLabelText={props.floatingLabelText}
                disableYearSelection={true}
                onChange={(first, newDate) => props.onChange(newDate.toLocaleDateString("en-US"))}
                minDate={today}
            />
        )
    }

    const goBack = () => props.history.push('/');

    return (
        <div>
            <AppBar
                title={<span >Add New Swim Event</span>}
                iconElementLeft={<IconButton><NavigationClose onClick={goBack}/></IconButton>}
            />
            <Form model="form.swimToAdd" onSubmit={(s) => props.handleSubmit(s)}>
                <Paper  className={'add-new-swim-form'} style={{margin: '20px', padding: '20px',}}>
                    <Control model="swimToAdd.competition" component={customTextField} floatingLabelText ="Venue Name"  hintText= "e.g. Swim the Island" /><br/>
                    <Control model="swimToAdd.date" component={customDatePicker} floatingLabelText="Date" /><br/>

                    <Control model="swimToAdd.distance" component={customTextField} floatingLabelText ="Distance (in meters)"  hintText= "e.g. 3500" /><br/>
                    <Control.custom model="swimToAdd.location" component={autoComplete} mapProps={{ onLocationSelected: (props) => props.onChange }}/><br/>
                    
                    <Control model="swimToAdd.link" component={customTextField} floatingLabelText ="Website"  hintText="Url" /><br/>
                    
                    <FlatButton style={{marginTop:'50px'}} primary={true} type="submit">
                        Submit              
                    </FlatButton>
                    <FlatButton primary={true} onClick={goBack}>
                        Cancel
                    </FlatButton>
                </Paper>
            </Form>
        </div>
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
            
        console.log('Redirecting to /')  
        this.props.history.push('/')
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