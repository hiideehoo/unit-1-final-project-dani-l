import { useState } from 'react';
import Barter from './Barter';

import Harold1 from './DialogLines/Harold1';
import Harold2 from './DialogLines/Harold2';

import Rowyn1 from './DialogLines/Rowyn1';

function Dialogue({ showDialogue, setShowDialogue, conversation, setConversation, invStatus, setInvStatus }) {

    if (conversation === "Harold") {
        return (
            <div>
                <Harold1 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

    if (conversation === "Harold2") {
        return (
            <div>
                <Harold2 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

    if (conversation === "barter") {
        return (
            <div>
                <Barter showDialogue={showDialogue} setShowDialogue={setShowDialogue} invStatus={invStatus} setInvStatus={setInvStatus} />
            </div>
        )
    }
    




    if (conversation === "Rowyn") {
        return (
            <div>
                <Rowyn1 showDialogue={showDialogue} setShowDialogue={setShowDialogue} setConversation={setConversation} />
            </div>
        )
    }

}

export default Dialogue;