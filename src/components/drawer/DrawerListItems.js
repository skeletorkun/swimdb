import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LoginIcon from '@material-ui/icons/PermIdentity'
import AboutIcon from '@material-ui/icons/Feedback'
import Divider from '@material-ui/core/Divider'

export const DrawerListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemIcon>
                <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
    </div>
);