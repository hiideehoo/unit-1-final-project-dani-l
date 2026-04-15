function Rowyn1( {showDialogue, setShowDialogue, setConversation} ) {

    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Okay damn</button>
    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">I don't know you. I don't care to know you.</div>
                <div className="dialogue">{goodbye}</div>
                <div className="dialogue"></div>
                <div className="dialogue"></div>

            </section>
        </div>
    )
}

export default Rowyn1;