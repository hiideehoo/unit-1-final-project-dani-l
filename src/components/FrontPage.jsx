function FrontPage({ setStartGame }) {

    const begin = <button id="begin" onClick={() => 
        setStartGame("true")
    }>BEGIN</button>
    const about = <button id="about" onClick={() => 
        setVisitAbout("true")
    }>ABOUT</button>

    return (
        <div>
            {begin}
            <br />
            {about}
        </div>
    )
}

export default FrontPage