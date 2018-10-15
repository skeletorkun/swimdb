import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import AboutIcon from '@material-ui/icons/Feedback'
import ListItem from "@material-ui/core/ListItem/ListItem";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
        return (

            <ListItem button>
                <ListItemIcon>
                    <AboutIcon/>
                </ListItemIcon>
                <ListItemText primary="About" onClick={this.handleOpen}/>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    keepMounted
                >
                    <DialogTitle>
                        {"Welcome to FindSwim.com!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                            Let's build the biggest open water swimming database in the world! <br/>
                            <br/>
                            * Login to add the venues you know <br/>
                            * Send us a feedback <br/>
                            * HAVE A GREAT SWIM! <br/>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </ListItem>
        );
    }
}