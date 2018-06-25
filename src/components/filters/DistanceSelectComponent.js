import React, { Component} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

class DistanceSelectComponent extends Component {

    state = {
        value : []
    }

    distances = {
        1: [],
        2: [0, 500],
        3: [0, 5000],
        4: [5000, 10000],
        5: [10000, 15000],
        6: [15000, 99999],
    }

    handleChange = (event, index, value) =>{

        this.setState({value});
        this.props.onChange(this.distances[value]);
    };
    render = () =>{

        return (
            <Select
                // input={<InputLabel>Name</InputLabel>}
                value={this.state.value}
                onChange={this.handleChange}
            >   
                <MenuItem value={1} primaryText="All" />
                <MenuItem value={2} primaryText="< 500m" />
                <MenuItem value={3} primaryText="Up to 5k" />
                <MenuItem value={4} primaryText="5k to 10k" />
                <MenuItem value={5} primaryText="10k to 15k" />
                <MenuItem value={6} primaryText=">15k" />
            </Select>
        );
    }
}

export default DistanceSelectComponent;
