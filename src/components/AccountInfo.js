import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth"
import { useEffect } from "react";
import { getAuth , onAuthStateChanged} from "firebase/auth";
import app from "../utils/firebase";

export function AccountInfo() {
    const navig = useNavigate();
    var auth = getAuth(app)
    const{user, setUser,logout}=useAuth();
    function logoutHandler(){
        logout();
        navig('/Login')
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User present
          setUser(user)
          // redirect to home if user is on /login page 
        } else {
            navig('/Login')
        }
      })

    return(
        <div className="userContent">
        <p>Welcome, {user?.email}</p>
        <input className={'inputButton'} type="button" onClick={logoutHandler} value={'Sign Out'} />
        </div>
    )
} 