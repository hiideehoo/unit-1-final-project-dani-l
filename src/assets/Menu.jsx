function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, player }) {

  function displayHP() {return (`${player.hitPoints}`)}
  function displayDMG() {return (`${player.damage}`)}
  function display$() {return (`${player.silver}`)}
  function displayInv() {
    return (`${player.inventory.join(', ')}`);
  }

  return (

    <div className="box" id="profile" style={{ visibility: showProfile }} tabIndex="0">
      <input type="text" id="nameSelect" name="nameSelect" placeholder="name" value={nameChange} onChange={handleNameChange}></input>
      <br />
      <select id="skinSelect" name="skinSelect" value={colorChange} onChange={handleColorChange}>
        <option value="lawngreen">Green</option>
        <option value="orange">Orange</option>
        <option value="cyan">Blue</option>
      </select>
      <div className="box" id="playerSprite" style={{ width: "40px", height: "40px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: "20px", left: "430px", fontSize: 20 - (nameChange.length * 1.75) }}>{nameChange}</div>
      <br></br>
      <br></br>
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Stats</h3>
        HP: {displayHP()}
        <br></br>
        DMG: {displayDMG()}
        <br></br>
        Silver: ₵{display$()}
      </div>
      <br></br>
      <br></br>
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Inventory</h3>
        {displayInv()}
      </div>
    </div>
  )
}

export default Menu;