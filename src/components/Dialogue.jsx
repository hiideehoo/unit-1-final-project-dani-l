function Dialogue({showDialogue, setShowDialogue}) {

    const begin = <button id="begin" onClick={() => 
        setShowDialogue("hidden")
    }>Goodbye!</button>

    return (
        
        <div 
        className="box" id="profile" 
        style={{ visibility: showDialogue }}
        >

            <p>Hello!</p>
            <div>
                {begin}
            </div>

        </div>

    )
}

export default Dialogue;