import React, {useState , useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import db from "./../../firebase"
function Feed() {

  const [posts , setPosts] = useState([])
  
  useEffect(()=>{
      db.collection("Posts").orderBy('timestamp' , 'desc').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({id:doc.id,data:doc.data() } ))))
  } , [])

    return (
        <div className="feed">
            <StoryReel />
             <MessageSender />

             {posts.map(post => (
                 
             <Post

             key={post.data.id}
             profilePic={post.data.profilePic}
             message={post.data.Message}
             timestamp={post.data.timestamp}
             username={post.data.username}
             image={post.data.image} />
            //  console.log(post.data)

             ))}
             
         </div>
    )
}

export default Feed
