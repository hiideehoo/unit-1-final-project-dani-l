import { useState, useEffect } from 'react'
import Map from '../src/assets/Map.jsx'
import Menu from '../src/assets/Menu.jsx'
import ItemInteraction from './assets/Player.jsx'
import './App.css'

function App() {

  const [latitude, setLatitude] = useState(20);
  const [longitude, setLongitude] = useState(480);
  const [showProfile, setShowProfile] = useState("hidden");
  const [nameChange, setNameChange] = useState("");
  const [colorChange, setColorChange] = useState("cyan");
  const [hPStatus, setHPStatus] = useState(1);
  const [dMGStatus, setDMGStatus] = useState(1);
  const [$Status, set$Status] = useState(100);
  const [invStatus, setInvStatus] = useState(["apple"]);

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
      west: new Border(10, 500, 0, 0),
      east: new Border(10, 500, 500, 0),
      north: new Border(500, 10, 0, 0),
      south: new Border(500, 10, 0, 500)
    }
  }

  let player = {
  inventory: invStatus,
  hitPoints: hPStatus,
  damage: dMGStatus,
  silver: $Status,
  Player: function ({ latitude, longitude, nameChange, colorChange }) {
    return (
      <div className="box" id="player" style={{ width: "20px", height: "20px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: latitude + "px", left: longitude + "px", fontSize: 13 - nameChange.length }}>
        {nameChange}
      </div>
    )
  }
}

  return (
    <>
      <div>
        <ItemInteraction latitude={latitude} longitude={longitude} entity="shield" setDMGStatus={setDMGStatus} setInvStatus={setInvStatus} setHPStatus={setHPStatus}/>
        <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange} />
        <Map latitude={latitude} longitude={longitude} borderCollision={borderCollision}/>
        <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange} hPStatus={hPStatus} dMGStatus={dMGStatus} $Status={$Status} invStatus={invStatus}/>
      </div>
    </>
  )
}

export default App;