import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        paddingLeft: 20,
        paddingRight: 20
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    }
});


class DistanceSelectComponent extends Component {

    state = {
        value: []
    }

    distances = {
        1: [],
        2: [0, 500],
        3: [0, 5000],
        4: [5000, 10000],
        5: [10000, 15000],
        6: [15000, 99999],
    }

    handleChange = (event, index, value) => {

        this.setState({ value });
        this.props.onChange(this.distances[value]);
    };
    render = () => {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="distance">Distance</InputLabel>
                <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'distance',
                        id: 'distance-simple',
                    }}
                >
                    <MenuItem value={1} >All</MenuItem>
                    <MenuItem value={2} >Up to 500m</MenuItem>
                    <MenuItem value={3} >Up to 5k</MenuItem>
                    <MenuItem value={4} >5k to 10k</MenuItem>
                    <MenuItem value={5} >10k to 15k</MenuItem>
                    <MenuItem value={6} >15k</MenuItem>
                </Select>

            </FormControl>
        );
    }
}

export default withStyles(styles)(DistanceSelectComponent);
