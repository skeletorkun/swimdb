import React, {Component} from 'react'
import LocationFieldComponent from './../filters/LocationFieldComponent'
import {Control, Form} from 'react-redux-form'
import CustomSelectComponent from './CustomSelectComponent'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import NavigationClose from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'
import Grid from "@material-ui/core/Grid/Grid";

const styles = {
    flex: {
        flex: 1,
    },
    form: {
        display: 'flex',
        margin: 30,
        padding: 35
    },

    formControl: {
        minWidth: 300,
    },
    buttons: {
        marginTop: 20,
        marginBottom: 10
    }
};


class SwimFormComponent extends Component {

    goBack = () => this.props.history.push('/');

    autoComplete = (props) => {
        return (
            <LocationFieldComponent {...props} />
        );
    };

    customTextField = (props) => {
        return (
            <TextField
                className={props.className}
                id="with-placeholder"
                label={props.label}
                placeholder={props.placeholder}
                margin="normal"
                {...props}
            />
        );
    };

    render = () => {

        const {classes} = this.props;

        let title = this.props.location.pathname.includes('add') ? "Add New Swim" : "Edit Swim";
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={{color: 'white'}}><NavigationClose onClick={this.goBack}/></IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={16} justify={"center"}>
                    <Grid item>
                        <Paper className={classes.form}>
                            <Form model="formData.swimToEdit" onSubmit={(s) => this.props.handleSubmit(s)}
                            >
                                <Grid container spacing={16} direction={"column"}>
                                    <Grid container spacing={16} direction={"column"}>
                                        <Grid item>

                                            <Control model=".competition" component={this.customTextField}
                                                     className={classes.formControl}
                                                     label="Venue Name" placeholder="e.g. Swim the Island"/><br/>
                                        </Grid>

                                        <Grid item>

                                            <Control.custom model=".location" component={this.autoComplete}
                                                            customStyle={classes.formControl}
                                                            mapProps={{
                                                                onSelectionChanged: (props) => props.onChange,
                                                                onCleared: (props) => props.onChange,
                                                                value: (props) => props.viewValue
                                                            }}/><br/>
                                        </Grid>
                                        <Grid item>

                                            <Control model=".month" component={CustomSelectComponent}
                                                     className={classes.formControl}
                                                     mapProps={{value: (props) => props.viewValue}}
                                                     label="Month"/> <br/>
                                        </Grid>
                                        <Grid item>

                                            <Control model=".distance" component={this.customTextField}
                                                     className={classes.formControl}
                                                     label="In meters (comma separated)"
                                                     placeholder="e.g. 500, 3500, 5000"/><br/>
                                        </Grid>
                                        <Grid item>

                                            <Control model=".link" component={this.customTextField}
                                                     className={classes.formControl}
                                                     label="Website" placeholder="Url"/><br/>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className={classes.buttons}>
                                        <Button color="primary" type="submit">
                                            Submit
                                        </Button>
                                        <Button color="primary" onClick={this.goBack}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default withStyles(styles)(SwimFormComponent);