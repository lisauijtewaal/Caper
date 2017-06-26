import 'ion-sound';
import { FRUIT } from './consts';

const fruits = Object.keys(FRUIT);

const ion = window.ion;

ion.sound({
    sounds: ['correct', 'wrong', 'wacht', 'gelijk', 'gewonnen', 'verloren', ...fruits].map(name => ({name})),
    volume: 1,
    path: '/sounds/',
    preload: true
});

export default ion;