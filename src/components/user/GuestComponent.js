import React, {useState} from 'react'
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


export default function GuestComponent({firebase}) {

    const [showingModal, setShowingModal] = useState(false);

    const handleOpen = () => {
        setShowingModal(true);
    };

    const handleClose = () => {
        setShowingModal(false);
    };

    const LoginButtonMobile = () =>
        <div>
            <IconButton style={{color: 'white'}}
                        variant="contained" tooltip="Login" onClick={handleOpen}>
                <IconAccountCircle/>
            </IconButton>
        </div>;

    const LoginButtonDesktop = () =>
        <div style={{marginRight: '5px', float: 'right'}}>
            <Button variant="contained" color="primary" onClick={handleOpen}
            >
                Login
            </Button></div>;

    const LoginButton = () => isMobile ?
        <LoginButtonMobile /> :
        <LoginButtonDesktop />;

    return (
        <div>
            <LoginButton/>
            <Dialog
                open={showingModal}
                onClose={handleClose}
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
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export const LoginComponent = ({firebase}) =>
    <div style={{flex: '1', marginTop: '100px'}}>
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
    </div>;


GuestComponent.propTypes = {
    firebase: PropTypes.object,
};
