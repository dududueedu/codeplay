function GamePlayer(pros) {

    function getPixel(step) {
        const pixel = step;
        return `-${pixel}px`;
    }

    function getDirectPixel(direct) {
        const SPRITE_SIZE = 20; // TESTING...
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
}

export default GamePlayer;