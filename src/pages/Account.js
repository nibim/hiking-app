import { useNavigate } from "react-router-dom";
import CreatePostModal from "../components/CreatePostModal"
import { useAuth } from "../utils/useAuth"
import { AccountInfo } from "../components/AccountInfo";
import { useState } from "react";
import '../App.css';
import postImg from '../post.png'
import InfoImg from '../information.png'
import eventImg from '../event.png'
import CreateEventModal from "../components/CreateEventModal";

export default function Account(){
    const [selectedButton, setSelectedButton] = useState(0);
    const navig = useNavigate();
    const{user, logout}=useAuth();
    function logoutHandler(){
        logout();
        navig('/Login')
    }
    const [comp,setComp] = useState(<AccountInfo user={user} logoutHandler={logoutHandler}/>)

    function infoHandler(){
        setSelectedButton(0);
        setComp(<AccountInfo user={user} logoutHandler={logoutHandler}/>)
    }
    function postHandler(){
        setSelectedButton(1)
        setComp(<CreatePostModal/>)
    }
    function eventHandler(){
        setSelectedButton(2)
        setComp(<CreateEventModal/>)
    }
    return(
        <div className="account-page">
            <div className="side-nav">
                <div style={selectedButton ===0 ? {backgroundColor:'white'} : {}} onClick={infoHandler}><img src={InfoImg} alt='Info Icon'/><p>Info</p></div>
                <div style={selectedButton ===1 ? {backgroundColor:'white'} : {}} onClick={postHandler} ><img src={postImg} alt='Post Icon'/><p>Post</p></div>
                <div style={selectedButton ===2 ? {backgroundColor:'white'} : {}} onClick={eventHandler} ><img src={eventImg} alt='Post Icon'/><p>Event</p></div>
            </div>

            <div className="account-content">
                {comp}
            </div>
        </div>
    )
}