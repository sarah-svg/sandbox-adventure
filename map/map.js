console.log('hey from map');

import quests from '../data.js';
import { areAllQuestsCompleted, getUser } from '../localStorage.js';
import { renderHeader } from '../render-header.js';

console.log(quests);

renderHeader();

const user = getUser();

const userIsDead = user.hp <= 0;

// if (userIsDead || areAllQuestsCompleted()) {
//     window.location = '../results';
// }

const section = document.querySelector('section');

for (let quest of quests){
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;
    section.append(anchorTag);


}