import {useState} from 'react'

function FrontPage({ setStartGame }) {

    const [visitAbout, setVisitAbout] = useState("false");
    const begin = <button id="begin" onClick={() => 
        setStartGame("true")
    }>BEGIN</button>
    const about = <button id="about" onClick={() => 
        setVisitAbout("true")
    }>ABOUT</button>
    const back = <button id="back" onClick={() => 
        setVisitAbout("false")
    }>BACK</button>


    if (visitAbout === "true") {
        return (
            <div>
                This is an RPG Demo Box!
                <br />
                {back}
            </div>
        )
    }
    return (
        <div style={{textAlign: "center"}}>
            <header>
                RPG DEMO BOX
            </header>
            {begin}
            <br />
            {about}
            <footer style={{marginBottom: "0px"}}>
                email: daniel.laney.626@gmail.com
            </footer>
        </div>
    )
}

export default FrontPage