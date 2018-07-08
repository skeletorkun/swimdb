import React from 'react'

//material
import Paper from '@material-ui/core/Paper'
import {grey400, darkBlack, lightBlack} from '@material-ui/core/colors'

import CardActions from './CompetitionCardActionsComponent'
import './Card.css'


export const CompetitionCardComponent = ( props ) => {

    const swim = props.data;
    const actionProps = { 
      canDelete : props.isAdmin,
      canFlag : props.hasAuth && !swim.isFlagged,
      canEdit : props.isAdmin,
      handleCardAction : props.handleCardAction
    }
    var divStyle = { zDepth:2 };
    const http = swim.link.includes('http') ? '' : 'http://';
    const link = http + swim.link;
    return(
        <Paper className="card" style={ divStyle } >
            <CardActions {...actionProps}/>
            <p style={{color: grey400, fontSize: 16}}> {swim.location.formatted_address}</p>
            <p style={{color: darkBlack, fontSize: 20}}>{swim.competition} </p>
            <p style={{color: lightBlack, fontSize: 14, marginBottom: '10px'}}>
              Distance(s): { swim.distance } <br/>
              { swim.month } <br/>
              <a href={link} alt='website'  target="_blank">{swim.link}</a>
            </p>
        </Paper>
    );
}
