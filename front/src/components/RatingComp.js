import React from "react"
import './info.scss'

const colors = ['red', 'yellow', 'green'];
// this function is used to pick right color for background circle
const pickColor = (val) => {
    let pick = ''
    for(let i = 0; i < colors.length; i++){
        const comp = i * 33 + 33
        if(comp >= val){
            pick = colors[i];
            break;
        }
    }
    return pick
}

// this is small component that builds the review score circle with color corresponding
// to score
function RatingComp({rating, amount}){
    const round = Math.round(rating)
    return (<div className='ratings-div'>
        <h3>Score</h3>
    <div className='rating-circle' style={{backgroundColor: pickColor(round)}}>
        <p>{round}</p>
    </div>
    <p>Reviews: {amount}</p>
    </div>)
}

export default RatingComp