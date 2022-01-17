import React, {useState, useContext} from "react"
import InfoView from "./InfoView"
import GalleryView from "./GalleryView"
import VideoView from "./VideoView"
import CircularProgress from '@mui/material/CircularProgress';
import { DataContext } from "./DataContext"
import Loading from "./Loading";


// this component handles which view is currently active
// views are changed with buttons
function GameOverView(){

    const [view, setView] = useState(<InfoView/>)
    const {loading} = useContext(DataContext)

    return(<div className="overview-area">
        {loading !== true ? <>
        <div className="navigation">
            <button onClick={()=> setView(<InfoView/>)}>Info</button>
            <button onClick={()=> setView(<GalleryView/>)}>Screenshots</button>
            <button onClick={()=> setView(<VideoView/>)}>Videos</button>
        </div>
            <div className="view">
            {view}
            </div></> : <Loading text={'loading data'}/>
        }
    </div>)

}

export default GameOverView