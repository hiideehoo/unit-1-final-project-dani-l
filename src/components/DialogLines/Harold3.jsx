function Harold3( {showDialogue, setShowDialogue, setConversation} ) {

    const sure = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Will do</button>
    const nah = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>No thanks</button>


    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">I can smell a few oranges lying around, if you can find them.</div>
                <div className="dialogue">{sure}</div>
                <div className="dialogue">{nah}</div>
                <div className="dialogue"></div>

            </section>
        </div>
    )
}

export default Harold3;