import { useState, useEffect } from 'react';
import Map from '../components/Map.jsx';
import Menu from '../components/Menu.jsx';
import ItemInteraction from '../components/Item.jsx';
import NpcInteraction from '../components/Npc.jsx';
import Dialogue from '../components/Dialogue.jsx';
import Warning from '../components/Warning.jsx';

function DemoBox() {

    const [latitude, setLatitude] = useState(40);
    const [longitude, setLongitude] = useState(40);
    const [showProfile, setShowProfile] = useState("hidden");
    const [nameChange, setNameChange] = useState("");
    const [colorChange, setColorChange] = useState("cyan");
    const [animationChange, setAnimationChange] = useState(null);
    const [hpStatus, setHpStatus] = useState(1);
    const [dmgStatus, setDmgStatus] = useState(1);
    const [silverStatus, setSilverStatus] = useState(100);
    const [invStatus, setInvStatus] = useState([]);
    const [showDialogue, setShowDialogue] = useState("hidden");

    const keyDown = (event) => {

        if (showProfile === "hidden" && showDialogue === "hidden") {
            if ((event.key.toUpperCase() === "S" || event.key === "ArrowDown") && latitude < borderCollision.room1.south.y) {
                setAnimationChange("moveDown .033s linear 1");
                setTimeout(() => {setAnimationChange(null); setLatitude(prev => prev + 20)}, 32);
            } else if ((event.key.toUpperCase() === "W" || event.key === "ArrowUp") && latitude > borderCollision.room1.north.y) {
                setAnimationChange("moveUp .033s linear 1");
                setTimeout(() => {setAnimationChange(null); setLatitude(prev => prev - 20)}, 32);
            } else if ((event.key.toUpperCase() === "D" || event.key === "ArrowRight") && longitude < borderCollision.room1.east.x) {
                setAnimationChange("moveRight .033s linear 1");
                setTimeout(() => {setAnimationChange(null); setLongitude(prev => prev + 20)}, 32);
            } else if ((event.key.toUpperCase() === "A" || event.key === "ArrowLeft") && longitude > borderCollision.room1.west.x) {
                setAnimationChange("moveLeft .033s linear 1");
                setTimeout(() => {setAnimationChange(null); setLongitude(prev => prev - 20)}, 32);
            } else if (event.key.toUpperCase() === "F") {
                setAnimationChange("spin .5s linear 1");
                setTimeout(() => {setAnimationChange(null)}, 500);
            }
        }

        if (event.key === "Escape") {
        setShowProfile(prev =>
            prev === "hidden" ? "visible" : "hidden"
        );
        }
    };

    useEffect(() => {
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
                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[712,413]} setDmgStatus={setDmgStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus}/>
                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[128, 673]} setDmgStatus={setDmgStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus}/>
                <ItemInteraction latitude={latitude} longitude={longitude} entity="orange" location={[542, 263]} setDmgStatus={setDmgStatus} setInvStatus={setInvStatus} setHpStatus={setHpStatus}/>
                <NpcInteraction latitude={latitude} longitude={longitude} entity="orange" setShowDialogue={setShowDialogue}/>
                <NpcInteraction latitude={latitude} longitude={longitude} entity="red" setShowDialogue={setShowDialogue}/>
                <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange} />
                <Map latitude={latitude} longitude={longitude} borderCollision={borderCollision}/>
                <Dialogue showDialogue={showDialogue} setShowDialogue={setShowDialogue}/>
                <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange} hpStatus={hpStatus} dmgStatus={dmgStatus} silverStatus={silverStatus} invStatus={invStatus}/>
                <Warning />
            </section>
      </div>
    )

}

export default DemoBox;