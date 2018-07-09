import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { grey400, darkBlack, lightBlack } from '@material-ui/core/colors'
import CardActions from './CompetitionCardActionsComponent'

const styles = theme => ({
    card: {
        padding: 20,
        margin: 10,
        zDepth: 2
    },
    address: {
        color: grey400,
        fontSize: 16
    },
    competition: {
        color: darkBlack,
        fontSize: 20
    },
    details: {
        color: lightBlack,
        fontSize: 14,
        marginBottom: '10px'
    },
});

class CompetitionCardComponent extends React.Component {

    render = () => {

        const swim = this.props.data;
        const { classes } = this.props;

        const actionProps = {
            canDelete: this.props.isAdmin,
            canFlag: this.props.hasAuth && !swim.isFlagged,
            canEdit: this.props.isAdmin,
            handleCardAction: this.props.handleCardAction
        }

        const http = swim.link.includes('http') ? '' : 'http://';
        const link = http + swim.link;

        return (
            <Paper className={classes.card} >
                <CardActions {...actionProps} />
                <Typography variant="display1" gutterBottom>
                    {swim.competition}
                </Typography>
                <Typography variant="title" gutterBottom>
                    {swim.location.formatted_address}
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    Distance(s): {swim.distance} <br />
                    {swim.month} <br />
                    <a href={link} alt='website' target="_blank">{swim.link}</a>
                </Typography>
            </Paper>
        );
    }
}

export default withStyles(styles)(CompetitionCardComponent);
