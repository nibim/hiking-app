import React from "react";
import { useState,useEffect } from "react";
import { getDatabase, ref as dataRef, update, child, get  } from "firebase/database";
import MapWithGeocoder from "./MapWithGeocoder";



export default function CreateEventModal(params) {
  const [index,setIndex]= useState(0);  
    const [bio ,setBio] = useState('');
    const [topic ,setTopic] = useState('');
    const [date ,setDate] = useState('');
    const [location, setLocation] = useState('');
    const [reload, setReload] = useState(false);
    const db = getDatabase();
    const dbRef = dataRef(db);

    useEffect(()=>{
      setReload(false)
      get(child(dbRef, `events`)).then((snapshot) => {
      if (snapshot.exists()) {
        const snap = snapshot.val()
        snap.length === 0 ? setIndex(0) : setIndex(snap[snap.length-1].key+1)
      } else {
        console.log("No data available");
      }
      }).catch((error) => {
        console.error(error);
    });},[reload])
 

    function onAddEvent() {
        const db = getDatabase();
        const value = {
            bio: bio,
            topic: topic,
            key: index,
            date: date,
            location: location
          };
        update(dataRef(db,`events`),{
            [index] : value
        } );
        setBio("")
        setTopic("")
        setDate("")
        alert("Event added succcessfully!")
        setReload(true)
    }
    return(
        <div>
               <div className="loginScreen">
                  
                    <div className="login">
                        <h1 className="signin">Add event</h1>
                        <input className="inputContent" value={bio} type="text" placeholder="Bio" onChange={(ev) => setBio(ev.target.value)} /> 
                        <input className="inputContent" value={topic} type="text" placeholder="Topic" onChange={(ev)=> setTopic(ev.target.value)}/>
                        <input className="inputContent" value={date} type="date" placeholder="Date" onChange={(ev)=>setDate(ev.target.value)}/>
                        <MapWithGeocoder setLocation={setLocation}/>
                        <input className={'inputButton'} type="button" onClick={onAddEvent} value={'Add Event'} />
                    </div>
                </div>
        </div>
    )
}