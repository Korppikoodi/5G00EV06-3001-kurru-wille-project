import React, { useState} from "react";
import ReactPlayer from "react-player"

function VideoView({data}){

    const [pick, setPick] = useState(data[0].video_id)
    console.log(pick)
    return(<div>
        <select onChange={(e) => setPick(e.target.value)}>
            {data.map((d, index) => {
                return <option value={d.video_id}>{index}</option>
            })}
        </select>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${pick}`}/>
    </div>)
}

export default VideoView