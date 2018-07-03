import React, { Component } from 'react'
import LocationFieldComponent from './../filters/LocationFieldComponent'
import { Control, Form} from 'react-redux-form'
import CustomSelectComponent from './CustomSelectComponent'
//material ui
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import NavigationClose from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Paper from '@material-ui/core/Paper'

class SwimFormComponent extends Component {

    goBack = () => this.props.history.push('/');

    autoComplete = (props) => {
        return (
            <LocationFieldComponent {...props} />
        );
    }

    customTextField = (props) => {
        return (
            <TextField
                hintText={props.hintText}
                floatingLabelText={props.floatingLabelText}
                {...props}
            />
        );
    }

    render = () => {
        let title = this.props.location.pathname.includes('add') ? "Add New Swim" : "Edit Swim";
        return (
            <div>
                <AppBar
                    title={<span >{title}</span>}
                    iconElementLeft={<IconButton><NavigationClose onClick={this.goBack} /></IconButton>}
                />
                <Form model="formData.swimToEdit" onSubmit={(s) => this.props.handleSubmit(s)}>
                    <Paper className={'add-new-swim-form'} style={{ margin: '20px', padding: '20px', }}>

                        <Control model=".competition" component={this.customTextField}
                            floatingLabelText="Venue Name" hintText="e.g. Swim the Island" /><br />

                        <Control model=".month" component={CustomSelectComponent}
                            mapProps={{ value: (props) => props.viewValue }}
                            floatingLabelText="Month" /> <br />

                        <Control model=".distance" component={this.customTextField}
                            floatingLabelText="In meters, separated by comma" hintText="e.g. 500, 3500, 5000" /><br />

                        <Control.custom model=".location" component={this.autoComplete}
                            mapProps={{ onLocationSelected: (props) => props.onChange,  value: (props) => props.viewValue  }} /><br />

                        <Control model=".link" component={this.customTextField}
                            floatingLabelText="Website" hintText="Url" /><br />

                        <Button style={{ marginTop: '50px' }} primary={true} type="submit">
                            Submit
                        </Button>
                        <Button primary={true} onClick={this.goBack}>
                            Cancel
                    </Button>
                    </Paper>
                </Form>
            </div>
        );
    }
};

export default SwimFormComponent;