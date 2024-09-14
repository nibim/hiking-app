import { useEffect, useState } from "react";
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import app from "../utils/firebase";
import { useAuth } from "../utils/useAuth";
import { getDatabase,update,ref } from "firebase/database";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [rePassword ,setRePassword] = useState('');
    const[isLogin , setIsLogin] =useState(true)
    let auth = getAuth(app); // Get the Auth instance
    const {user,login, logout, setUser} = useAuth()
    const navigate = useNavigate()

    async function loginHandler() {
        try{
        await login({email : email, password:password})
        setEmail('')
        setPassword('')
        }catch(err){
            alert("Problem Signing In please try again")
            return;
        }
        navigate('/Account')
    }
    async function addUser(uid, email) {
        const db = getDatabase();
        const value = {
            admin:false,
            email: email
          };
        await update(ref(db,`users`),{
            [uid] : value
        } );
       
    }
    async function signupHandler() {
        if(password === rePassword){
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (error) {
                alert(error.message)
                return;
            }
            setUser(auth.currentUser.uid)
            setIsLogin(true)
            await addUser(auth.currentUser.uid, auth.currentUser.email)
            alert("Account created successfully")
        }
        else {alert("passwords do not match");}
        setEmail('')
        setPassword('')
        setRePassword('')
    }

  

    async function logoutHandler() {
       logout()
    }
    return(
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
    )
}