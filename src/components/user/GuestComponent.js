import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {isMobile} from 'react-device-detect';
import IconButton from "@material-ui/core/IconButton";
import IconAccountCircle from '@material-ui/icons/AccountCircle'
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons"
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid/Grid";


export default class GuestComponent extends Component {

    state = {
        showingModal: false,
    };

    handleOpen = () => {
        this.setState({showingModal: true});
    };

    handleClose = () => {
        this.setState({showingModal: false});
    };

    render() {

        let firebase = this.props.firebase;

        const LoginButtonMobile = (props) =>
            <div>
                <IconButton style={{color: 'white'}}
                            variant="contained" tooltip="Login" {...props}>
                    <IconAccountCircle/>
                </IconButton>
            </div>;

        const LoginButtonDesktop = (props) =>
            <div style={{marginRight: '5px', float: 'right'}}>
                <Button variant="contained" color="primary"
                        {...props}>
                    Login
                </Button></div>;

        const LoginButton = () => isMobile ?
            <LoginButtonMobile onClick={this.handleOpen}/> :
            <LoginButtonDesktop  onClick={this.handleOpen}/>;

        return (
            <div>
                <LoginButton/>
                <Dialog
                    open={this.state.showingModal}
                    onClose={this.handleClose}
                    fullScreen={isMobile}
                    keepMounted
                >
                    <DialogTitle style={{textAlign: "center"}}>
                        {"Login"}
                    </DialogTitle>
                    <DialogContent>
                        <LoginComponent firebase={firebase}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}

export const LoginComponent = ({firebase}) =>
    <div style={{flex: '1', marginTop:'100px'}}>
        <Grid container spacing={16} justify={"center"} alignItems="center">
            <Grid item>
                <Grid container spacing={16} direction={"column"} alignItems="center">
                    <Grid item>
                        <GoogleLoginButton onClick={() => firebase.login({provider: 'google', type: 'popup'})}
                        />

                    </Grid>
                    <Grid item>
                        <FacebookLoginButton
                            onClick={() => firebase.login({provider: 'facebook', type: 'popup'})}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
GuestComponent.propTypes = {
    firebase: PropTypes.object,
};
