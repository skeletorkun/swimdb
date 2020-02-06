import React from 'react'
import PropTypes from 'prop-types'
import GoogleButton from 'react-google-button'
import {isMobile} from 'react-device-detect';
import IconButton from "@material-ui/core/IconButton";
import IconAccountCircle from '@material-ui/icons/AccountCircle'

export const GuestContainer = (props) => {

    const Compo = () => isMobile ?
        <IconButton  style={{ color: 'white' }} tooltip="Login" >
            <IconAccountCircle/>
        </IconButton>: <GoogleButton/>;
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
