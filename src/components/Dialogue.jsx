function Dialogue({showDialogue, setShowDialogue}) {

    const begin = <button id="begin" onClick={() => 
        setShowDialogue("hidden")
    }>Goodbye!</button>

    return (
        
        <div 
            className="box" id="profile" 
            style={{ visibility: showDialogue }}
        >

            <div className="tooltip">Hello!</div>
            <div>
                {begin}
            </div>

        </div>

    )
}

export default Dialogue;