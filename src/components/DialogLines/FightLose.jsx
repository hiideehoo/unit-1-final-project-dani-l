import { Link } from "react-router-dom";

function FightLose( {showDialogue, setShowDialogue, setConversation} ) {

    const exit = <Link to="/" rel="noopener noreferrer">
        <button className="buttons">
            THE END
        </button>
    </Link>
    
    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>

                <div className="dialogueResponse">(You were too weak for Rowyn. You failed.)</div>
                <div className="dialogue">{exit}</div>
                <div className="dialogue"></div>
                <div className="dialogue"></div>

            </section>
        </div>
    )
}

export default FightLose;