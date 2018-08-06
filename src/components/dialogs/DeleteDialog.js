import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/core/Button'

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
      <Button
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <Button
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