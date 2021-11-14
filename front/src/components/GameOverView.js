import React, {useState, useEffect} from "react"
import axios from "axios"
import InfoView from "./InfoView"
import GalleryView from "./GalleryView"
import VideoView from "./VideoView"

const getRelevant = async (data, setter) => {
    const videos = await axios.get(`http://localhost:3000/specific/game_videos?where=${data.videos.join()}&key=video_id`)
    const screenshot = await axios.get(`http://localhost:3000/specific/screenshots?where=${data.screenshots.join()}&key=url`)

    setter({screenshots: screenshot.data, videos: videos.data})

}


function GameOverView({data}){

    const [links, setLinks] = useState(null)
    const [view, setView] = useState(<div></div>)

    useEffect(() => {
        getRelevant(data, setLinks)
    }, [data])

    console.log(links)

    return(<div className="overview-area">
        {links !== null && <>
        <div className="navigation">
            <button onClick={()=> setView(<InfoView data={data}/>)}>Info</button>
            <button onClick={()=> setView(<GalleryView data={links.screenshots}/>)}>Screenshots</button>
            <button onClick={()=> setView(<VideoView data={links.videos}/>)}>Videos</button>
        </div>
            <div className="view">
            {view}
            </div></>
        }
    </div>)

}

export default GameOverView