import React, {useContext, useState} from "react"
import { DataContext } from "./DataContext"
import ReactPlayer from "react-player";
import Button from '@mui/material/Button';
import './mediaGrid.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// this shares the same logic as in GalleryView
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
// this component handles visualizing videos related to the game
function VideoView(){
    const {newData} = useContext(DataContext)
    const [videoPage, setVideoPage] = useState(0)
    const sets = newData.videos !== undefined && divideArr(newData.videos)
    if(newData.videos !== undefined) {
        return(<div className='media-view'>
        <div className='paging'>
        {videoPage > 0 &&
            <Button
            variant='contained'
            startIcon={<ArrowBackIcon/>}
            onClick={() => setVideoPage((d) => d - 1)}
            >Back</Button>
        }
        </div>
        <div className='media-container'>
        {sets[videoPage].map((d, index) => {
            return <div key={index} className='media-item'><ReactPlayer
            controls={true}
            width='100%'
            height='100%'
            url={`https://www.youtube.com/watch?v=${d.video_id}`}/></div>
        })}
    </div>
    <div className='paging'>
    {videoPage < sets.length - 1 &&
    <Button
    variant='contained'
    endIcon={<ArrowForwardIcon/>}
    onClick={() => setVideoPage((d) => d + 1)}
    >Next</Button>
    }
    </div>
    </div>)
    } else {
        return <div className='empty'>No videos for this game</div>
    }

}

export default VideoView