import React, {useContext, useState} from "react"
import { DataContext } from "./DataContext"
import Button from '@mui/material/Button';
import './mediaGrid.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// this is used to divide screenshot url array to max 4 element sections
// so it is possible to show them nicely in grid
const divideArr = (arr) => {
    const newSet = [];
    const amountOfSets = Math.ceil(arr.length / 4);
    for(let i = 0; i < amountOfSets; i++) {
        if (i * 4 <= arr.length) {
            const set = arr.slice((i * 4), (4 + i * 4));
            newSet.push(set)
        } else {
            const set = arr.slice((i * 4), arr.length);
            newSet.push(set);
        }
    }
    return newSet
}

// this component visualizes screenshots for the game
function GalleryView(){
    const {newData} = useContext(DataContext)
    const [screenPage, setScreenPage] = useState(0)
    const sets = newData.screenshots !== undefined && divideArr(newData.screenshots)
    if(newData.screenshots !== undefined) {
    return(<div className='media-view'>
    <div className='paging'>
        {screenPage > 0 &&
            <Button
            variant='contained'
            startIcon={<ArrowBackIcon/>}
            onClick={() => setScreenPage((d) => d - 1)}
            >Back</Button>
        }
        </div>
    <div className='media-container'>
    {sets[screenPage].map((d, index) => {
        return <div key={index} className='media-item'><img
        width='100%'
        height='100%'
        src={`https://images.igdb.com/igdb/image/upload/t_original/${d.image_id}.jpg`}/></div>
    })}
    </div>
    <div className='paging'>
    {screenPage < sets.length - 1 &&
    <Button
    variant='contained'
    endIcon={<ArrowForwardIcon/>}
    onClick={() => setScreenPage((d) => d + 1)}
    >Next</Button>
    }
    </div>
    </div>)} else {
        return <div className='empty'>No Screenshots for this game</div>
    }
}

export default GalleryView