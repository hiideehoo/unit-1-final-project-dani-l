function Dialogue({showDialogue, setShowDialogue}) {

    const begin = <button id="begin" onClick={() => 
        setShowDialogue("hidden")
    }>Goodbye!</button>

    return (
        <div>

            <div className="backdrop" style={{ visibility: showDialogue }} />

            <section 
                className="profile" 
                style={{ visibility: showDialogue }}
            >

                <div className="tooltip">Hello!</div>
                <div>
                    {begin}
                </div>

            </section>

        </div>
        

    )
}

export default Dialogue;