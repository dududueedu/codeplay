function GamePlayer(props) {

    const SPRITE_SIZE = 20; // TESTING...
    const walkSprite = './../../setupTests.js'; // TESTING...

    function getPixel(step) {
        const pixel = step;
        return `-${pixel}px`;
    }

    function getDirectPixel(direct) {
        switch (direct) {
            case 1:
                return `${SPRITE_SIZE*0}px`
            case 2:
                return `-${SPRITE_SIZE*3}px`
            case 3:
                return `-${SPRITE_SIZE}px`
            case 4:
                return `-${SPRITE_SIZE*2}px`
            default:
                console.log('INVALID DIRECTING');
        }
    }

    getPixel();
    getDirectPixel();

    return (
        <div
            style = {{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`,
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: `${getPixel(props.step)} ${getDirectPixel(props.direct)}`,
                backgroundRepeat: 'no-repeat'
            }}
        >
        </div>
    )
}

export default GamePlayer;