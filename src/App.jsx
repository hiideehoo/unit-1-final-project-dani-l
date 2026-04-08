import { useState, useEffect } from 'react'
import Map from '../src/assets/Map.jsx'
import Menu from '../src/assets/Menu.jsx'
import './App.css'

class Item {
  constructor(name, className, value, vis, coords) {
    this.name = name;
    this.className = className;
    this.value = value;
    this.vis = vis;
    this.coords = coords;
  }
}

let items = {
  shield: new Item("shield", "dot", 300, "", [100, 100])
}

function ItemInteraction({ latitude, longitude, entity }) {

  const [entityVis, setEntityVis] = useState("visible");
  items[entity].vis = entityVis;
  const radius = ((((longitude - items[entity].coords[0] + 20) ** 2) + ((latitude - items[entity].coords[1] + 20) ** 2)) ** 0.5);
  const inRange = (radius < 50) && (items[entity].vis === "visible");

  const keyDown = (event) => {
    if (inRange) {
      if (event.key === " ") {
        setEntityVis(prev => prev === "hidden");
          if (entity === "shield") {player.hitPoints += 4; player.inventory.push(entity);}
          if (entity === "sword") {player.hitPoints += 4; player.inventory.push(entity);}
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return (() => {
      window.removeEventListener('keydown', keyDown);
    })
  })

  function Inventory({entity}) {
    if (entityVis === "visible") {
      return (
        <div>
          <div className={items[entity].className} style={{ visibility: entityVis, left: `${items[entity].coords[0]}px`, top: `${items[entity].coords[1]}px` }} />
        </div>
      )
    }
  }
  function Popup({ entity }) {
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${items[entity].coords[0] - 35}px`, top: `${items[entity].coords[1] + 35}px` }}>[space] collect</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Inventory entity={entity} />
      <Popup entity={entity} />
    </div>
  )
}





let player = {
  inventory: ["apple"],
  hitPoints: 1,
  damage: 1,
  silver: 100,
  Player: function ({ latitude, longitude, nameChange, colorChange }) {
    return (
      <div className="box" id="player" style={{ width: "20px", height: "20px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: latitude + "px", left: longitude + "px", fontSize: 13 - nameChange.length }}>
        {nameChange}
      </div>
    )
  }
}




function App() {

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

  const [latitude, setLatitude] = useState(20);
  const [longitude, setLongitude] = useState(480);
  const [showProfile, setShowProfile] = useState("hidden");
  const [nameChange, setNameChange] = useState("");
  const [colorChange, setColorChange] = useState("cyan");

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

  return (
    <>
      <div>
        <ItemInteraction latitude={latitude} longitude={longitude} entity="shield" />
        <player.Player latitude={latitude} longitude={longitude} nameChange={nameChange} colorChange={colorChange} />
        <Map latitude={latitude} longitude={longitude} borderCollision={borderCollision}/>
        <Menu showProfile={showProfile} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange} player={player}/>
      </div>
    </>
  )
}

export default App;