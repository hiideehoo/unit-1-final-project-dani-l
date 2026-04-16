import { useState } from "react";

function Barter({showDialogue, setShowDialogue, invStatus, setInvStatus, haroldInv, setHaroldInv, items, setSilverStatus, silverStatus}) {

    function gainItem(item) {
        if (silverStatus >= items[item].value) {
            setHaroldInv(prev => {
                const copy = [...prev];
                const index = copy.indexOf(item);
                if (index !== -1) copy.splice(index, 1);
                return copy;
            });

            setInvStatus(prev => [...prev, item]);
            setSilverStatus(prev => prev - items[item].value);
        }
    }

    function loseItem(item) {
        setInvStatus(prev => {
            const copy = [...prev];
            const index = copy.indexOf(item);
            if (index !== -1) copy.splice(index, 1);
            return copy;
        });

    setHaroldInv(prev => [...prev, item]);
    setSilverStatus(prev => prev + items[item].value);
    }

    const goodbye = <button className="buttons" onClick={() => 
        setShowDialogue("hidden")
    }>Okay</button>

    return ( // displays inventories when opened
        <div>
            <div className="backdrop" style={{ visibility: showDialogue }} />
            <section 
                className="profile" id="dialogueBox"
                style={{ visibility: showDialogue }}>
                <div className="barter">
                    <div style={{textAlign: "left" }}>
                        <h3>Player's Inventory<br />({silverStatus}₵)</h3>
                        {invStatus.map((number, index) => (
                            <li key={index}  style={{marginLeft: "45px", height: "7px"}}>
                                <p onClick={() => loseItem(number)} style={{ cursor: "pointer" }} >{number}</p>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="barter">
                    <div style={{textAlign: "left" }}>
                        <h3>Harold's Inventory</h3>
                        {haroldInv.map((number, index) => (
                            <li key={index} style={{marginLeft: "45px", height: "7px"}}>
                                <p onClick={() => gainItem(number)} style={{ cursor: "pointer" }} >{number}</p>
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

