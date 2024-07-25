import '../App.css';

export default function Event(props){

    return(
        <div className="single-post">
            <h1>{props.topic}</h1>
            <p>{props.bio}</p>
            <p>{props.date}</p>
            <button className='inputButton' onClick={()=>{
                console.log(props.location)
                props.setLocation(props.location)}}>locate</button>   
        </div>
    )
}