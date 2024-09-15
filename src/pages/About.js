import Banner from "../components/Banner"
export default function About() {
    return(
        <div className="aboutUs">
            <Banner name={"About"}/>
            <div className="aboutUs-text">
                <h1>About Us</h1>
                <p className="aboutUs-para">We are a group of passionate hikers based in Stockholm, 
                    dedicated to organizing outdoor adventures for international students. 
                    Our mission is to help you discover the natural beauty of Stockholm and its surroundings, 
                    whether it’s lush forests, serene lakes, or scenic trails. We believe that hiking is not 
                    only a great way to explore new places but also to meet new people and experience Swedish nature at its finest. 
                    Join us for an unforgettable journey through some of the most breathtaking spots around the city!
                </p>
            </div>
        </div>
        
    )
}