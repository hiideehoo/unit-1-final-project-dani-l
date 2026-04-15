function Harold1( {showDialogue, setShowDialogue, setConversation} ) {

    const line1 = <button className="buttons" onClick={() => 
        setConversation("Harold2")
    }>Why's that?</button>
    const barter = <button className="buttons" onClick={() => 
        setConversation("barter")
    }>Let's trade</button>
    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Okay</button>
    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">God I love oranges.</div>
                <div className="dialogue">{line1}</div>
                <div className="dialogue">{barter}</div>
                <div className="dialogue">{goodbye}</div>

            </section>
        </div>
    )
}

export default Harold1;