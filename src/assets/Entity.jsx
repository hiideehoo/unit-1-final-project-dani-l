import { useState, useEffect } from 'react';
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
  orange: new Item("orange", "dot", 100, "", [])
}



function ItemInteraction({ latitude, longitude, entity, location, setHpStatus, setDmgStatus, setInvStatus }) {

  const [entityVis, setEntityVis] = useState("visible");
  items[entity].vis = entityVis;
  const radius = ((((longitude - location[0] + 20) ** 2) + ((latitude - location[1] + 20) ** 2)) ** 0.5);
  const inRange = (radius < 50) && (items[entity].vis === "visible");

  const keyDown = (event) => {
    if (inRange) {
      if (event.key === " ") {
        setEntityVis(prev => prev === "hidden");
        setInvStatus(prev => [...prev, entity]);
          if (entity === "shield") {setHpStatus(prev => prev + 4);}
          if (entity === "sword") {setDmgStatus(prev => prev + 4);}
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return (() => {
      window.removeEventListener('keydown', keyDown);
    })
  })

  // entity.addEventListener('hover', )

  function Placement({entity}) {
    if (entityVis === "visible") {
      return (
        <div>
          <div className={items[entity].className} style={{ visibility: entityVis, left: `${location[0]}px`, top: `${location[1]}px` }} />
        </div>
      )
    }
  }
  function Prompt() {
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${location[0] - 35}px`, top: `${location[1] + 15}px` }}>[space] collect</p>
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