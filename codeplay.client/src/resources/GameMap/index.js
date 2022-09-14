import {
  SPRITE_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH,
  PCN,
  PRO,
  CLN,
} from "../../config/gameConstants";
import "./index.css";

function MapTile(props) {
  function getTileEvent(type) {
    switch (type) {
      case PRO:
        return "quest";
      case PCN:
        return "quest_colision";
      case CLN:
        return "colision";
      default:
        break;
    }
  }

  return (
    <div
      className={`tile ${getTileEvent(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    />
  );
}

function MapRow(props) {
  return (
    <div style={{ height: `${SPRITE_SIZE}px` }}>
      {props.tiles.map((tile, index) => {
        return <MapTile tile={tile} key={index} />;
      })}
    </div>
  );
}

function GameMap(props) {
  return (
    <div
      className="map"
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: `${MAP_WIDTH}px`,
        height: `${MAP_HEIGHT}px`,
      }}
    >
    </div>
  );
}

export default GameMap;

/*{props.tiles.map((row, index) => {
  return <MapRow tiles={row} key={index} />;
})}*/