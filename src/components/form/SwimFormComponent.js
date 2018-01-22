import React, { Component } from 'react'
import LocationFieldComponent from './../autocomplete/LocationFieldComponent'
import { Control, Form } from 'react-redux-form'
import CustomSelectComponent from './CustomSelectComponent'
//material ui
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import Paper from 'material-ui/Paper'

class SwimFormComponent extends Component {
  
  goBack = () => this.props.history.push('/');

  autoComplete = (props) => {
    return(
        <LocationFieldComponent {...props} />
    );
  }
  

  customTextField = (props) => {
      return (
          <TextField
              hintText={props.hintText}
              floatingLabelText= {props.floatingLabelText}
              {...props}
          />
      );
  }

  render = () => {
    console.log('components says swimToEdit is : ' + this.props.swimToEdit);
    return (
        <div>
            <AppBar
                title={<span >Add New Swim Event</span>}
                iconElementLeft={<IconButton><NavigationClose onClick={this.goBack}/></IconButton>}
            />
            <Form model="swimToEdit" onSubmit={(s) => this.props.handleSubmit(s)}>
                <Paper className={'add-new-swim-form'} style={{margin: '20px', padding: '20px',}}>

                    <Control.text model="swimToEdit.competition" />
                    <Control.text model="competition" />
                    <Control.text model=".competition" />
                    <Control model="swimToEdit.competition" component={this.customTextField} 
                      floatingLabelText ="Venue Name"  hintText= "e.g. Swim the Island" /><br/>

                    <Control model="swimToEdit.month" component={CustomSelectComponent} 
                      floatingLabelText="Month" /> <br/>

                    <Control model="swimToEdit.distance" component={this.customTextField} 
                      floatingLabelText ="In meters, separated by comma"  hintText= "e.g. 500, 3500, 5000" /><br/>

                    <Control.custom model="swimToEdit.location" component={this.autoComplete} 
                      mapProps={{ onLocationSelected: (props) => props.onChange }}/><br/>

                    <Control model="swimToEdit.link" component={this.customTextField} 
                      floatingLabelText ="Website" hintText="Url" /><br/>

                    <FlatButton style={{marginTop:'50px'}} primary={true} type="submit">
                        Submit
                    </FlatButton>
                    <FlatButton primary={true} onClick={this.goBack}>
                        Cancel
                    </FlatButton>
                </Paper>
            </Form>
        </div>
      );
    }
};

export default SwimFormComponent;