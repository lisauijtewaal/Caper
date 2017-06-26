const STATES = {
    START_SCREEN: 0,
    WAIT_SCREEN: 1,
    GAME_SCREEN: 2,
    RESULT_SCREEN: 3,
};

const RESULTS = {
    WON: 0,
    LOST: 1,
    DRAW: 2,
};

const FRUIT = {
    'framboos': require('./images/rasberry.jpg'),
    'banaan': require('./images/banana.jpg'),
    'bes': require('./images/berry.jpg'),
    'kiwi': require('./images/kiwi.jpg'),
    'limoen': require('./images/lemon.jpg'),
    'sinaasappel': require('./images/orange.jpg'),
    'aardbei': require('./images/strawberry.jpg'),
};

export {
    STATES,
    RESULTS,
    FRUIT,
};