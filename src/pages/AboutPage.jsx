import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AboutPage() {

    const back = <a href="./" rel="noopener noreferrer">
        <button className="buttons" id="back">
            BACK
        </button>
    </a>
    
    return (
        <div >
        <section id="about">
            
                <div style={{height: "288px"}}><img src="../src/assets/aboutImg.jpg"></img></div>
                <p style={{width: "440px", textAlign: "justify"}}>
                    Hello! <br />
                    My name is Daniel Laney and I'm an aspiring game developer.<br /><br />
                    This website, while prompted by an in-class assignment, inspired me to develop a game engine using React jsx. It's simple, but I've learned a lot about game physics. I'm eager to transfer this knowledge through C++ and apply it through Unity.<br /><br />
                    {back}
                </p>
                <br />
        </section>
            <Header />
            <Footer />
        </div>
        
    )
}

export default AboutPage;