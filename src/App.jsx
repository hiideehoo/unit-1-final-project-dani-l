import { useState, useEffect } from 'react'
import Menu from '../src/assets/Menu.jsx'
import Player from '../src/assets/Player.jsx'
import Map from '../src/assets/Map.jsx'
import './App.css'

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
          if (showProfile === "hidden") {setShowProfile("visible");} else if (showProfile === "visible") {setShowProfile("hidden");}
        }
    };

    useEffect(() => {
      document.addEventListener('keydown', keyDown);

      return function cleanup() {
      document.removeEventListener('keydown', keyDown);
      }
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
        <Player latitude={latitude} longitude={longitude} keyDown={keyDown} nameChange={nameChange} colorChange={colorChange}/>
        <Map/>
        <Menu showProfile={showProfile} keyDown={keyDown} colorChange={colorChange} nameChange={nameChange} handleNameChange={handleNameChange} handleColorChange={handleColorChange}/>
      </div>
    </>
  )
}

export default App;