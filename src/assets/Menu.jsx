function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, hpStatus, dmgStatus, silverStatus, invStatus }) {

  function displayHP() {return hpStatus}
  function displayDMG() {return dmgStatus}
  function display$() {return silverStatus}
  function displayInv() {
    return (`${invStatus.join(', ')}`);
  }

  return (

    <div className="box" id="profile" style={{ visibility: showProfile }}>
      <input type="text" id="nameSelect" name="nameSelect" placeholder="name" value={nameChange} onChange={handleNameChange}></input>
      <br />
      <select id="skinSelect" name="skinSelect" value={colorChange} onChange={handleColorChange}>
        <option value="lawngreen">Green</option>
        <option value="orange">Orange</option>
        <option value="cyan">Blue</option>
      </select>
      <div className="box" id="playerSprite" style={{ width: "40px", height: "40px", backgroundColor: colorChange, top: "20px", left: "430px", fontSize: 20 - (nameChange.length * 1.5) }}>{nameChange}</div>
      <br />
      <br />
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Stats</h3>
        HP: {displayHP()}
        <br />
        DMG: {displayDMG()}
        <br />
        Silver: ₵{display$()}
      </div>
      <br />
      <br />
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Inventory</h3>
        {displayInv()}
      </div>
    </div>
  )
}

export default Menu;