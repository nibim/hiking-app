
import '../App.css';

export default function Banner(params) {

    return(
        <div className="banner-body" style={{backgroundColor : params.color}}>
            <h1 className="banner-header" >
                From Nature to the Nature!
            </h1>
        </div>
    )
}