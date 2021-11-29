import React, {useContext} from "react"
import { DataContext } from "./DataContext"
import './info.scss'
import RatingComp from "./RatingComp";

// this is used to pick either storyline or summary value
// storyline is prioritized over summary
// summary is used if storyline value is undefined
const pickText = (data) => {
    if(data.storyline !== undefined){
        return (<div className='text-container'>
        <div className='header-div'><h3>Storyline</h3></div>
        <div className='text-block'>
        <p>{data.storyline}</p>
        </div>
    </div>)
    } else if (data.summary !== undefined) {
        return (<div className='text-container'>
        <div className='header-div'><h3>Summary</h3></div>
        <div className='text-block'>
        <p>{data.summary}</p>
        </div>

    </div>)
    } else {
        return (<div className='text-container'>
        <div className='header-div'><h3>Storyline</h3></div>
        <p>N/A</p>
    </div>)
    }
}
// this is list of status values that i got from igdb api docs
// this is needed cause status value in newData is index that corresponds to one of these values in status array
const status = ['released', 'alpha', 'beta', 'early_access', 'offline', 'cancelled', 'rumored', 'delisted']
function InfoView(){
    const {newData} = useContext(DataContext)
    return(<div className='info-container'>
        <div className='first-row'>
            {newData.cover !== undefined ? <img width={'25%'} height={'95%'} src={`https://images.igdb.com/igdb/image/upload/t_original/${newData.cover[0].image_id}.jpg`}>
            </img> : 'picture N/A'}
            <div className='game-header'>
                <h1>{newData.name}</h1>
                </div>
            <RatingComp rating={newData.total_rating} amount={newData.total_rating_count}/>
        </div>
        <div className='info-block'>
        <div className='header-div'><h3>Details</h3></div>
        <div className='details'>
            <p>Release date: {newData.first_release_date !== undefined ? new Date(newData.first_release_date * 1000).toDateString() : 'N/A'}</p>
            <p>Developer: {newData.dev !== undefined ? newData.dev[0].name : 'N/A'}</p>
            <p>Genre: {newData.genres !== undefined ?
            newData.genres.map((d) => ` ${d.name}`).toString() : 'N/A'}</p>
            <p>Platforms: {newData.platforms !== undefined ?
            newData.platforms.map((d) => ` ${d.abbreviation}`).toString() : 'N/A'}</p>
            <p>Websites: {newData.websites !== undefined ?
            newData.websites.map((d) => ` ${d.url}`).toString() : 'N/A'}</p>
            {newData.status !== undefined && <p>Status: {status[newData.status]}</p>}
        </div></div>
        {pickText(newData)}
        </div>)

}

export default InfoView