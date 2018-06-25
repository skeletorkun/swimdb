import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { DrawerListItems } from './DrawerListItems'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
};



class TemporaryDrawer extends React.Component {


    render() {
        const { classes, toggleDrawer, isOpen } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                </List>
            </div>
        );

        console.log(' isOpen ' + isOpen);
        return (
            <div>
                <IconButton className={classes.menuButton} color="inherit" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={isOpen} onClose={toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);