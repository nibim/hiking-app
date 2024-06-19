import Banner from "../components/Banner";
import Post from "../components/Post";
import '../App.css';
import { getDatabase, ref as databaseRef, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../utils/firebase";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";





export default function Home() {
    const [posts,setPosts] = useState([]);
    const dbRef = databaseRef(getDatabase(app));
    const [imgurl, setImgurl] = useState('');
    
    const storage = getStorage();
    useEffect(()=>{
      getDownloadURL(storageRef(storage, 'black_Jack.jpeg'))
      .then((url) => {
      setImgurl(url)
      })
      .catch((error) => {
        // Handle any errors
      });
    },[imgurl])
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
                    img={imgurl}
                    key={index}
                    topic={post.topic}
                    bio={post.bio}
                    />
                ))}
                </div>
        </div> 
    )
}