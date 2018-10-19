import React, {Component} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
    formControl: {
        minWidth: 120,
        maxWidth: 250,
        marginLeft: 0,
        padding: 0,

    }
});

class DistanceSelectComponent extends Component {

    distances = {
        1: [],
        2: [0, 500],
        3: [0, 5000],
        4: [5000, 10000],
        5: [10000, 15000],
        6: [15000, 99999],
    };

    state = {
        value: this.props.value.index || ''
    };


    handleChange = (event, index, value) => {
        const v = event.target.value;
        this.setState({value: v});
        this.props.onChange({index: v, value: this.distances[v]});
    };
    render = () => {
        const style = this.props.customStyle || this.props.classes.formControl;

        return (
            <FormControl className={style}>
                <InputLabel htmlFor="distance">Distance</InputLabel>
                <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'distance',
                        id: 'distance-simple',
                    }}
                >
                    <MenuItem key={1} value={1}>All</MenuItem>
                    <MenuItem key={2} value={2}>Up to 500m</MenuItem>
                    <MenuItem key={3} value={3}>Up to 5k</MenuItem>
                    <MenuItem key={4} value={4}>5k to 10k</MenuItem>
                    <MenuItem key={5} value={5}>10k to 15k</MenuItem>
                    <MenuItem key={6} value={6}>15k</MenuItem>
                </Select>

            </FormControl>
        );
    }
}

export default withStyles(styles)(DistanceSelectComponent);
