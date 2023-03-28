import { legacy_createStore as createStore, combineReducers } from 'redux'
import mapReducer from "../resources/GameMap/reducer";
import playerReducer from "../resources/GamePlayer/reducer_player";

const rootReducer = combineReducers( //combina os redutores que modificam o estado geral
    {
        player: playerReducer,
        map: mapReducer, 
    }
)

const store = createStore( //cria o estado geral dos reducers
    rootReducer,
)

export default store