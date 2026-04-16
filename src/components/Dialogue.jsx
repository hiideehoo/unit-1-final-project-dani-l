import Barter from './Barter';

import Harold1 from './DialogLines/Harold1';
import Harold2 from './DialogLines/Harold2';
import Harold3 from './DialogLines/Harold3';

import Rowyn1 from './DialogLines/Rowyn1';
import FightWin from './DialogLines/FightWin';
import FightLose from './DialogLines/FightLose';

function Dialogue({ showDialogue, setShowDialogue, conversation, setConversation, invStatus, setInvStatus, haroldInv, setHaroldInv, items, setSilverStatus, silverStatus }) {

    if (conversation === "Harold") { // Opens from selected NPC interaction
        return (
            <div>
                <Harold1 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

    if (conversation === "Harold2") { // Opens from button selection in the DialogLines files
        return (
            <div>
                <Harold2 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

    if (conversation === "Harold3") { // Opens from button selection in the DialogLines files
        return (
            <div>
                <Harold3 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

    if (conversation === "barter") {
        return (
            <div>
                <Barter showDialogue={showDialogue} setShowDialogue={setShowDialogue} invStatus={invStatus} setInvStatus={setInvStatus} haroldInv={haroldInv} setHaroldInv={setHaroldInv} items={items} setSilverStatus={setSilverStatus} silverStatus={silverStatus}/>
            </div>
        )
    }
    




    if (conversation === "Rowyn") {
        return (
            <div>
                <Rowyn1 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} invStatus={invStatus}/>
            </div>
        )
    }

    if (conversation === "fight" && (invStatus.includes("sword")) && (invStatus.includes("shield"))) {
        return (
            <div>
                <FightWin showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} invStatus={invStatus}/>
            </div>
        )
    }
    if (conversation === "fight") {
        return (
            <div>
                <FightLose showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} invStatus={invStatus}/>
            </div>
        )
    }

}

export default Dialogue;