import React, {useState} from "react"


function GalleryView({data}){
    const [pick, setPick] = useState(data[0].url)

    return(<div>
        <select onChange={(e) => setPick(e.target.value)}>
            {data.map((d, index) => {
                return <option value={d.url}>{index}</option>
            })}
        </select>
        <img src={pick} width={400} height={300}></img>
    </div>)
}

export default GalleryView