function Harold2( {showDialogue, setShowDialogue, setConversation} ) {

    const line1 = <button className="buttons" onClick={() => 
        setConversation("Harold3")
    }>Fair enough</button>
    const barter = <button className="buttons" onClick={() => 
        setConversation("barter")
    }>Let's trade</button>
    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>...Bye</button>


    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">Their golden nectar fill my soul with delight. They complete me.</div>
                <div className="dialogue">{line1}</div>
                <div className="dialogue">{barter}</div>
                <div className="dialogue">{goodbye}</div>

            </section>
        </div>
    )
}

export default Harold2;