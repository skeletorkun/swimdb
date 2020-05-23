import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {updateFilters} from './../../actions/actions'
//material ui
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import NavigationClose from '@material-ui/icons/Close'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from '@material-ui/core'
import FiltersComponentMobile from "./FiltersComponentMobile";

const styles = {
    flex: {
        flex: 1,
    },
};

// todo change this with https://thoughtbot.com/blog/using-redux-with-react-hooks
class FiltersForm extends Component {

    goBack = () => this.props.history.push('/');

    render = () => {
        let title = "Filters";

        const {classes} = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={{color: 'white'}}><NavigationClose onClick={this.goBack}/></IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{padding: '20px'}}>
                    <FiltersComponentMobile {...this.props}/>
                </div>
            </div>
        );
    }
};


// add firebase
FiltersForm = firebaseConnect()(FiltersForm);

function mapStateToProps(state) {
    return {
        filters: state.filters,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateFilters}, dispatch);
}

// enrich and reassign
FiltersForm = connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

export default withStyles(styles)(FiltersForm);