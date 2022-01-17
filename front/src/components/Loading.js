import React from "react"
import CircularProgress from '@mui/material/CircularProgress';

const loadStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1vw',
    fontSize: '2vw'
}

// this shows loading icon and prop text
function Loading({text}){

    return(<div style={loadStyle}><p>{text}</p><CircularProgress/></div>)

}

export default Loading


