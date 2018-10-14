import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import CardActions from './CompetitionCardActionsComponent'

const styles = theme => ({
    card: {
        padding: 20,
        margin: 10,
        zDepth: 2
    },
    address: {
        color: grey.A400,
        fontSize: 16
    },
    competition: {
        fontSize: 20
    },
    details: {
        color: grey.A700,
        fontSize: 14,
        marginBottom: '10px'
    },
});

class CompetitionCardComponent extends React.Component {

    render = () => {

        const swim = this.props.data;
        const {classes} = this.props;

        const actionProps = {
            canDelete: this.props.isAdmin,
            canFlag: this.props.hasAuth && !swim.isFlagged,
            canEdit: this.props.isAdmin,
            handleCardAction: this.props.handleCardAction
        };

        const http = swim.link.includes('http') ? '' : 'http://';
        const link = http + swim.link;

        return (
            <Paper className={classes.card}>
                <Grid container spacing={16}>
                    <Grid item xs={11}>
                        <Typography variant="title" gutterBottom>
                            {swim.competition}
                        </Typography>
                        <Typography variant="subheading" className={classes.address} gutterBottom>
                            {swim.location.formatted_address}
                        </Typography>
                        <Typography variant="body1" className={classes.details} gutterBottom>
                            Distance(s): {swim.distance} <br/>
                            {swim.month} <br/>
                            <a href={link} alt='website' target="_blank">{swim.link}</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <CardActions {...actionProps}/>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(CompetitionCardComponent);
