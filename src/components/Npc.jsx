import { useState, useEffect } from 'react';

function NpcInteraction({ latitude, longitude, entity, setShowDialogue, setConversation }) {

const [entityVis, setEntityVis] = useState("visible");

  class Npc {
    constructor(name, className, color, coords) {
      this.name = name;
      this.className = className;
      this.color = color;
      this.coords = coords;
      this.vis = entityVis;
    }
  }
  let npcs = {
    orange: new Npc("Harold", "box", "orange", [430, 120]),
    red: new Npc("Rowyn", "box", "red", [750, 750])
  }


  const inRange = (((((longitude - npcs[entity].coords[0]) ** 2) + ((latitude - npcs[entity].coords[1]) ** 2)) ** 0.5) < 75) && (npcs[entity].vis === "visible"); // Checks distance from entity

  function Update(entity) { // Opens dialogue menu
    setConversation(npcs[entity].name);
    setShowDialogue("visible");
  }
  function Placement({entity}) { // places on map
    if (entityVis === "visible") {
      return (
        <div>
          <div className={npcs[entity].className} style={{ visibility: entityVis, backgroundColor: npcs[entity].color, fontSize: 15 - npcs[entity].name.length, left: `${npcs[entity].coords[0]}px`, top: `${npcs[entity].coords[1]}px` }}>{npcs[entity].name}</div>
        </div>
      )
    }
  }
  function Prompt({ entity }) { // displays prompt when near entity
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${npcs[entity].coords[0] - 10}px`, top: `${npcs[entity].coords[1] + 40}px` }}>[space] talk</p>
        </div>
      )
    }
  }

  

    const keyDown = (event) => { // space input to interact
    if (inRange) {
      if (event.key === " ") {
        return (
          Update(entity)
        )
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return (() => {
      window.removeEventListener('keydown', keyDown);
    })
  })

  return (
    <div>
      <Placement entity={entity} />
      <Prompt entity={entity} />
    </div>
  )
}

export default NpcInteraction;