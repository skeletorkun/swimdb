import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class DeleteDialog extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleConfirm = () => {
    this.handleClose();
    this.props.onConfirm();
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleConfirm}
      />,
    ];
    
    const visibility = this.props.isVisible;
    return (
      <div>
        <RaisedButton label="Delete" style={{float: 'right', display: visibility}} onClick={this.handleOpen} />
        <Dialog
          title="Confirm Delete Swim"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this venue?
        </Dialog>
      </div>
    );
  }
}