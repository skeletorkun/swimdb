import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";


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
    };

    render() {

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    keepMounted
                >
                    <DialogTitle>
                        {"Confirm Delete Swim"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this venue?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleConfirm} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}