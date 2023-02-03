import {
  SPRITE_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH,
  PCN,
  PRO,
  CLN,
  GRS,
  CHS
} from "../../config/gameConstants";
import "./index.css";
import { setTiles } from "./environment";
import { connect } from "react-redux"

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
      {props.tiles.map((row, index) => {
        return <MapRow tiles={row} key={index} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTiles(tiles) {
      const action = setTiles(tiles);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMap);