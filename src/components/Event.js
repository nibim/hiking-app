import '../App.css';
import { useState , useEffect} from 'react';
import { useAuth } from '../utils/useAuth';
import { ref as dataRef, update , getDatabase} from "firebase/database";
import { useNavigate } from 'react-router-dom';
export default function Event(props){

    const {user} = useAuth();
    const db = getDatabase()
    const [disableAttend, setDisableAttend] = useState(false);
    const [atendees, setAtendees] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        if(props.atendees){
            setAtendees(props.atendees)
        }
    },[])
    function handleAttend(){
        if(user){
            atendees.push(user.email)
            setAtendees([...atendees])
            const value = {
                bio: props.bio,
                topic: props.topic,
                key: props.index,
                date: props.date,
                location: props.location,
                atendees: atendees
              };
            update(dataRef(db,`events`),{
                [props.index] : value
            } );
        }else{
            alert("Please Login to proceed")
            navigate('/login')
        }
    }

    function handleUnAttend(){
        const temp = atendees.filter((val)=>{
            return val != user.email
        })
        console.log(temp)
        setAtendees([...temp])
        const value = {
            bio: props.bio,
            topic: props.topic,
            key: props.index,
            date: props.date,
            location: props.location,
            atendees: temp
            };
        update(dataRef(db,`events`),{
            [props.index] : value
        } );
    }

    useEffect(()=>{
        if(!user){
            setDisableAttend(false)
        }else{
            if(atendees.includes(user.email)){
                setDisableAttend(true)
            }else{
                setDisableAttend(false)
            }
        }
    },[atendees])

    return(
        <div className="single-event">
            <h1>{props.topic}</h1>
            <p>{props.bio}</p>
            <p>{props.date}</p>
            {disableAttend ? <button className='inputButton event-button' onClick={handleUnAttend}>Unattend</button> : <button className='inputButton event-button' onClick={handleAttend}>Attend</button>}  
            <button className='linkButton event-button' onClick={()=>{
                props.setLocation(props.location)}}>locate</button>   

        </div>
    )
}