import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import IconTune from '@material-ui/icons/Tune'
import {grey500} from '@material-ui/core/colors'

export const FiltersLink = (props) => {

    const handleClick = () => {
        // props.addCardRequest();
        props.history.push('/filters');
    }
    return (
        <IconButton className='filters-link' tooltip="Filters" onClick={handleClick} >
          <IconTune color={grey500}/> 
        </IconButton>
    )
}
