import Banner from "../components/Banner"
import '../App.css';
import instaImg from "../instagram.png"
import emailImg from "../email.png"
import { Link } from "react-router-dom";


export default function Contact() {
    
    return(
        <div>
            <Banner  />
            <div>
                <h1>Contact Us</h1>
                <div className="contacts">
                    <div>
                        <a href="https://www.instagram.com/hiking_sweden/"> 
                            <img src={instaImg} alt='Instagram Icon' className="icon"/>
                            <h5>Instagram</h5>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:beignima8@gmail.com"> 
                            <img src={emailImg} alt='Email Icon' className="icon"/>
                            <h5>Email</h5>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}