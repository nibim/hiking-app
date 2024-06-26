import React, { useEffect } from "react";
import '../App.css';
import { getStorage,getDownloadURL,ref } from "firebase/storage";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Post(props){
    const [img, setImg] = useState('')
    const storage = getStorage();
    function readMore(){
      <div>
        
      </div>
    }
    useEffect(()=> {
      getDownloadURL(ref(storage, 'posts/'+ props.index + '.jpeg'))
      .then((url) => {
      setImg(url)
      })
      .catch((error) => {
        // Handle any errors
      });},[props.index,storage])
    return(
        <div className="single-post">
            <img src={img} alt="abcd" className="post-image"/>
            <h1>{props.topic}</h1>
            <p>{props.bio}</p>
            <Link className="button-border button" to="/About">About</Link>
            <Outlet/>
        </div>
    )
}