import { RESULTS } from './store';

export default {
    START_INTRO: 'Durf jij het aan om het op te nemen tegen de apen in dit verblijf?',
    START_BUTTON: 'START',
    WAIT_INTRO: 'Wacht tot de apen het spel accepteren',
    RESULT_INTRO: 'JE HEBT',
    RESULT: {
        [RESULTS.DRAW]: 'GELIJK GESPEELD',
        [RESULTS.WON]: 'GEWONNEN',
        [RESULTS.LOST]: 'VERLOREN',
    },
};