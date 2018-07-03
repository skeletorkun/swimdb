import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import UserInfoContainer from './user/UserInfoContainer'
import TemporaryDrawer from './drawer/TemporaryDrawer'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        drawerOpen: false,
    };

    toggleDrawer = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    render() {
        const { classes } = this.props;
        const { drawerOpen } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <TemporaryDrawer isOpen={drawerOpen} toggleDrawer={this.toggleDrawer} />
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Find Swim
                        </Typography>
                        <UserInfoContainer {...this.props}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
