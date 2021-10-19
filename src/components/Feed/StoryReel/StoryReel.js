import React from 'react'
import Story from './Story'
import "./StoryReel.css"
function StoryReel() {
    return (
        <div className="StoryReel">

           <Story img="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg"
            profileSrc="https://media.monolithicpower.com/wysiwyg/employee-img1.png"
            title="empolyee one" /> 

            <Story img="https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_960_720.jpg"
            profileSrc="https://media.monolithicpower.com/wysiwyg/employee-img3.png"
            title="empolyee one" /> 

            <Story img="https://cdn.pixabay.com/photo/2015/03/26/10/42/letters-691842_960_720.jpg"
            profileSrc="https://media.monolithicpower.com/wysiwyg/employee-img4.png"
            title="empolyee one" /> 

            <Story img="https://cdn.pixabay.com/photo/2016/04/30/13/12/sutterlin-1362879_960_720.jpg"
            profileSrc="https://media.monolithicpower.com/wysiwyg/employee-img5.png"
            title="empolyee one" /> 

            <Story img="https://media.istockphoto.com/photos/number-of-2019-to-2021-on-stones-footpath-picture-id1265436456?s=612x612"
            profileSrc="https://media.monolithicpower.com/wysiwyg/employee-img2.png"
            title="empolyee one" /> 
        </div>
    )
}

export default StoryReel
