function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, hpStatus, dmgStatus, silverStatus, invStatus }) {

  return (

    <div
      id="profile" 
      style={{ visibility: showProfile }}
    >
      <br />
      <br />
      <br />
      <input 
        type="text" id="nameSelect" name="nameSelect" placeholder="name" 
        value={nameChange} onChange={handleNameChange}
        style={{ position: "absolute", left: "60px" }}
      />
      <br />
      <br />
      <select 
        id="skinSelect" name="skinSelect" 
        value={colorChange} onChange={handleColorChange}
        style={{ position: "absolute", left: "120px" }}
      >
        <option value="cyan">Blue</option>
        <option value="gold">Yellow</option>
        <option value="lawngreen">Green</option>
      </select>
      <div 
        className="box" id="playerSprite" 
        style={{ 
          width: "80px", height: "80px", 
          backgroundColor: colorChange, 
          top: "40px", left: "350px", 
          fontSize: 60 - (nameChange.length * 6.5) 
        }}>
          {nameChange}
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr width="100%" size="2" />
        <div style={{ color: "white" }}>
            <h3>Stats</h3>
            <table border="1" style={{  textAlign: "center", width: "80%", position: "absolute", left: "50px"}}>
              <tbody>
                <tr>
                  <th>HP</th>
                  <th>DMG</th>
                  <th>Silver</th>
                </tr>
                <tr>
                  <td>{hpStatus}</td>
                  <td>{dmgStatus}</td>
                  <td>{silverStatus}₵</td>
                </tr>
              </tbody>
            </table>
        </div>
      <br />
      <br />
      <br />
      <br />
      <hr width="100%" size="2" />
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Inventory</h3>
        {invStatus.map((number, index) => (
          <li key={index} style={{marginLeft: "45px"}}>
            {number}
          </li>
        ))}
      </div>
    </div>

  )
}

export default Menu;