import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function FrontPage() {

    const begin = <a href="./game" rel="noopener noreferrer">
        <button className="frontButtons" id="begin">
            BEGIN
        </button>
    </a>
    const about = <a href="./about" rel="noopener noreferrer">
        <button className="frontButtons" id="again">
            ABOUT
        </button>
    </a>

    
    return (
        <div style={{textAlign: "center"}}>

            <section className='tipsParent' style={{textAlign: "center", marginTop: "100px"}}>
                    
                    <div className='tipsChild'>
                        <div className='tutorial' />
                        <p style={{marginLeft: "100px", fontSize: "40px"}}>&#8594; &#8594;</p>
                        <p style={{marginTop: "80px"}}>WASD<br />to move</p>
                    </div>
                    <div className='tipsChild'>
                        <div className='tutorial' style={{marginLeft: "0px"}} />
                        <div className='tutorial' style={{backgroundColor: "orange", marginLeft: "120px"}} />
                        <p style={{fontSize: "40px"}}>!!</p>
                        <p style={{marginTop: "80px"}}>Space<br />to interact</p>
                    </div>
                    <div className='tipsChild'>
                        <div style={{backgroundColor: 'grey', width: '200px', height: '120px', display: "flex", alignItems: 'center'}}>
                            <br />
                            <p style={{backgroundColor: 'white', width: '60px', height: '8px', margin: "24px", fontSize: "30px"}}>&#9645;</p>
                            <div style={{backgroundColor: 'cyan', width: '60px', height: '60px'}} />
                        </div>
                        <p style={{marginTop: "45px"}}>Escape<br />to view profile</p>
                    </div>
                    <div className='tipsChild'>
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

export default FrontPage;