import React, { Component } from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core'


const styles = theme => ({
    formControl: {
        minWidth: 120,
        maxWidth: 250,
        margin: 0,
        padding: 0,
    }
});

class CustomSelectComponent extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state = {
        value: this.props.value
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    };

    render = () => {

        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="month">{this.props.label}</InputLabel>
                <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'month',
                        id: 'month-simple',
                    }}
                >
                    {this.months.map(m =>
                        <MenuItem key={m} value={m}>{m}</MenuItem>)}
                </Select>

            </FormControl>
        )
    }
}

export default withStyles(styles)(CustomSelectComponent);