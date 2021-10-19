import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./../../../StateProvider"
import db from '../../../firebase';
import firebase from 'firebase'

function MessageSender() {
    const [{user} , dispatch] = useStateValue();
    const [input , setInput] = useState("");
    const [imgUrl , setimgUrl] = useState("");

    const handelSubmist = (e) =>{
        e.preventDefault()
        console.log(input);
        db.collection('Posts').add({
            Message:input,
            image:imgUrl,

            profilePic:user.photoURL,


            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
        })
        setInput("")
        setimgUrl("")
    }

    return (
        <div className="MessageSender">
           <div className="MessageSender__top">
               <Avatar src={user.photoURL}/>
               <form>
                   
                   <input
                   value={input}
                   type="text" className="MessageSender__input"
                    placeholder={`Whats on your mind ${user.displayName}`} 
                    onChange={(e) => setInput(e.target.value)}/> 
                   <input type="text"
                    value={imgUrl}
                    onChange={(e) => setimgUrl(e.target.value)}
                    placeholder={`image URL (optional)`} /> 
                    <button onClick={handelSubmist} type="submit">
                        Hidden Sibmit
                    </button> 
               </form>
           </div>


           <div className="MessageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feelling/Activity</h3>
                </div>
           </div>
        </div>
    )
}

export default MessageSender
