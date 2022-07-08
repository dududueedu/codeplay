import { MOVE_PLAYER, SOUTH, SPRITE_SIZE } from '../../config/gameConstants'

const initialState = {
    id: 0,
    position: [SPRITE_SIZE, SPRITE_SIZE],
    facing: SOUTH,
    step: 1,
    playing: false
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_PLAYER:
            return {
                ...state,
                position: action.payload.position,
                facing: action.payload.facing,
                step: action.payload.step
            }
        default:
            return state;
    }
}

export default playerReducer;