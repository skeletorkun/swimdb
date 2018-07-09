import React, { Component } from 'react'
import { GuestContainer } from './GuestContainer'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import ReactGA from 'react-ga'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

class UserContainer extends Component {
    
    render = () => {

        // track user
        ReactGA.set({ userId: this.props.profile.email });

        return (
            <div>
                <IconButton
                    color="inherit"
                >
                    <Avatar alt='' src={this.props.profile.avatarUrl} width='50px' />
                </IconButton>
            </div>
        );
    }
};

class UserInfoContainer extends Component {
    render() {
        const auth = this.props.auth;
        if (isEmpty(auth) || !isLoaded(auth)) {
            return GuestContainer(this.props);
        }
        else {
            return <UserContainer {...this.props} />
        }
    }

}

export default UserInfoContainer;