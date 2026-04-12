function FrontPage({ setStartGame }) {

    const button = <button id="begin" onClick={() => 
        setStartGame("true")
    }>BEGIN</button>

    return (
        button
    )
}

export default FrontPage