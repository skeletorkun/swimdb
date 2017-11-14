import React, { Component } from 'react'
import { GuestContainer } from './GuestContainer'
import { isLoaded, isEmpty } from 'react-redux-firebase'

const UserDetails = (props) => (
    <div> 
        <p> { props.auth.displayName }</p>
        <img alt='' src={props.auth.photoURL} width='50px'/>        
    </div>
);

const UserContainer = (props) => {
    
    const userDetails = UserDetails(props);
    return (
        <div> 
            { userDetails }
            <button onClick={() => props.firebase.logout()}> Sign out</button>
        </div>
    )
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