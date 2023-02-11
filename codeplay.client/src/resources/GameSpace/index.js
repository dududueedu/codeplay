import { MAP_HEIGHT, MAP_WIDTH,  } from "../../config/gameConstants";
import GameMap from "../GameMap";
import { tiles } from "../GameMap/Map/index";
import { setTiles } from "../GameMap/environment";
import { connect } from "react-redux"
import { NORTH, SOUTH, EAST, WEST } from '../../config/gameConstants'
import { moveToPosition } from './events'

function GameSpace(props) {

  function handleKeyDown(e) {
    switch (e.keyCode) {
        case 37:
            return props.moveToPosition(WEST)
        case 38:
            return props.moveToPosition(NORTH)
        case 39:
            return props.moveToPosition(EAST)
        case 40:
            return props.moveToPosition(SOUTH)
        default: return
    }
  }

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
      onKeyDown={
        (e) => {
            e.preventDefault()
            handleKeyDown(e)
        }
    }
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
    moveToPosition(direction) {
      const action = moveToPosition(direction)
      dispatch(action)
    },
    setTiles(tiles) {
      const action = setTiles(tiles);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSpace);
