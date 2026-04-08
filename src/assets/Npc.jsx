import { useState, useEffect } from 'react';

class Npc {
  constructor(name, className, color, inv, vis, coords) {
    this.name = name;
    this.className = className;
    this.color = color;
    this.inv = inv;
    this.vis = vis;
    this.coords = coords;
  }
}
let npcs = {
  harold: new Npc("Harold", "box", "orange", ["orange"], "", [200, 200])
}



function NpcInteraction({ latitude, longitude, entity }) {

  const [entityVis, setEntityVis] = useState("visible");
  npcs[entity].vis = entityVis;
  const radius = ((((longitude - npcs[entity].coords[0]) ** 2) + ((latitude - npcs[entity].coords[1]) ** 2)) ** 0.5);
  const inRange = (radius < 75) && (npcs[entity].vis === "visible");

  const keyDown = (event) => {
    if (inRange) {
      if (event.key === " ") {
        console.log("hi!");
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return (() => {
      window.removeEventListener('keydown', keyDown);
    })
  })

  function Placement({entity}) {
    if (entityVis === "visible") {
      return (
        <div>
          <div className={npcs[entity].className} style={{ visibility: entityVis, backgroundColor: npcs[entity].color, fontSize: 15 - npcs[entity].name.length, left: `${npcs[entity].coords[0]}px`, top: `${npcs[entity].coords[1]}px` }}>{npcs[entity].name}</div>
        </div>
      )
    }
  }
  function Prompt({ entity }) {
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${npcs[entity].coords[0] - 6}px`, top: `${npcs[entity].coords[1] + 40}px` }}>[space] talk</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Placement entity={entity} />
      <Prompt entity={entity} />
    </div>
  )
}

export default NpcInteraction;