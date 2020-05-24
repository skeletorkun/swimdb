import React, {useState} from 'react'
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

let MenuAppBar = (props) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const showingDialog = props.dialogState.modalProps.open;

    return (
        <div className={props.classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <TemporaryDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer}/>
                    <Typography variant="title" color="inherit" className={props.classes.flex}>
                        {props.title}
                    </Typography>
                    <FiltersLink {...props}/>
                    <UserInfoComponent {...props}/>
                    {showingDialog && <DeleteDialog {...props.dialogState}
                                                    onConfirm={props.deleteCard}
                                                    hideDeleteDialog={props.hideDeleteDialog}/>}
                </Toolbar>
            </AppBar>
        </div>
    );
};

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
