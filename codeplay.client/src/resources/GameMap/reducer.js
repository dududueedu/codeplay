import { SET_TILES } from '../../config/gameConstants'

const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    console.log("aqui: "+action.type)
    switch(action.type) {
        case SET_TILES:
            return {
                ...state,
                tiles: action.payload
            }
        default:
            return state;
    }
}

export default mapReducer;