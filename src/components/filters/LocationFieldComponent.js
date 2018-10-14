import React, { Component } from 'react'
import GooglePlaceAutocomplete from 'mui-places-autocomplete'
import { geocodeByAddress } from 'react-places-autocomplete'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'

export const getCountryFromAddress = (address) => {
    if (!address) {
        return '';
    }
    try {
        const country = address.address_components.filter(component => component.types.includes('country')).map(c => c.long_name)[0];
        console.log('using country for filter ' + country);
        return country;
    } catch (error) {
        console.log(error);
        return '';
    }
}

class LocationFieldComponent extends Component {

    constructor(props) {
        super(props);
        const viewValue = this.props.value;
        this.state = {
            value: viewValue && viewValue.formatted_address
        };

        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
            
        this.setState({
            value: e.target.value
        });

        if (e.target.value === '') {
            console.log('cleared');
            this.props.onSelectionChanged('');
        }
    };

    onSuggestionSelected = (suggestion) => {

        console.log('Selected suggestion:', suggestion)
        const address = suggestion.description;
        this.setState({
            value: address
        });

        geocodeByAddress(address)
            .then(address => {
                console.log('Selected ' + JSON.stringify(address[0]));
                this.props.onSelectionChanged(address[0]);
            })
            .catch(error => console.error('Error', error))
    };

    render = () => {

        const { customStyle } = this.props;

        return (
            <FormControl >
                <GooglePlaceAutocomplete

                    name="location"
                    label="Location"
                    onSuggestionSelected={this.onSuggestionSelected}
                    textFieldProps={{ onChange: (e) => this.onChange(e), value: this.state.value, placeholder: 'Search for a place'}}
                    types={['(regions)']}
                    renderTarget={() => (<div className={customStyle}/>)}
                />
            </FormControl>
        );
    }
}

LocationFieldComponent.propTypes = {
    onSelectionChanged: PropTypes.func.isRequired,
  }

export default LocationFieldComponent;
