import PropTypes from 'prop-types';

export const GAMESTATES = {
    UNSTARTED: 'UNSTARTED',
    STARTED: 'STARTED',
    FINISHED: 'FINISHED'
}

const gameState = {
    state: GAMESTATES.UNSTARTED,
    player:  {
    },
    dealer: {
    },
    deck: []
}

export default gameState


/**
 * 
 */
export const GameCardShape = PropTypes.shape({
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    suit: PropTypes.oneOf( ["spades", "diamonds", "hearts", "clubs"] ),
    value: PropTypes.number,
    flipped: PropTypes.bool
})
export const GamePlayershape = PropTypes.shape({
    hand: PropTypes.arrayOf(GameCardShape),
    score: PropTypes.number,
    busted: PropTypes.bool
})

export const GAMESTATEShape = PropTypes.shape({
    state: PropTypes.oneOf([
        GAMESTATES.FINISHED,
        GAMESTATES.STARTED,
        GAMESTATES.UNSTARTED
    ]),
    deck: PropTypes.arrayOf(GameCardShape),
    player: GamePlayershape,
    dealer: GamePlayershape
})
