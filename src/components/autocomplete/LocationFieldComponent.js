import React, { Component } from 'react'
import GooglePlaceAutocomplete from 'material-ui-places';
import { geocodeByAddress } from 'react-places-autocomplete'

export const getCountryFromAddress = (address) => {
    if(!address){
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

class LocationFieldComponent extends Component{
    constructor(props) {
        super(props);
        const viewValue = this.props.value;
        this.state = {
            value:  viewValue && viewValue.formatted_address
        };
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value
        });

        if(!e.target.value){
            this.props.onLocationSelected();
        }
    }
    
    handleNewRequest = (selectedData, searchedText, selectedDataIndex) => {
        const address = selectedData.description;
        this.setState({
            value: address
        });
        
        geocodeByAddress(address)
            .then(address => {
                console.log('Selected ' + JSON.stringify(address[0]));
                this.props.onLocationSelected(address[0]);
            })
            .catch(error => console.error('Error', error))              
    }

    render = () =>(
        <GooglePlaceAutocomplete
            name="location"
            floatingLabelText="Location"
            searchText={this.state.value}
            onChange={this.handleChange}
            onNewRequest={this.handleNewRequest}
            types={['(regions)']}
        />
    );
}

export default LocationFieldComponent;
