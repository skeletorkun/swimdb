import React from 'react'
import { InfoWindow as GoogleInfoWindow } from "react-google-maps"
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'

class InfoWindow extends React.Component {

    componentDidCatch(error, errorInfo) {
        console.log('some error occurred with the InfoWindow' + error);
    }

    render() {
        const swim = this.props.swim;

        const http = swim.link.includes('http') ? '' : 'http://';
        const link = http + swim.link;
        const linkLabel = swim.link.length > 40 ? 'website' : swim.link;
        return (
            <GoogleInfoWindow onCloseClick={this.props.onToggleOpen}>
                <div>
                    <p style={{ color: grey400, fontSize: 16 }}> {swim.location.formatted_address}</p>
                    <p style={{ color: darkBlack, fontSize: 20 }}>{swim.competition} </p>
                    <p style={{ color: lightBlack, fontSize: 14, marginBottom: '10px' }}>
                        Distance(s): {swim.distance} <br />
                        {swim.month} <br />
                        <a href={link} alt='website' target="_blank">{linkLabel}</a>
                    </p>
                </div>
            </GoogleInfoWindow>
        );
    }
}

export default InfoWindow;