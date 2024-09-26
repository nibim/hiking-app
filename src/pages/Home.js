import Banner from "../components/Banner";
import Post from "../components/Post";
import Event from "../components/Event";
import Footer from "../components/Footer";
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
    const [focusLocation, setFocusLocation] = useState();
    
    
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
            <Banner name={"Home"}/>
            <Map events={events} focusLocation={focusLocation}></Map>
            <h1 className="header-event">Events</h1>
            <div className='events'>{events.length !==0 ? events.map((event) => (
                <Event
                key={event.key}
                index={event.key}
                topic={event.topic}
                bio={event.bio}
                date = {event.date}
                location = {event.location}
                setLocation ={setFocusLocation}
                atendees = {event.atendees}
                /> 
              )) : <div/>}
            </div>
            <h1 className="header-post">Posts</h1>
            <div className='posts'>{posts.length !==0 ? posts.map((post) => (
                <Post
                key={post.key}
                index={post.key}
                topic={post.topic}
                bio={post.bio}
                /> 
              )) : <div/>}
            </div>
            <Footer/>
        </div> 
    )
}