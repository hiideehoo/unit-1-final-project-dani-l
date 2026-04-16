import { Link } from "react-router-dom";

function FightWin( {showDialogue, setShowDialogue, setConversation} ) {

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

                <div className="dialogueResponse">(You defeated Rowyn with your awesome might! You win!)</div>
                <div className="dialogue">{exit}</div>
                <div className="dialogue"></div>
                <div className="dialogue"></div>

            </section>
        </div>
    )
}

export default FightWin;