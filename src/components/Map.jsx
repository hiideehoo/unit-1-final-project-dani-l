function Map({ borderCollision }) {

    let bound1 = borderCollision.room1

    return ( // renders visuals for walls
        <div>
            <div id="westWall" className="room1" style={{ width: `${bound1.west.width}px`, height: `${bound1.west.height + 50}px`, left: `${bound1.west.x}px`, top: `${bound1.west.y}px` }} />
            <div id="eastWall" className="room1" style={{ width: `${bound1.east.width}px`, height: `${bound1.east.height + 50}px`, left: `${bound1.east.x + 50}px`, top: `${bound1.east.y}px` }} />
            <div id="northWall" className="room1" style={{ width: `${bound1.north.width + 50}px`, height: `${bound1.north.height}px`, left: `${bound1.north.x}px`, top: `${bound1.north.y}px` }} />
            <div id="southWall" className="room1" style={{ width: `${bound1.south.width + 60}px`, height: `${bound1.south.height}px`, left: `${bound1.south.x}px`, top: `${bound1.south.y + 50}px` }} />
        </div>
    )
}

export default Map;