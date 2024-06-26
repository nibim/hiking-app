import React from "react";
import { useState,useEffect } from "react";
import { getDatabase, ref as dataRef, update, child, get  } from "firebase/database";
import { getStorage, ref as storeRef, uploadBytes } from "firebase/storage";
import MapWithGeocoder from "./MapWithGeocoder";



export default function CreateEventModal(params) {
  const [index,setIndex]= useState(0);  
    const [bio ,setBio] = useState('');
    const [topic ,setTopic] = useState('');
    const [date ,setDate] = useState('');
    const [location, setLocation] = useState('');
    const [reload, setReload] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const storage = getStorage();
    const db = getDatabase()
    const dbRef = dataRef(db)
    const storageRef = storeRef(storage, 'posts/' + index + ".jpeg");

    useEffect(()=>{
      setReload(false)
      get(child(dbRef, `posts`)).then((snapshot) => {
      if (snapshot.exists()) {
        const snap = snapshot.val()
        snap.length === 0 ? setIndex(0) : setIndex(snap[snap.length-1].key+1)
      } else {
        console.log("No data available");
      }
      }).catch((error) => {
        console.error(error);
    });},[reload])
  const onUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

    function onAddPost() {
        const db = getDatabase();
        const value = {
            bio: bio,
            topic: topic,
            key: index
          };
        update(dataRef(db,`posts`),{
            [index] : value
        } );
        uploadBytes(storageRef, selectedFile, {contentType: "image/jpeg"}).then((snapshot) => {
          setReload(true)
          });
       
    }
    return(
        <div>
               <div className="loginScreen">
                  
                    <div className="login">
                        <h1 className="signin">Add event</h1>
                        <input className="inputContent" value={bio} type="text" placeholder="Bio" onChange={(ev) => setBio(ev.target.value)} /> 
                        <input className="inputContent" value={topic} type="text" placeholder="Topic" onChange={(ev)=> setTopic(ev.target.value)}/>
                        <input className="inputContent" value={date} type="date" placeholder="Date" onChange={(ev)=>setDate(ev.target.value)}/>
                        <input className="inputContent" value={location} type="text" placeholder="Location" onChange={(ev)=> setLocation(ev.target.value)}/>
                        <MapWithGeocoder/>
                        <input className={'inputButton'} type="button" onClick={onAddPost} value={'Add Event'} />
                    </div>
                </div>
        </div>
    )
}