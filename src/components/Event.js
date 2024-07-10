
import '../App.css';


export default function Event(props){

    return(
        <div className="single-post">
            <h1>{props.topic}</h1>
            <p>{props.bio}</p>
            <p>{props.date}</p>
            <p>{props.location}</p>
            
        </div>
    )
}