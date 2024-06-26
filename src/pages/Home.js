import Banner from "../components/Banner";
import Post from "../components/Post";
import '../App.css';
import { getDatabase, ref as databaseRef, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../utils/firebase";


export default function Home() {
    const [posts,setPosts] = useState([]);
    const dbRef = databaseRef(getDatabase(app));
    //const [imgurl, setImgurl] = useState('');
    const [update, setUpdate] = useState(false);

   
    
    
    useEffect(()=>{get(child(dbRef, `posts`)).then((snapshot) => {
      if (snapshot.exists()) {
        setPosts(snapshot.val());
        setUpdate(false)
      } else {
        console.log("No data available");
      }
      }).catch((error) => {
        console.error(error);
    });},[update])
    
    return(
        <div className="home">
            <Banner />
                <div className='posts'>{posts.length !==0 ? posts.map((post) => (
                    <Post
                    key={post.key}
                    index={post.key}
                    topic={post.topic}
                    bio={post.bio}
                    /> 
                )) : <div/>}
                </div>
        </div> 
    )
}