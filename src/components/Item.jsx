import { useState, useEffect } from 'react';
class Item {
  constructor(name, className, value, vis, opacity, coords) {
    this.name = name;
    this.className = className;
    this.value = value;
    this.vis = vis;
    this.opacity = opacity;
    this.coords = coords;
  }
}
let items = {
  orange: new Item("orange", "dot", 100, "", "", [])
}



function ItemInteraction({ latitude, longitude, entity, location, setHpStatus, setDmgStatus, setInvStatus }) {

  const [entityVis, setEntityVis] = useState("visible");
  const [entityOpacity, setEntityOpacity] = useState("0");
  items[entity].vis = entityVis;
  items[entity].opacity = entityOpacity;
  const inRange = (((((longitude - location[0] + 20) ** 2) + ((latitude - location[1] + 20) ** 2)) ** 0.5) < 60) && (items[entity].vis === "visible");

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

  function Placement({entity}) {
    if (entityVis === "visible") {
      return (
        <div>
          <div className={items[entity].className} style={{ visibility: entityVis, opacity: entityOpacity, left: `${location[0]}px`, top: `${location[1]}px` }} />
        </div>
      )
    }
  }
  function Prompt() {

    function Find() {
      setEntityOpacity(1)
    }

    if (inRange) {
      return (
        <div>
          <Find />
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