function Menu({ showProfile, keyDown, nameChange, colorChange, handleNameChange, handleColorChange }) {

    return (
        <div className="box" id="profile" style={{ visibility: showProfile }} tabIndex="0" onKeyDown={keyDown}>
            <input type="text" id="nameSelect" name="nameSelect" placeholder="PC" value={nameChange} onChange={handleNameChange}></input>
            <br />
            <select id="skinSelect" name="skinSelect" value={colorChange} onChange={handleColorChange}>
                <option value="lawngreen">Green</option>
                <option value="orange">Orange</option>
                <option value="cyan">Blue</option>
            </select>
            <div className="box" id="playerSprite" style={{ width: "40px", height: "40px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: "20px", left: "430px", fontSize: 20 - (nameChange.length * 1.75) }}>{nameChange}</div>
        </div>
    )
}

export default Menu;