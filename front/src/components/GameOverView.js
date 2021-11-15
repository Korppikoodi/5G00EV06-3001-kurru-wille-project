import React, {useState, useEffect} from "react"
import axios from "axios"
import InfoView from "./InfoView"
import GalleryView from "./GalleryView"
import VideoView from "./VideoView"
import CircularProgress from '@mui/material/CircularProgress';

const getRelevant = async (data, setter, loading) => {
    const videos = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/game_videos?where=${data.videos.join()}&key=video_id`)
    const screenshot = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/screenshots?where=${data.screenshots.join()}&key=url`)

    setter({screenshots: screenshot.data, videos: videos.data})
    loading(false)

}


function GameOverView({data}){

    const [links, setLinks] = useState(null)
    const [view, setView] = useState(<div></div>)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getRelevant(data, setLinks, setLoading)
    }, [data])

    console.log(links)

    return(<div className="overview-area">
        {loading !== true ? <>
        <div className="navigation">
            <button onClick={()=> setView(<InfoView data={data}/>)}>Info</button>
            <button onClick={()=> setView(<GalleryView data={links.screenshots}/>)}>Screenshots</button>
            <button onClick={()=> setView(<VideoView data={links.videos}/>)}>Videos</button>
        </div>
            <div className="view">
            {view}
            </div></> : <CircularProgress style={{alignSelf: 'center'}}/>
        }
    </div>)

}

export default GameOverView