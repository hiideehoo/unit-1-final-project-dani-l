function Player({ latitude, longitude, keyDown, nameChange, colorChange }) {

    return (
        <div className="box" id="player" style={{width: "20px", height: "20px", backgroundColor: colorChange, padding: "10px", margin: "10px", position: "absolute", top: latitude + "px", left: longitude + "px", fontSize: 13 - nameChange.length}} tabIndex="0" onKeyDown={keyDown}>
            {nameChange}
        </div>
    )
}

export default Player;