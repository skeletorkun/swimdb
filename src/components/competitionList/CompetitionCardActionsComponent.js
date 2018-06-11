
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'

import Divider from '@material-ui/core/Divider'
import IconDelete from '@material-ui/icons/Delete'
import IconFeedback from '@material-ui/icons/Feedback'
import { grey400, darkBlack, lightBlack } from '@material-ui/core/colors'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

const CardActions = (props) => {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        <MenuItem className={classes.menuItem}
          containerElement={<Link to="/edit" />}
          disabled={!props.canEdit}
          onClick={() => props.handleCardAction('EDIT')}
        >
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}
          disabled={!props.canFlag}
          onClick={() => props.handleCardAction('SEND_FEEDBACK')}
        >
          <ListItemIcon className={classes.icon}>
            <IconFeedback />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Alert Admin" />
        </MenuItem>
        <MenuItem className={classes.menuItem}
          disabled={!props.canDelete}
          onClick={() => props.handleCardAction('DELETE')}
        >
          <ListItemIcon className={classes.icon}>
            <IconDelete />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Delete" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

CardActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardActions);

