import { MAP_HEIGHT, MAP_WIDTH } from "../../config/gameConstants";
import GameMap from "../GameMap";

function GameSpace(props) {
  return (
      <div
        style={{
          gridArea: "game",
          position: "relative",
          width: `${MAP_WIDTH}px`,
          height: `${MAP_HEIGHT}px`,
          outline: "0px"
        }}
        tabIndex="-1"
      >
        <GameMap />
      </div>
  );
}

export default GameSpace;
