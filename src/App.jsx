import { useState, useEffect } from 'react'
import './App.css'


function Map() {

    return (
        <div>
          <div className="hlt"/>
          <div className="vll"/>
          <div className="vlr"/>
          <div className="hlb"/>
        </div>
    )
}



let player = {
  inventory: ["apple", "shield"],
  hitPoints: 1,
  damage: 1,
  silver: 100,
  Player: function({ latitude, longitude, nameChange, colorChange }) {return (
        <div className="box" id="player" style={{width: "20px", height: "20px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: latitude + "px", left: longitude + "px", fontSize: 13 - nameChange.length}} tabIndex="0">
            {nameChange}
        </div>
    )}
}

if (player.inventory.includes('shield') === true) {player.hitPoints += 4;}
if (player.inventory.includes('sword') === true) {player.damage += 4;}


function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange }) {

function displayInv(inv) {
  return (`${inv.join(', ')}`);
}

    return (

        <div className="box" id="profile" style={{ visibility: showProfile }} tabIndex="0">
            <input type="text" id="nameSelect" name="nameSelect" placeholder="name" value={nameChange} onChange={handleNameChange}></input>
            <br />
            <select id="skinSelect" name="skinSelect" value={colorChange} onChange={handleColorChange}>
                <option value="lawngreen">Green</option>
                <option value="orange">Orange</option>
                <option value="cyan">Blue</option>
            </select>
            <div className="box" id="playerSprite" style={{ width: "40px", height: "40px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: "20px", left: "430px", fontSize: 20 - (nameChange.length * 1.75) }}>{nameChange}</div>
            <br></br>
            <br></br>
            <div style={{color: "white", textAlign: "left"}}>
              <h3>Stats</h3>
              HP: {player.hitPoints}
              <br></br>
              DMG: {player.damage}
              <br></br>
              Silver: ₵{player.silver}
            </div>
            <br></br>
            <br></br>
            <div style={{color: "white", textAlign: "left"}}>
              <h3>Inventory</h3>
              {displayInv(player.inventory)}
            </div>
            
        </div>
    )
}


function App() {

    const [latitude, setLatitude] = useState(20);
    const [longitude, setLongitude] = useState(480);
    const [showProfile, setShowProfile] = useState("hidden");
    const keyDown = (event) => {

      if (showProfile === "hidden") {
        if ((event.key === "s" || event.key === "S" || event.key ==="ArrowDown") && latitude < 500) {
            setLatitude(prev => prev + 20);
        } else if ((event.key === "w" || event.key === "W" || event.key ==="ArrowUp") && latitude > 0) {
            setLatitude(prev => prev - 20);
        } else if ((event.key === "d" || event.key === "D" || event.key ==="ArrowRight") && longitude < 500) {
            setLongitude(prev => prev + 20);
        } else if ((event.key === "a" || event.key === "A" || event.key ==="ArrowLeft") && longitude > 0) {
            setLongitude(prev => prev - 20);
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


    const [nameChange, setNameChange] = useState("");
    const [colorChange, setColorChange] = useState("cyan");

    function handleNameChange(e) {
        setNameChange(e.target.value);
    }
    function handleColorChange(e) {
        setColorChange(e.target.value);
    }

  return (
    <>
      <div>
        <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange}/>
        <Map/>
        <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange}/>
      </div>
    </>
  )
}

export default App;