import { getUser } from '../localStorage.js';
import { renderHeader } from '../render-header.js';
import { 
    aliveGoldMessages, 
    deadGoldMessages,
    hpMessages,
} from './messages.js';

renderHeader();
const user = getUser();
const userIsDead = user.hp <= 0;

let goldStatus;
if (user.gold < 20) {
    goldStatus = 'poor';
} else if (user.gold < 50){
    goldStatus = 'moderate';
} else {
    goldStatus = 'rich';
}

let hpStatus;
if (userIsDead) {
    hpStatus = 'dead';
} else if (user.hp < 10) {
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

const goldMessagesToUse = userIsDead 
    ? deadGoldMessages 
    : aliveGoldMessages;


const resultsString = `${goldMessagesToUse[goldStatus]}. ${hpMessages[hpStatus]}`;

const section = document.querySelector('section');

section.textContent = resultsString;


const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();

    window.location = '../';
});