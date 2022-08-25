import { MAP_HEIGHT, MAP_WIDTH } from "../../config/gameConstants";
import "./index.css";

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
