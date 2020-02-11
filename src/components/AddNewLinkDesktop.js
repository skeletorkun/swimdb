import React from 'react'
import Button from '@material-ui/core/Button'
import ContentAdd from '@material-ui/icons/Add'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

const AddNewLinkDesktop = (props) => {

    const handleClick = () => {
        props.addCardRequest();
        props.history.push('/add');
    };

    const {classes} = props;

    return (
        <div style={{width: '33%'}}>
            <Button className='add-swim-raised-button' variant="contained" color="secondary"
                    onClick={handleClick}>
                Add Swim
                <ContentAdd className={classes.rightIcon}/>
            </Button>
        </div>
    )
};

export default withStyles(styles)(AddNewLinkDesktop);
