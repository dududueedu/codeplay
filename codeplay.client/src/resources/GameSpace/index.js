import { MAP_HEIGHT, MAP_WIDTH } from "../../config/gameConstants";
import GameMap from "../GameMap";
import { tiles } from "../GameMap/Map/index";
import { setTiles } from "../GameMap/environment";
import { connect } from "react-redux"

function GameSpace(props) {
  if (props.tiles && props.tiles.length === 0) {
    props.setTiles(tiles);
  }
  return (
    <div
      style={{
        gridArea: "game",
        position: "relative",
        width: `${MAP_WIDTH}px`,
        height: `${MAP_HEIGHT}px`,
        outline: "0px",
      }}
      tabIndex="-1"
    >
      <GameMap />
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

export default connect(mapStateToProps, mapDispatchToProps)(GameSpace);
