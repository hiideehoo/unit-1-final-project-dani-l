function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, hpStatus, dmgStatus, silverStatus, invStatus }) {

  return (

    <div 
      className="box" id="profile" 
      style={{ visibility: showProfile }}
    >

      <input 
        type="text" id="nameSelect" name="nameSelect" placeholder="name" 
        value={nameChange} onChange={handleNameChange}
      />
      <br />

      <select 
        id="skinSelect" name="skinSelect" 
        value={colorChange} onChange={handleColorChange}
      >
        <option value="cyan">Blue</option>
        <option value="gold">Yellow</option>
        <option value="lawngreen">Green</option>
      </select>
      
      <div 
        className="box" id="playerSprite" 
        style={{ 
          width: "40px", height: "40px", 
          backgroundColor: colorChange, 
          top: "20px", left: "430px", 
          fontSize: 20 - (nameChange.length * 1.5) 
        }}>
          {nameChange}
      </div>
      <br />

      <br />
        <div style={{ color: "white" }}>
            <h3>Stats</h3>
            <table border="1" style={{  textAlign: "center", width: "40%" }}>
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
      <div style={{ color: "white", textAlign: "left" }}>
        <h3>Inventory</h3>
        {invStatus.map((number, index) => (
          <li key={index} style={{marginLeft: "15px"}}>
            {number}
          </li>
        ))}
      </div>
    </div>

  )
}

export default Menu;