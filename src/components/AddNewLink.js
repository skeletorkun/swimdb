import React from 'react'
import { Link } from 'react-router-dom' 

import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

export const AddNewLink = () => {

    return (
        <Link to='/add'>
            <RaisedButton className='add-swim-raised-button' style={{ margin: '20px 30px', float: 'right' }}> Add Swim </RaisedButton>
            <FloatingActionButton className='add-swim-floating-button' style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
                <ContentAdd />
            </FloatingActionButton>
        </Link>
    )
}
