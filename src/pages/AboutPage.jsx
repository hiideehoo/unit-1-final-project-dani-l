import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AboutPage() {

    const back = <Link to="/" rel="noopener noreferrer">
        <button className="buttons" id="back">
            BACK
        </button>
    </Link>
    
    return (
        <div >
            <section id="about">
            
                <div style={{height: "288px"}}><img src={aboutImg} alt="[Dan's profile picture.]"></img></div>
                <p style={{width: "375px", textAlign: "justify"}}>
                    Hello! <br />
                    My name is Daniel Laney and I'm an aspiring game developer.<br /><br />
                    This website, while prompted by an in-class assignment, inspired me to develop a game engine using React jsx. It's simple, but I've learned a lot about game physics. I'm eager to transfer this knowledge through C++ and apply it through Unity.<br /><br />
                    {back}
                </p>
                <br />
            </section>

            <Footer />
            <Header />
        </div>
        
    )
}

export default AboutPage;