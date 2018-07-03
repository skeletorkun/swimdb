import React from 'react'
import LocationFieldComponent, { getCountryFromAddress } from '../filters/LocationFieldComponent'
import DistanceSelectComponent from './DistanceSelectComponent'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'

const styles = theme => ({
  root: {
    display: 'table-row',
    paddingLeft: 20,
    paddingRight: 20
  }
});

class FiltersComponent extends React.Component {

  handleLocationSelected = (value) => {
    const country = getCountryFromAddress(value);
    this.props.onChange(country, 'location');
  }

  handleDistanceSelected = (value) => {
    console.log('handle distance selected ' + value);
    this.props.onChange(value, 'distance');
  }

  render() {

    const { classes } = this.props;

    return (
      <FormGroup row className={classes.root}>
        <LocationFieldComponent onLocationSelected={this.handleLocationSelected} />
        <DistanceSelectComponent onChange={this.handleDistanceSelected} />
      </FormGroup>
    );
  }
};

export default withStyles(styles)(FiltersComponent);