console.log('hey from map');

import quests from '../data.js';

console.log(quests);
const section = document.querySelector('section');

for (let quest of quests){
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;
    section.append(anchorTag);


}