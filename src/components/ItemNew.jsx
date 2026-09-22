import { useState, useEffect } from 'react';

function ItemInteraction({ latitude, longitude, entity, location, invStatus, setInvStatus, items, currentSave, currentWorld, updateCharacter, updateWorld }) {

  let [entityRender, setEntityRender] = useState(currentWorld.itemRender);
  const [entityOpacity, setEntityOpacity] = useState("0");
  items[entity].opacity = entityOpacity;
  const inRange = (((((longitude - location[0]) ** 2) + ((latitude - location[1]) ** 2)) ** 0.5) < 67) && (entityRender === true); // Checks distance from entity

  const keyDown = (event) => { // space input to interact
    if (inRange) {
      if (event.key === " ") {
        setEntityRender(entityRender = false);
        let updateInv = [...invStatus, entity];
        setInvStatus(invStatus = updateInv);
        updateCharacter(currentSave.name, currentSave.color, currentSave.x, currentSave.y, currentSave.silver, updateInv);
        updateWorld(false, currentWorld.invHarold);
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
    if (entityRender === true) {
      return (
        <div>
          <div className={items[entity].className} style={{ opacity: entityOpacity, left: `${location[0]}px`, top: `${location[1]}px` }} />
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