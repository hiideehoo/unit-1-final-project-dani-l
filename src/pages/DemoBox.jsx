import { useState, useEffect } from 'react';
import Map from '../components/Map.jsx';
import Menu from '../components/Menu.jsx';
import ItemInteraction from '../components/ItemNew.jsx';
import NpcInteraction from '../components/Npc.jsx';
import Dialogue from '../components/Dialogue.jsx';
import Warning from '../components/Warning.jsx';



function DemoBox({ currentSave, setCurrentSave, currentWorld, setCurrentWorld }) {


    const updateCharacter = async (name, color, x, y, silver, inv) => {

        let id = currentSave.id;
        let newName = name;
        let newColor = color;
        let newX = x;
        let newY = y;
        let newSilver = silver;
        let newInv = inv;
        let character = {
            id: id,
            name: newName,
            color: newColor,
            x: newX,
            y: newY,
            silver: newSilver,
            inv: newInv
        };

        let response = await fetch(`http://localhost:8080/characters/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(character)
        });
        let updatedCharacter = await response.json();
        setCurrentSave(currentSave = updatedCharacter);

    }

    const updateWorld = async (itemRender, invHarold) => {

        let id = currentWorld.id;
        let newItemRender = itemRender;
        let newInvHarold = invHarold;
        let world = {
            id: id,
            itemRender: newItemRender,
            invHarold: newInvHarold
        };

        let response = await fetch(`http://localhost:8080/worlds/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(world)
        });
        let updatedWorld = await response.json();
        setCurrentWorld(currentWorld = updatedWorld);

    }

    class Item {
    constructor(name, className, value, opacity, coords) {
        this.name = name;
        this.className = className;
        this.value = value;
        this.opacity = opacity;
        this.coords = coords;
    }
    }
    let items = {
        "orange": new Item("orange", "dot", 300, "", []),
        "sword": new Item('sword', "", 150, "", []),
        "shield": new Item('shield', "", 150, "", [])
    }

    const [latitude, setLatitude] = useState(currentSave.y);
    const [longitude, setLongitude] = useState(currentSave.x);
    const [showProfile, setShowProfile] = useState("hidden");
    const [nameChange, setNameChange] = useState(currentSave.name);
    const [colorChange, setColorChange] = useState(currentSave.color);
    const [animationChange, setAnimationChange] = useState(null);
    const [hpStatus, setHpStatus] = useState(1);
    const [dmgStatus, setDmgStatus] = useState(1);
    const [silverStatus, setSilverStatus] = useState(currentSave.silver);
    const [invStatus, setInvStatus] = useState(currentSave.inv);
    const [conversation, setConversation] = useState("");
    const [showDialogue, setShowDialogue] = useState("hidden");
    const [haroldInv, setHaroldInv] = useState(currentWorld.invHarold);

    const keyDown = (event) => { // Looks for key input

        if (showProfile === "hidden" && showDialogue === "hidden") { // Prevents movement during menu navigation
            if ((event.key.toUpperCase() === "S" || event.key === "ArrowDown") && latitude <= borderCollision.room1.south.y - 20) { // Checks wall boundaries
                setAnimationChange("moveDown .033s linear 1"); // Animates movement for smoothness
                if ((event.key.toUpperCase() === "S" || event.key === "ArrowDown") && latitude < borderCollision.room1.south.y) {
                    setTimeout(() => {setAnimationChange(null); setLatitude(prev => prev + 20)}, 16);
                    updateCharacter(currentSave.name, currentSave.color, currentSave.x, (currentSave.y + 20), currentSave.silver, currentSave.inv);
                }
            } else if ((event.key.toUpperCase() === "W" || event.key === "ArrowUp") && latitude >= borderCollision.room1.north.y + 20) {
                setAnimationChange("moveUp .033s linear 1");
                if ((event.key.toUpperCase() === "W" || event.key === "ArrowUp") && latitude > borderCollision.room1.north.y) {
                    setTimeout(() => {setAnimationChange(null); setLatitude(prev => prev - 20)}, 16);
                    updateCharacter(currentSave.name, currentSave.color, currentSave.x, (currentSave.y - 20), currentSave.silver, currentSave.inv);
                }
            } else if ((event.key.toUpperCase() === "D" || event.key === "ArrowRight") && longitude <= borderCollision.room1.east.x - 20) {
                setAnimationChange("moveRight .033s linear 1");
                if ((event.key.toUpperCase() === "D" || event.key === "ArrowRight") && longitude < borderCollision.room1.east.x) {
                    setTimeout(() => {setAnimationChange(null); setLongitude(prev => prev + 20)}, 16);
                    updateCharacter(currentSave.name, currentSave.color, (currentSave.x + 20), currentSave.y, currentSave.silver, currentSave.inv);
                }
            } else if ((event.key.toUpperCase() === "A" || event.key === "ArrowLeft") && longitude >= borderCollision.room1.west.x + 20) {
                setAnimationChange("moveLeft .033s linear 1");
                if ((event.key.toUpperCase() === "A" || event.key === "ArrowLeft") && longitude > borderCollision.room1.west.x) {
                    setTimeout(() => {setAnimationChange(null); setLongitude(prev => prev - 20)}, 16);
                    updateCharacter(currentSave.name, currentSave.color, (currentSave.x - 20), currentSave.y, currentSave.silver, currentSave.inv);
                }
            } else if (event.key.toUpperCase() === "F") {
                setAnimationChange("spin .5s linear 1");
                setTimeout(() => {setAnimationChange(null)}, 500);
            }
        }

        if (event.key === "Escape") { // Opens profile
        setShowProfile(prev =>
                prev === "hidden" ? "visible" : "hidden"
            );
            updateCharacter(nameChange, colorChange, currentSave.x, currentSave.y, currentSave.silver, currentSave.inv);
        }
    };

    useEffect(() => { // Window always listening for keyboard inputs
        window.addEventListener('keydown', keyDown);

        return (() => {
            window.removeEventListener('keydown', keyDown);
        })
    });

    function handleNameChange(e) {
        setNameChange(e.target.value);
    }
    function handleColorChange(e) {
        setColorChange(e.target.value);
    }

    useEffect(() => {
        if (invStatus.includes("shield")) {
            setHpStatus(prev => prev = 5);
        }
    }, [invStatus]);

    useEffect(() => {
        if (invStatus.includes("sword")) {
            setDmgStatus(prev => prev = 5);
        }
    }, [invStatus]);

    class Border {
        constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        }
    }

    const borderCollision = {
        room1: {
        west: new Border(10, 800, 0, 0),
        east: new Border(10, 800, 800, 0),
        north: new Border(800, 10, 0, 0),
        south: new Border(800, 10, 0, 800)
        }
    }

    let player = {
        inventory: invStatus,
        hitPoints: hpStatus,
        damage: dmgStatus,
        silver: silverStatus,
        Player: function () {
            return (
            <div 
                className="box" id="player" 
                style={{ 
                    backgroundColor: colorChange, 
                    top: latitude + "px", left: longitude + "px", 
                    fontSize: 15 - nameChange.length, 
                    animation: animationChange 
                }}>
                {nameChange}
            </div>
            )
        }
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <section style={{position: "relative", width: "860px", height: "860px", marginTop: "50px", backgroundColor: "lightcyan"}}>
                {/* <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[712,413]} setDmgStatus={setDmgStatus} invStatus={invStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus} items={items} currentSave={currentSave} updateCharacter={updateCharacter}/>
                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[128, 673]} setDmgStatus={setDmgStatus} invStatus={invStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus} items={items} currentSave={currentSave} updateCharacter={updateCharacter}/>
                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[542, 263]} setDmgStatus={setDmgStatus} invStatus={invStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus} items={items} currentSave={currentSave} updateCharacter={updateCharacter}/> */}

                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[400,400]} invStatus={invStatus} setInvStatus={setInvStatus} items={items} currentSave={currentSave} currentWorld={currentWorld} updateCharacter={updateCharacter} updateWorld={updateWorld}/>
                <NpcInteraction latitude={latitude} longitude={longitude} entity="orange" setShowDialogue={setShowDialogue} setConversation={setConversation} />
                <NpcInteraction latitude={latitude} longitude={longitude} entity="red" setShowDialogue={setShowDialogue} setConversation={setConversation} />
                <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange} />
                <Map latitude={latitude} longitude={longitude} borderCollision={borderCollision}/>
                <Dialogue showDialogue={showDialogue} setShowDialogue={setShowDialogue} conversation={conversation} setConversation={setConversation} invStatus={invStatus} setInvStatus={setInvStatus} haroldInv={haroldInv} setHaroldInv={setHaroldInv} items={items} setSilverStatus={setSilverStatus} silverStatus={silverStatus} currentSave={currentSave} currentWorld={currentWorld} updateCharacter={updateCharacter} updateWorld={updateWorld}/>
                <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange} hpStatus={hpStatus} dmgStatus={dmgStatus} silverStatus={silverStatus} invStatus={invStatus}/>
                <Warning />
            </section>
      </div>
    )

}

export default DemoBox;