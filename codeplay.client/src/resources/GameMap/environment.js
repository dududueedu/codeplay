import { SET_TILES } from '../../config/gameConstants'

export function setTiles(tiles) {
    return {
        type: SET_TILES,
        payload: tiles
    }
}