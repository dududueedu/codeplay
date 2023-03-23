import walkCharacter from '../../data/Characters/Student_11.png'
import {NORTH, SOUTH, EAST, WEST, SPRITE_SIZE} from '../../config/gameConstants'
import { connect } from 'react-redux'

function GamePlayer(props) {

    function getPixel(step) {
        const pixel = step;
        return `-${pixel}px`;
    }

    function getDirectPixel(facing) {
        switch (facing) {
            case NORTH:
                return `-${SPRITE_SIZE*3}px`;
            case SOUTH:
                return `${SPRITE_SIZE*0}px`;
            case EAST:
                return `-${SPRITE_SIZE*2}px`;
            case WEST:
                return `-${SPRITE_SIZE}px`;
            default:
                console.log('INVALID DIRECTING');
        }
    }

    return (
        <div
            style = {{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`,
                backgroundImage: `url('${walkCharacter}')`,
                backgroundPosition: `${getPixel(props.step)} ${getDirectPixel(props.facing)}`,
                backgroundRepeat: 'no-repeat'
            }}
        >
        </div>
    )
}

function mapStateToProps(state) {
    return {
        position: state.player.position,
        facing: state.player.facing,
        step: state.player.step
    }
}

export default connect(mapStateToProps)(GamePlayer);