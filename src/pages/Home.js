import Banner from "../components/Banner";
import Post from "../components/Post";
import Event from "../components/Event";
import '../App.css';
import { getDatabase, ref as databaseRef, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../utils/firebase";
import Map from "../components/Map";


export default function Home() {
    const [posts,setPosts] = useState([]);
    const dbRef = databaseRef(getDatabase(app));
    const [update, setUpdate] = useState(false);
    const [events, setEvents] = useState([]);

   
    
    
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

    useEffect(()=>{get(child(dbRef, `events`)).then((snapshot) => {
      if (snapshot.exists()) {
        setEvents(snapshot.val());
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
            <Map events={events}></Map>
            <div className='posts'>{events.length !==0 ? events.map((event) => (
                <Event
                key={event.key}
                topic={event.topic}
                bio={event.bio}
                date = {event.date}
                location = {event.location}
                /> 
              )) : <div/>}
            </div>
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