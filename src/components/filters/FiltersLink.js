import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconTune from 'material-ui/svg-icons/image/tune'
import {grey500} from 'material-ui/styles/colors'

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
