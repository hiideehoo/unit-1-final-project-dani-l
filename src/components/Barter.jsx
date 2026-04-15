import { useState } from "react";

function Barter({showDialogue, setShowDialogue, invStatus, setInvStatus}) {

 
    const [haroldInv, setHaroldInv] = useState(["sword"])




    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Okay</button>

    return (
        <div>
            <div className="backdrop" style={{ visibility: showDialogue }} />
            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>
                <div className="barter">
                    <div style={{textAlign: "left" }}>
                        <h3>Player's Inventory</h3>
                        {invStatus.map((number, index) => (
                            <li key={index}  style={{marginLeft: "45px"}}>
                                {number}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="barter">
                    <div style={{textAlign: "left" }}>
                        <h3>Harold's Inventory</h3>
                        {haroldInv.map((number, index) => (
                            <li key={index} style={{marginLeft: "45px"}}>
                                {number}
                            </li>
                        ))}
                    </div>
                </div>
                {goodbye}
            </section>
        </div>
    )
}

export default Barter;