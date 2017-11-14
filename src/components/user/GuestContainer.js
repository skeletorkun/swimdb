import React from 'react'
import GoogleButton from 'react-google-button'
import PropTypes from 'prop-types'

export const GuestContainer = (props) => {    
    return (
        <div>         
            <GoogleButton
                onClick={() => props.firebase.login({ provider: 'google', type: 'popup' })}
            />
        </div>
    );    
};

GuestContainer.propTypes = {
    firebase: PropTypes.object,
}
