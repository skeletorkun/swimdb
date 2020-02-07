import React from 'react'
import PropTypes from 'prop-types'
import GoogleButton from 'react-google-button'
import {isMobile} from 'react-device-detect';
import IconButton from "@material-ui/core/IconButton";
import IconAccountCircle from '@material-ui/icons/AccountCircle'

export const GuestContainer = (props) => {

    const Compo = (props) => isMobile ?
        <IconButton  style={{ color: 'white' }} tooltip="Login" {...props}>
            <IconAccountCircle/>
        </IconButton>: <GoogleButton {...props}/>;
    return (
        <div>
            <Compo
                onClick={() => props.firebase.login({provider: 'google', type: 'popup'})}
            />
        </div>
    );
};

GuestContainer.propTypes = {
    firebase: PropTypes.object,
};
