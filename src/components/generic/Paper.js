import React from 'react'
import Paper from 'material-ui/Paper';

export const CustomPaper = ( props ) => {

    var divStyle = { padding:20, margin: 10, background: props.color || 'none' , zDepth:2 };
    return <Paper style={divStyle} />
}

