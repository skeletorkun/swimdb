import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import { DrawerListItems } from './DrawerListItems'


const styles = {
    list: {
        width: 250,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
};

class TemporaryDrawer extends React.Component {

    render() {
        const { classes, toggleDrawer, isOpen } = this.props;

        return (
            <div>
                <IconButton className={classes.menuButton} color="inherit" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={isOpen} onClose={toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        className={classes.list}
                        >
                        <List>{DrawerListItems}</List>
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