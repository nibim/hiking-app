import Banner from "../components/Banner"
import '../App.css';
import instaImg from "../instagram.png"
import emailImg from "../email.png"
import ButtonMailto from "../components/ButtonMailto" 
import { Link } from "react-router-dom";


export default function Contact() {
    function instagramHandler(params) {
        window.location.href="https://www.instagram.com/hiking_sweden/"
    }
    function emailHandler() {
        
    }
    return(
        <div>
            <Banner  />
            <div>
                <h1>Contact Us</h1>
                <div className="contacts">
                    <div onClick={instagramHandler}>
                        <img src={instaImg} alt='Instagram Icon'/>
                        <h5>Instagram</h5>
                    </div>
                    <div onClick={() => {window.location = 'mailto:beignima8@gmail.com'; console.log("Nima")}}>
                        <img src={emailImg} alt='Email Icon'/>
                        <h5>Email</h5>
                    </div>
                </div>
            </div>
            
        </div>
    )
}