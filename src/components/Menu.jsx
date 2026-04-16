import { useState } from 'react';

function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, hpStatus, dmgStatus, silverStatus, invStatus }) {

  return (
    <div>

      <div className="backdrop" style={{ visibility: showProfile}} />

      <section
        className="profile" 
        style={{ visibility: showProfile }}
      >
        <h3>Customize</h3>
        <br />
        <input  // name input
          type="text" id="nameSelect" name="nameSelect" placeholder="name" 
          value={nameChange} onChange={handleNameChange}
          style={{ position: "absolute", left: "60px" }}
        />
        <br />
        <br />
        <select // color change
          id="skinSelect" name="skinSelect" 
          value={colorChange} onChange={handleColorChange}
          style={{ position: "absolute", left: "100px" }}
        >
          <option value="cyan">Blue</option>
          <option value="lawngreen">Green</option>
          <option value="pink">Pink</option>
          <option value="gold">Yellow</option>
        </select>
        <div // player preview
          className="box" id="playerSprite" 
          style={{ 
            width: "80px", height: "80px", 
            backgroundColor: colorChange, color: "black", 
            top: "70px", left: "350px", 
            fontSize: 50 - (nameChange.length * 4.5) 
          }}>
            {nameChange}
        </div>
        <br />
        <br />
        <br />
        <hr width="100%" size="2" />
          <div>
              <h3>Stats</h3>
              <table // table for stats
                  border="1" style={{  
                    textAlign: "center", width: "80%", position: "absolute", left: "50px"
                  }}
                >
                <tbody>
                  <tr>
                    <th><a title="HP stands for how many Hit Points you have left." style={{ cursor: "pointer" }}>HP</a></th>
                    <th><a title="DMG stands for the Damage you deal." style={{ cursor: "pointer" }}>DMG</a></th>
                    <th><a title="Silver is your currency." style={{ cursor: "pointer" }}>Silver</a></th>
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
        <div style={{textAlign: "left" }}>
          <h3>Inventory</h3>
          {invStatus.map((number, index) => ( // list for inventory
            <li key={index} style={{marginLeft: "45px"}}>
              {number}
            </li>
          ))}
        </div>
      </section>

    </div>

  )
}

export default Menu;