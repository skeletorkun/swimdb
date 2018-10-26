import React from 'react'
import LocationFieldComponent, {getCountryFromAddress} from '../filters/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'
import {withStyles} from '@material-ui/core/styles'
import CustomSelectComponent from "../form/CustomSelectComponent";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        marginLeft: 10,
    },
    formControl: {
        minWidth: 120,
        maxWidth: 250,
        padding: 0,
    }
});

class FiltersComponent extends React.Component {

    state = {
        location: this.props.filters.location,
        distance: this.props.filters.distance,
        month: this.props.filters.month,
    };

    handleLocationSelected = (value) => {
        const country = getCountryFromAddress(value);
        this.props.onChange(country, 'location');
    };

    handleDistanceSelected = (value) => {
        console.log('handle distance selected ' + value);
        this.props.onChange(value, 'distance');
    };

    handleMonthSelected = (value) => {
        console.log('handle month selected ' + value);
        this.props.onChange(value, 'month');
    };

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={16} justify="flex-start" direction="column" alignItems="flex-start">
                    <Grid item>
                        <LocationFieldComponent onSelectionChanged={this.handleLocationSelected}
                                                customStyle={classes.formControl}
                                                value={this.state.location}/>

                    </Grid>

                    <Grid item>
                        <DistanceSelectComponent onChange={this.handleDistanceSelected}
                                                 customStyle={classes.formControl}
                                                 value={this.state.distance}/>
                    </Grid>

                    <Grid item>
                        <CustomSelectComponent onChange={this.handleMonthSelected} label="Month"
                                               customStyle={classes.formControl}
                                               value={this.state.month}/>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(FiltersComponent);