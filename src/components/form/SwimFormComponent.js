import React, { Component } from 'react'
import LocationFieldComponent from './../filters/LocationFieldComponent'
import { Control, Form } from 'react-redux-form'
import CustomSelectComponent from './CustomSelectComponent'
//material ui
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import NavigationClose from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = {
    flex: {
        flex: 1,
    }
};


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
                id="with-placeholder"
                label={props.label}
                placeholder={props.placeholder}
                style={{
                    width: 250,
                }}
                margin="normal"
                {...props}
            />
        );
    }

    render = () => {

        const { classes } = this.props;

        let title = this.props.location.pathname.includes('add') ? "Add New Swim" : "Edit Swim";
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={{ color: 'white' }}><NavigationClose onClick={this.goBack} /></IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Form model="formData.swimToEdit" onSubmit={(s) => this.props.handleSubmit(s)}>
                    <Paper style={{ margin: '20px', padding: '20px', }}>

                        <Control model=".competition" component={this.customTextField}
                            label="Venue Name" placeholder="e.g. Swim the Island" /><br />

                        <Control model=".month" component={CustomSelectComponent}
                            mapProps={{ value: (props) => props.viewValue }}
                            label="Month" /> <br />

                        <Control model=".distance" component={this.customTextField}
                            label="In meters (comma separated)" placeholder="e.g. 500, 3500, 5000" /><br />

                        <Control.custom model=".location" component={this.autoComplete}
                            mapProps={{ onSelectionChanged: (props) => props.onChange, onCleared: (props) => props.onChange,  value: (props) => props.viewValue}} /><br />

                        <Control model=".link" component={this.customTextField}
                            label="Website" placeholder="Url" /><br />

                        <Button style={{ marginTop: '50px' }} color="primary" type="submit">
                            Submit
                        </Button>
                        <Button color="primary" onClick={this.goBack}>
                            Cancel
                    </Button>
                    </Paper>
                </Form>
            </div>
        );
    }
};

export default withStyles(styles)(SwimFormComponent);