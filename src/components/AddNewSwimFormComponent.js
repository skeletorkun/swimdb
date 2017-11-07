import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './../actions/actions'
import { Control, LocalForm } from 'react-redux-form'

class AddNewSwimFormComponent extends Component {

    handleSubmit = (swim) => {
        this.props.addSwim(swim);
        this.props.history.push('/');
    }

    render = () => {
        return (
            <LocalForm onSubmit={(s) => this.handleSubmit(s)}>
                <div className="field">
                    <label>Competition</label>
                    <Control.text model=".competition" placeholder="Competition Name" />
                </div>
                <div className="field">
                    <label>Date</label>
                    <Control.text model=".date" placeholder="Date" defaultValue="05-Jun-2018"/>
                </div>
                
                <div className="field">
                    <label>Distance</label>
                    <Control.text model=".distance" placeholder="Distance" defaultValue="3500"/>
                </div>
                
                <div className="field">
                    <label>Location</label>
                    <Control.text model=".location" placeholder="Location" />
                </div>
                
                <button type="submit">
                    Submit
                </button>
                <Control.reset model="swim" className="secondary">
                    Clear Values
                </Control.reset>
            </LocalForm>
        )
    };
}

function mapStateToProps(state){
    return {
        swim : state.swimToAdd,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

// enrich and reassign
AddNewSwimFormComponent = connect(mapStateToProps, mapDispatchToProps)(AddNewSwimFormComponent)

export default AddNewSwimFormComponent;