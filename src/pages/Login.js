import { useState } from "react";
import Banner from "../components/Banner";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword,signOut} from 'firebase/auth';
import app from "../utils/firebase";



export default function Login() {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [rePassword ,setRePassword] = useState('');
    const[isLogin , setIsLogin] =useState(true)
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState();
    let auth = getAuth(app); // Get the Auth instance

    async function loginHandler() {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            auth = getAuth(app);
            setUser(auth.currentUser)
            setIsLoggedIn(true);
            // User signed in successfully, redirect to protected content, etc.
        } catch (error) {
            console.log(error)
        }
        setEmail('')
        setPassword('')
    }
    async function signupHandler() {
        if(password === rePassword){
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setIsLogin(true)
                // User signed in successfully, redirect to protected content, etc.
            } catch (error) {
                console.log(error)
            }
        }
        else {alert("passwords do not match");}
        setEmail('')
        setPassword('')
        setRePassword('')
    }

    async function logoutHandler() {
       signOut(auth)
       setIsLoggedIn(false)
    }
    return(
        <div>
            {isLoggedIn?
                <div className="userContent">
                    <p>Welcome, {user.email}</p>
                    <input className={'inputButton'} type="button" onClick={() => { logoutHandler() }} value={'Sign Out'} />
                </div>
                :
                <div className="loginScreen">
                    {isLogin ? 
                    <div className="login">
                        <h1 className="signin">Sign in</h1>
                        <input className="inputContent" value={email} type="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} /> 
                        <input className="inputContent" value={password} type="password" placeholder="Password" onChange={(ev)=> setPassword(ev.target.value)}/>
                        <input className={'inputButton'} type="button" onClick={loginHandler} value={'Log in'} />
                        <input className={'linkButton'} type="button" onClick={() => { setIsLogin(false) }} value={'Sign Up'} />
                    </div>
                    :
                    <div className="signup">
                        <h1 className="signin">Sign up</h1>
                        <input className="inputContent" value={email} type="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} /> 
                        <input className="inputContent" value={password} type="password" placeholder="Password" onChange={(ev)=> setPassword(ev.target.value)}/>
                        <input className="inputContent" value={rePassword} type="password" placeholder="Retype password" onChange={(ev)=> setRePassword(ev.target.value)}/>
                        <input className={'inputButton'} type="button" onClick={signupHandler} value={'Sign Up'} />
                        <input className={'linkButton'} type="button" onClick={() => { setIsLogin(true) }} value={'Log In'} />
                    </div>
                    }
                </div>
            }
            
            
        </div>
    )
}