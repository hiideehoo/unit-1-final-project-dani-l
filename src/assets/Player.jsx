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
  shield: new Item("shield", "dot", 300, "", [100, 100])
}



function ItemInteraction({ latitude, longitude, entity, setHPStatus, setDMGStatus, setInvStatus }) {

  const [entityVis, setEntityVis] = useState("visible");
  items[entity].vis = entityVis;
  const radius = ((((longitude - items[entity].coords[0] + 20) ** 2) + ((latitude - items[entity].coords[1] + 20) ** 2)) ** 0.5);
  const inRange = (radius < 50) && (items[entity].vis === "visible");

  const keyDown = (event) => {
    if (inRange) {
      if (event.key === " ") {
        setEntityVis(prev => prev === "hidden");
          if (entity === "shield") {setHPStatus(prev => prev + 4); setInvStatus(prev => [...prev, entity]);}
          if (entity === "sword") {setDMGStatus(prev => prev + 4); setInvStatus(prev => [...prev, entity]);}
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
  function Prompt({ entity }) {
    if (inRange) {
      return (
        <div>
          <p style={{ position: "absolute", left: `${items[entity].coords[0] - 35}px`, top: `${items[entity].coords[1] + 15}px` }}>[space] collect</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Inventory entity={entity} />
      <Prompt entity={entity} />
    </div>
  )
}

export default ItemInteraction;