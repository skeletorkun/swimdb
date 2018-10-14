import React from 'react'
import LocationFieldComponent, {getCountryFromAddress} from '../filters/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'
import {withStyles} from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'

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

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormGroup row className={classes.form}>
                    <LocationFieldComponent onSelectionChanged={this.handleLocationSelected}
                                            customStyle={classes.cell}/>
                    <DistanceSelectComponent onChange={this.handleDistanceSelected}/>
                </FormGroup>
            </div>
        );
    }
};

export default withStyles(styles)(FiltersComponent);