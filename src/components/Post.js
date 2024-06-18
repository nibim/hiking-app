import React from "react";
import '../App.css';

export default function Post(props){
    return(
        <div className="single-post">
            <img src={props.img} alt="abcd" className="post-image"/>
            <h1>{props.topic}</h1>
            <p>{props.bio}</p>
        </div>
    )
}