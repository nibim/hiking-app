import Banner from "../components/Banner";
import Post from "../components/Post";
import '../App.css';
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";
import app from "../utils/firebase";

export default function Home() {
    const [posts,setPosts] = useState([]);
  
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `posts`)).then((snapshot) => {
      if (snapshot.exists()) {
        setPosts(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    return(
        <div className="home">
            <Banner color='black'/>
                <div className='posts'>{posts.map((post,index) => (
                    <Post
                    key={index}
                    topic={post.topic}
                    bio={post.bio}
                    />
                ))}
                </div>
        </div> 
    )
}