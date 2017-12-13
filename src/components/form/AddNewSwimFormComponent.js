import React, { Component } from 'react'
import LocationFieldComponent from './../autocomplete/LocationFieldComponent'
import { Control, Form } from 'react-redux-form'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export const AddNewSwimFormComponent = (props) => {

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

    class CustomSelect extends Component {
            
        months = ["January", "February", "March", "April", "May" ,"June", "July", "August" , "September", "October" , "November", "December"];
        
        state = {
          value: this.months[0],
        };

        handleChange = (event, index, value) => {
            this.setState({value});
            this.props.onChange(value);
        }

        render = () =>{

            return (
                <SelectField
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.value}
                    onChange={this.handleChange}
                    > 
                    { this.months.map(m => <MenuItem value={m} primaryText={m}/>)}
                </SelectField>
            )
        }
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
                    <Control model="swimToAdd.month" component={CustomSelect} floatingLabelText="Month" /> <br/>                    
                    <Control model="swimToAdd.distance" component={customTextField} floatingLabelText ="In meters, separated by comma"  hintText= "e.g. 500, 3500, 5000" /><br/>
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