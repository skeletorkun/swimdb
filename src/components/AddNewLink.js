import React from 'react'
import Button from '@material-ui/core/Button'
import ContentAdd from '@material-ui/icons/Add'

export const AddNewLink = (props) => {

    const handleClick = () => {
        props.addCardRequest();
        props.history.push('/add');
    }
    return (
        <div>
            <Button className='add-swim-raised-button' style={{ margin: '20px 30px', float: 'right' }} onClick={handleClick}> Add Swim </Button>
            <Button variant="fab" color="primary" aria-label="add" className='add-swim-raised-button' style={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleClick}>
                <ContentAdd />
            </Button>
        </div>
    )
}
