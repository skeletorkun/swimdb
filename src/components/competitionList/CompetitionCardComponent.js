import React from 'react'
import { Link } from 'react-router-dom' 

//material
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconDelete from 'material-ui/svg-icons/action/delete'
import IconFeedback from 'material-ui/svg-icons/action/feedback'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import './Card.css'


const CardActions = (props) => (
  <IconMenu 
      iconButtonElement={<IconButton><MoreVertIcon/> </IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      style={{float: 'right'}}
    >
      <MenuItem primaryText="Edit" 
        containerElement={<Link to="/edit"/>}
        disabled={!props.canEdit}
        onClick={() => props.handleCardAction('EDIT')}  
      />
      <MenuItem primaryText="Send feedback" 
        rightIcon={<IconFeedback />}
        disabled={!props.canFlag}
        onClick={() => props.handleCardAction('SEND_FEEDBACK')}
      />
      <Divider />
      <MenuItem primaryText="Delete" 
        rightIcon={<IconDelete />}
        disabled={!props.canDelete}
        onClick={() => props.handleCardAction('DELETE')}
      />
    </IconMenu>
);

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
