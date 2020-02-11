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


const AddNewLinkMobile = (props) => {

    const handleClick = () => {
        props.addCardRequest();
        props.history.push('/add');
    };

    return (
        <Button className='add-swim-floating-button' variant="fab" color="secondary"
               onClick={handleClick}>
            <ContentAdd/>
        </Button>
    )
};

export default withStyles(styles)(AddNewLinkMobile);