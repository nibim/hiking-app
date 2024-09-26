import { useState } from "react"


export default function Footer(params) {
    const [email, setEmail] = useState('');
    console.log(email)
    async function signupHandler() {
        
    }
    return(
        <div className="footer-body">
             <div>Do you want to Become Volunteer with us?</div>
             <label>
                Your Email:
                <input className="inputContent" value={email} type="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} />
                <input type="button" onClick={signupHandler} value={'Sign Up'} /> 
             </label>
        </div>
      
    )
}