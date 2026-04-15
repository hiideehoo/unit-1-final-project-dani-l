import { Link } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function FrontPage() {

    const begin = <Link to="/game" rel="noopener noreferrer">
        <button className="buttons" id="begin">
            BEGIN
        </button>
    </Link>
    const about = <Link to="/about" rel="noopener noreferrer">
        <button className="buttons" id="again">
            ABOUT
        </button>
    </Link>

    
    return (
        <div style={{textAlign: "center", marginTop: "112px", marginBottom: "180px"}}>
            
            <h3 style={{fontFamily: 'Rockwell', color: "white"}}>You are a box that must defeat Rowyn the Red.<br/>To do so, you must get help from Harold the Orange.</h3>
            
            <section className='tipsParent'>
                    
                    <div className='tipsChild'>
                        <div className='tutorial' />
                        <p style={{marginLeft: "100px", fontSize: "40px"}}>&#8594; &#8594;</p>
                        <p style={{marginTop: "80px"}}>[W][A][S][D]<br />to move</p>
                    </div>
                    <div className='tipsChild'>
                        <div className='tutorial' style={{marginLeft: "0px"}} />
                        <div className='tutorial' style={{backgroundColor: "orange", marginLeft: "120px"}} />
                        <p style={{fontSize: "40px"}}>!!</p>
                        <p style={{marginTop: "80px"}}>[Space]<br />to interact</p>
                    </div>
                    <div className='tipsChild'>
                        <div style={{backgroundColor: 'grey', width: '200px', height: '120px', display: "flex", alignItems: 'center'}}>
                            <br />
                            <p style={{backgroundColor: 'white', width: '60px', height: '8px', margin: "24px", fontSize: "30px"}}>&#9645;</p>
                            <div style={{backgroundColor: 'cyan', width: '60px', height: '60px'}} />
                        </div>
                        <p style={{marginTop: "45px"}}>[Escape]<br />to view profile</p>
                    </div>
                    <div className='tipsChild'>
                        <div className='tutorial' style={{transform: 'rotate(20deg)'}} />
                        <p style={{marginLeft: "120px", marginTop: "20px", fontSize: "100px", transform: 'rotate(155deg)'}}>&#8635;</p>
                        <p style={{marginTop: "-75px"}}>[F]<br />to flip</p>
                    </div>
                    
                </section>
            
            <br />
            {begin}
            <br />
            <br />
            {about}
            <br />
            <br />
            <br />
            
            <Header />
            <Footer />
        </div>
    )
}

export default FrontPage;