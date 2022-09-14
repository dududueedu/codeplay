import { createStore, combineReducers } from "redux";
import playerReducer from "../resources/GamePlayer/reducer_player";
import mapReducer from "../resources/GameMap/reducer";

const rootReducer = combineReducers(
  {
    player: playerReducer,
    map: mapReducer,
  }
);

const store = createStore( rootReducer );

export default store;