import React, { Component } from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CustomSelectComponent extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state = {
        value: this.props.value
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
        this.props.onChange(value);
    }

    render = () => {
        return (
            <SelectField
                floatingLabelText={this.props.floatingLabelText}
                value={this.state.value}
                onChange={this.handleChange}
            >
                {this.months.map(m => <MenuItem key={m} value={m} primaryText={m} />)}
            </SelectField>
        )
    }
}

export default CustomSelectComponent;