import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class DeleteDialog extends Component {
  state = {
    open: this.props.modalProps.open || false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    this.props.hideDeleteDialog();
  };

  handleConfirm = () => {
    this.handleClose();
    this.props.onConfirm(this.props.modalProps.swimId);
    this.props.hideDeleteDialog();
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
    
    return (
      <div>
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