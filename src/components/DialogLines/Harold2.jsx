function Harold2( {showDialogue, setShowDialogue, setConversation} ) {

    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Fair enough</button>
    const barter = <button className="buttons" onClick={() => 
        setConversation("barter")
    }>Let's trade</button>


    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">Their golden nectar fill my soul with delight. They complete me.</div>
                <div className="dialogue">{goodbye}</div>
                <div className="dialogue">{barter}</div>
                <div className="dialogue"></div>

            </section>
        </div>
    )
}

export default Harold2;