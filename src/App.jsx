import { useState, useEffect } from 'react'
import './App.css'

class Item {
  constructor(name, value, vis, coords) {
    this.name = name;
    this.value = value;
    this.vis = vis;
    this.coords = coords;
  }
}

let items = {
  ball: new Item("ball", 300, "visible", [100, 100])
}

function Inventory() {

  return (
    <div>
      <div className="dot" style={{ visibility: items.ball.vis, left: `${items.ball.coords[0]}px`, top: `${items.ball.coords[1]}px` }} />
    </div>
  )
}

function Interaction({ latitude, longitude }) {
    if (!(latitude > (items.ball.coords[1] - 50) && 
    latitude < (items.ball.coords[1] + 50) && 
    longitude > (items.ball.coords[0] - 50) && 
    longitude < (items.ball.coords[0] + 50))) {
      return null;
    }

      return (
        <div>
          <p style={{ position: "absolute", left: `${items.ball.coords[0]-35}px`, top: `${items.ball.coords[1]+35}px` }}>[space] collect</p>
        </div>
      )
    }
  
class Border {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
}

let borderCollision = {
  room1: {
    west: new Border(10, 500, 0, 0),
    east: new Border(10, 500, 500, 0),
    north: new Border(500, 10, 0, 0),
    south: new Border(500, 10, 0, 500)
  }
}

function Map() {

  let bound1 = borderCollision.room1

  return (
    <div>
      <div id="westWall" className="room1" style={{ width: `${bound1.west.width}px`, height: `${bound1.west.height + 50}px`, left: `${bound1.west.x}px`, top: `${bound1.west.y}px` }} />
      <div id="eastWall" className="room1" style={{ width: `${bound1.east.width}px`, height: `${bound1.east.height + 50}px`, left: `${bound1.east.x + 50}px`, top: `${bound1.east.y}px` }} />
      <div id="northWall" className="room1" style={{ width: `${bound1.north.width + 50}px`, height: `${bound1.north.height}px`, left: `${bound1.north.x}px`, top: `${bound1.north.y}px` }} />
      <div id="southWall" className="room1" style={{ width: `${bound1.south.width + 60}px`, height: `${bound1.south.height}px`, left: `${bound1.south.x}px`, top: `${bound1.south.y + 50}px` }} />
    </div>
  )
}



let player = {
  inventory: ["apple", "shield"],
  hitPoints: 1,
  damage: 1,
  silver: 100,
  Player: function ({ latitude, longitude, nameChange, colorChange }) {
    return (
      <div className="box" id="player" style={{ width: "20px", height: "20px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: latitude + "px", left: longitude + "px", fontSize: 13 - nameChange.length }} tabIndex="0">
        {nameChange}
      </div>
    )
  }
}

if (player.inventory.includes('shield') === true) { player.hitPoints += 4; }
if (player.inventory.includes('sword') === true) { player.damage += 4; }


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
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Stats</h3>
        HP: {player.hitPoints}
        <br></br>
        DMG: {player.damage}
        <br></br>
        Silver: ₵{player.silver}
      </div>
      <br></br>
      <br></br>
      <div style={{ color: "white", textAlign: "left" }}>
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
      if ((event.key === "s" || event.key === "S" || event.key === "ArrowDown") && latitude < borderCollision.room1.south.y) {
        setLatitude(prev => prev + 20);
      } else if ((event.key === "w" || event.key === "W" || event.key === "ArrowUp") && latitude > borderCollision.room1.north.y) {
        setLatitude(prev => prev - 20);
      } else if ((event.key === "d" || event.key === "D" || event.key === "ArrowRight") && longitude < borderCollision.room1.east.x) {
        setLongitude(prev => prev + 20);
      } else if ((event.key === "a" || event.key === "A" || event.key === "ArrowLeft") && longitude > borderCollision.room1.west.x) {
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
        <Inventory/>
        <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange} />
        <Map latitude={latitude} longitude={longitude} />
        <Interaction latitude={latitude} longitude={longitude}/>
        <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange} />
      </div>
    </>
  )
}

export default App;