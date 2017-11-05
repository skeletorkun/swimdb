import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './../actions/actions'
import { Control, LocalForm } from 'react-redux-form'

class AddNewSwimFormComponent extends Component {

    handleSubmit = (swim) => {
        this.props.addSwim(swim);
    }

    render = () => {
        return (
            <LocalForm onSubmit={(s) => this.handleSubmit(s)}>
                <div className="field">
                    <label>Competition</label>
                    <Control.text model=".competition" placeholder="Competition Name" />
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