import React, {Component} from 'react'
import GuestComponent from './GuestComponent'
import {isEmpty, isLoaded} from 'react-redux-firebase'
import ReactGA from 'react-ga'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

class UserComponent extends Component {
    
    render = () => {

        // track user
        ReactGA.set({ userId: this.props.profile.email });

        return (
            <div>
                <IconButton
                    color="inherit"
                >
                    <Avatar alt='' src={this.props.profile.avatarUrl} width='50px' onClick={() => this.props.firebase.logout()}/>
                </IconButton>
            </div>
        );
    }
};

class UserInfoComponent extends Component {
    render() {
        const auth = this.props.auth;
        if (isEmpty(auth) || !isLoaded(auth)) {
            return <GuestComponent {...this.props} />
        }
        else {
            return <UserComponent {...this.props} />
        }
    }

}

export default UserInfoComponent;