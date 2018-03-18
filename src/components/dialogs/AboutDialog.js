import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import IconHelp from 'material-ui/svg-icons/action/help-outline'
import {grey500} from 'material-ui/styles/colors';


export default class AboutDialog extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const message = "Together we will create the biggest open water swimming database in the world. \n" + 
    "Login to add the venues you know around you.\n" + 
    "Send us a feedback for any remarks.\n" + 
    "and have a great swim!";

    return (
      <div>
        <IconButton tooltip="About" onClick={this.handleOpen}  >
          <IconHelp color={grey500}/> 
        </IconButton>
        <Dialog
          title="Welcome to FindSwim.com!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        > 
        { message }
          </Dialog>
      </div>
    );
  }
}