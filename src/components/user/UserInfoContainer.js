import React, { Component } from 'react'
import { GuestContainer } from './GuestContainer'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const UserContainer = (props) => {
    
    return (
        <ToolbarGroup>
            <ToolbarTitle text={ props.profile.displayName } />
            <IconMenu
                {...props}
                    iconButtonElement={
                    <Avatar alt='' src={props.profile.avatarUrl} width='50px'/>   
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="About" />
                <MenuItem primaryText="Sign out" onClick={() => props.firebase.logout()} />
            </IconMenu>
        </ToolbarGroup>                
    );
};

class UserInfoContainer extends Component {
    render(){    
        const auth = this.props.auth;
        if(isEmpty(auth) || !isLoaded(auth)){
            return GuestContainer(this.props);    
        }
        else{
            return UserContainer(this.props);
        } 
    }
    
}

export default UserInfoContainer;