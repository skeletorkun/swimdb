import React from 'react'
import Button from '@material-ui/core/Button'
import ContentAdd from '@material-ui/icons/Add'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});


const AddNewLink = (props) => {

    const handleClick = () => {
        props.addCardRequest();
        props.history.push('/add');
    };

    const { classes } = props;

    return (
        <div>
            <Button className='add-swim-raised-button' variant="contained" color="secondary" style={{ marginRight: '30px', marginTop:'20px', float: 'right' }} onClick={handleClick}>
                Add Swim
                <ContentAdd className={classes.rightIcon} />
            </Button>
            <Button className='add-swim-floating-button' variant="fab" color="secondary"   style={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleClick}>
                <ContentAdd />
            </Button>
        </div>
    )
};

export default withStyles(styles)(AddNewLink);