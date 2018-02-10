import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

export const AddNewLink = (props) => {

    const handleClick = () => {
        props.addCardRequest();
        props.history.push('/add');
    }
    return (
        <div>
            <RaisedButton className='add-swim-raised-button' style={{ margin: '20px 30px', float: 'right' }} onClick={handleClick}> Add Swim </RaisedButton>
            <FloatingActionButton className='add-swim-floating-button' style={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleClick}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    )
}
