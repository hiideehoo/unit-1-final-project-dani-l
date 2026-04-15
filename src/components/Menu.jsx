import { useState } from 'react';

function Menu({ showProfile, nameChange, colorChange, handleNameChange, handleColorChange, hpStatus, dmgStatus, silverStatus, invStatus }) {


  const [isShown, setIsShown] = useState(false);

  return (
    <div>

      <div className="backdrop" style={{ visibility: showProfile}} />

      <section
        className="profile" 
        style={{ visibility: showProfile }}
      >
        <h3>Customize</h3>
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
          style={{ position: "absolute", left: "100px" }}
        >
          <option value="cyan">Blue</option>
          <option value="lawngreen">Green</option>
          <option value="pink">Pink</option>
          <option value="gold">Yellow</option>
        </select>
        <div 
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
              <table
                  border="1" style={{  
                    textAlign: "center", width: "80%", position: "absolute", left: "50px"
                  }}
                >
                <tbody>
                  <tr>
                    <th><a title="HP stands for how many Hit Points you have left.">HP</a></th>
                    <th><a title="DMG stands for the Damage you deal.">DMG</a></th>
                    <th><a title="Silver is your currency.">Silver</a></th>
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
          {invStatus.map((number, index) => (
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