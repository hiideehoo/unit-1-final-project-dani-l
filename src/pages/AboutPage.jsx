import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AboutPage() {

    const back = <a href="./" rel="noopener noreferrer">
        <button className="frontButtons" id="back">
            BACK
        </button>
    </a>
    
    return (
        <div>
            <section style={{textAlign: "center", marginTop: "100px"}}>
                This is an RPG Demo Box!
                <br />
                {back}
            </section>
            <Header />
            <Footer />
        </div>
        
    )
}

export default AboutPage;