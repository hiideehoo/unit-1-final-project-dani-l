function Harold1( {showDialogue, setShowDialogue, setConversation} ) {

    const line1 = <button className="buttons" onClick={() => 
        setConversation("Harold2")
    }>Why's that?</button>
    const line2 = <button className="buttons" onClick={() => 
        setConversation("Harold3")
    }>Okay</button>
    const barter = <button className="buttons" onClick={() => 
        setConversation("barter")
    }>Let's trade</button>
    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">God I love oranges.</div>
                <div className="dialogue">{line1}</div>
                <div className="dialogue">{line2}</div>
                <div className="dialogue">{barter}</div>

            </section>
        </div>
    )
}

export default Harold1;