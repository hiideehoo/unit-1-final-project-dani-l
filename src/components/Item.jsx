import { useState, useEffect } from 'react';

function ItemInteraction({ latitude, longitude, entity, location, setHpStatus, setDmgStatus, setInvStatus, items }) {

  const [entityVis, setEntityVis] = useState("visible");
  const [entityOpacity, setEntityOpacity] = useState("0");
  items[entity].vis = entityVis;
  items[entity].opacity = entityOpacity;
  const inRange = (((((longitude - location[0]) ** 2) + ((latitude - location[1]) ** 2)) ** 0.5) < 67) && (items[entity].vis === "visible"); // Checks distance from entity

  const keyDown = (event) => { // space input to interact
    if (inRange) {
      if (event.key === " ") {
        setEntityVis(prev => prev === "hidden");
        setInvStatus(prev => [...prev, entity]);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return (() => {
      window.removeEventListener('keydown', keyDown);
    })
  })

  useEffect(() => { // Displays entity once found in the map
    if (inRange) {
      setEntityOpacity(1);
    }
  })

  function Placement({entity}) { // places entity on the map
    if (entityVis === "visible") {
      return (
        <div>
          <div className={items[entity].className} style={{ visibility: entityVis, opacity: entityOpacity, left: `${location[0]}px`, top: `${location[1]}px` }} />
        </div>
      )
    }
  }

  function Prompt() { // displays text when in range of entity
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${location[0] - 40}px`, top: `${location[1] + 15}px` }}>[space] collect</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Placement entity={entity} />
      <Prompt />
    </div>
  )
}

export default ItemInteraction;