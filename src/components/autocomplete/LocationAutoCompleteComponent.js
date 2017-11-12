import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

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

class LocationAutocompleteComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            value:'',
            placeId: ''
        };
    }

    handleBlur = (e) => {
        console.log('handleBlur fired');
        this.handleSelect(e.target.value);          
    }

    handleChange = (e) =>{
        this.setState({value: e});
    }

    handleSelect = (address, placeId) => {
        console.log('handleSelect fired ' + address);
        if(!address){
            this.props.onLocationSelected();
        }
        this.setState({ value : address, placeId: placeId})
        geocodeByAddress(address)
            .then(address => {
                console.log('Selected ' + JSON.stringify(address[0]));
                this.props.onLocationSelected(address[0]);
            })
            .catch(error => console.error('Error', error))              
    }

    render = () =>{

        const defaultStyle = {
            input: { width: '30%' }
          }

        const inputProps = {
            value : this.state.value, 
            onChange : this.handleChange,
            onBlur : this.handleBlur,
            placeholder: 'Search a place',
            type: 'search',

        }
        
        const defaultOptions = {
            types: ['(regions)']
        }
        
        return (
            <PlacesAutocomplete inputProps={inputProps} styles={defaultStyle} options={defaultOptions} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect}/>
        );

    }
};

export default LocationAutocompleteComponent;