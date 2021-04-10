import { findById } from '../utilis.js';
import quests from '../data.js';
import { getUser, updateUserGivenChoice } from '../localStorage.js';
console.log('quest page');

const section = document.querySelector('section');
console.log(section);

const params = new URLSearchParams(window.location.search);
// console.log(params);

const questId = params.get('id');
// console.log(questId);
const quest = findById(quests, questId);
// console.log(quest);

const image = document.createElement('img');
const h2 = document.createElement('h2');

image.src = `../assets/quests/${quest.image}`;
h2.textContent = quest.title;
console.log(image, h2);

const form = document.createElement('form');


for (let choice of quest.choices){
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);
    form.append(label);

} console.log(form);
const button = document.createElement('button');
button.textContent = 'Submit';


form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    updateUserGivenChoice(questId, choice);
    alert(JSON.stringify(getUser(), true, 2));

    window.location = '../map';
});

section.append(h2, image, form);
console.log(button, form, section);
