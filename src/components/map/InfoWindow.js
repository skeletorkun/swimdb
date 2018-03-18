import React from 'react'
import { InfoWindow as GoogleInfoWindow } from "react-google-maps"
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'

export const InfoWindow = (props) => {
    const swim = props.swim;
    return (
        <GoogleInfoWindow onCloseClick={props.onToggleOpen}>
            <div>
                <p style={{ color: grey400, fontSize: 16 }}> {swim.location.formatted_address}</p>
                <p style={{ color: darkBlack, fontSize: 20 }}>{swim.competition} </p>
                <p style={{ color: lightBlack, fontSize: 14, marginBottom: '10px' }}>
                    Distance(s): {swim.distance} <br />
                    {swim.month} <br />
                    <a href={swim.link} alt='website'>{swim.link}</a>
                </p>
            </div>
        </GoogleInfoWindow>
    );
}