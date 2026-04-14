import {useState} from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function FrontPage({ setStartGame }) {

    const [visitAbout, setVisitAbout] = useState("false");
    const begin = <button className="frontButtons" id="begin" onClick={() => 
        setStartGame("true")
    }>BEGIN</button>
    const about = <button className="frontButtons" id="about" onClick={() => 
        setVisitAbout("true")
    }>ABOUT</button>
    const back = <button className="frontButtons" id="back" onClick={() => 
        setVisitAbout("false")
    }>BACK</button>


    if (visitAbout === "true") {
        return (
            <div>

                <Header />

                <section style={{textAlign: "center"}}>
                    This is an RPG Demo Box!
                    <br />
                    {back}
                </section>

                
                <Footer />
            </div>
        )
    }
    return (
        <div style={{textAlign: "center"}}>
            

            <br />
            <br />
            <br />
            <br />
            <br />
            <section className='parent' style={{textAlign: "center"}}>
                    
                    <div className='child'>
                        <div className='tutorial' />
                        <p style={{marginLeft: "100px", fontSize: "40px"}}>&#8594; &#8594;</p>
                        <p style={{marginTop: "80px"}}>WASD<br />to move</p>
                    </div>
                    <div className='child'>
                        <div className='tutorial' style={{marginLeft: "0px"}} />
                        <div className='tutorial' style={{backgroundColor: "orange", marginLeft: "120px"}} />
                        <p style={{fontSize: "40px"}}>!!</p>
                        <p style={{marginTop: "80px"}}>Space<br />to interact</p>
                    </div>
                    <div className='child'>
                        <div style={{backgroundColor: 'grey', width: '200px', height: '120px', display: "flex", alignItems: 'center'}}>
                            <br />
                            <p style={{backgroundColor: 'white', width: '60px', height: '8px', margin: "24px", fontSize: "30px"}}>&#9645;</p>
                            <div style={{backgroundColor: 'cyan', width: '60px', height: '60px'}} />
                        </div>
                        <p style={{marginTop: "45px"}}>Escape<br />to view profile</p>
                    </div>
                    <div className='child'>
                        <div className='tutorial' style={{transform: 'rotate(20deg)'}} />
                        <p style={{marginLeft: "120px", marginTop: "20px", fontSize: "100px", transform: 'rotate(155deg)'}}>&#8635;</p>
                        <p style={{marginTop: "-75px"}}>F<br />to flip</p>
                    </div>
                    
                </section>
            <br />
            {begin}
            <br />
            <br />
            {about}
            <br />
            <br />
            
            <Header />
            <Footer />
        </div>
    )
}

export default FrontPage