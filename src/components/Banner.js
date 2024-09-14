import { useEffect, useState } from 'react';
import '../App.css';
import { getStorage,getDownloadURL,ref } from "firebase/storage";
import { useLocation } from 'react-router-dom';

export default function Banner(params) {
    const location = useLocation();
    const [img, setImg] = useState('');
    const storage = getStorage();
    useEffect( ()=>{getDownloadURL(ref(storage, "banner/" + location.pathname+ ".jpg"))
    .then((url) => {
    setImg(url)
    })
    .catch((error) => {
      // Handle any errors
    })},[])
   
    return(
        <div className="banner-body" style={{backgroundImage:`url(${img})`}}>

            <h1 className="banner-header" >
            Find Your Path in Stockholm’s Great Outdoors
            </h1>
        </div>
    )
}