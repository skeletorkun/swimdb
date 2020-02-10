import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import UserInfoComponent from './user/UserInfoComponent'
import TemporaryDrawer from './drawer/TemporaryDrawer'
import DeleteDialog from "./dialogs/DeleteDialog";
import {FiltersLink} from "./filters/FiltersLink";

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
        this.setState({drawerOpen: !this.state.drawerOpen});
    };

    render() {
        const {classes} = this.props;
        const {drawerOpen} = this.state;
        const showingDialog = this.props.dialogState.modalProps.open;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <TemporaryDrawer isOpen={drawerOpen} toggleDrawer={this.toggleDrawer}/>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {this.props.title}
                        </Typography>
                        <FiltersLink {...this.props}/>
                        <UserInfoComponent {...this.props}/>
                        {showingDialog && <DeleteDialog {...this.props.dialogState}
                                                        onConfirm={this.props.deleteCard}
                                                        hideDeleteDialog={this.props.hideDeleteDialog}/>}
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
