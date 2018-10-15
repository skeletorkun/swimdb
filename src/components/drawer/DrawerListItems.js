import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LoginIcon from '@material-ui/icons/PermIdentity'
import Divider from '@material-ui/core/Divider'
import AboutDialog from "../dialogs/AboutDialog";

export const DrawerListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <LoginIcon/>
            </ListItemIcon>
            <ListItemText primary="Login"/>
        </ListItem>
        <Divider/>

        <AboutDialog/>
    </div>
);