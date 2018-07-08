
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EditIcon from '@material-ui/icons/Edit'

import IconDelete from '@material-ui/icons/Delete'
import IconFeedback from '@material-ui/icons/Feedback'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

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

class CardActions extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { anchorEl } = this.state;
    const { classes } = this.props;
    const props = this.props;
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'actions-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="actions-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/edit" style={{ textDecoration: 'none', display: 'block' }}>
            <MenuItem className={classes.menuItem}
              disabled={!props.canEdit}
              onClick={() => props.handleCardAction('EDIT')}
            >
              <ListItemIcon className={classes.icon}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Edit" />
            </MenuItem>
          </Link>
          <MenuItem className={classes.menuItem}
            disabled={!props.canFlag}
            onClick={() => props.handleCardAction('SEND_FEEDBACK')}
          >
            <ListItemIcon className={classes.icon}>
              <IconFeedback />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Send feedback" />
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
        </Menu>
      </div>
    );
  }
}

CardActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardActions);

