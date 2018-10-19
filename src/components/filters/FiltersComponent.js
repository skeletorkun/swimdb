import React from 'react'
import LocationFieldComponent, {getCountryFromAddress} from '../filters/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'
import {withStyles} from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import CustomSelectComponent from "../form/CustomSelectComponent";

const styles = theme => ({
    root: {
        marginLeft: 10
    },
    form: {
        display: 'table-row'
    },
    cell: {
        display: 'table-cell',
        borderLeft: '10px solid transparent'
    }
});

class FiltersComponent extends React.Component {

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
                <FormGroup row className={classes.form}>
                    <LocationFieldComponent onSelectionChanged={this.handleLocationSelected} customStyle={classes.cell}/>
                    <DistanceSelectComponent onChange={this.handleDistanceSelected}/>
                    <CustomSelectComponent onChange={this.handleMonthSelected} label="Month"/>
                </FormGroup>
            </div>
        );
    }
};

export default withStyles(styles)(FiltersComponent);