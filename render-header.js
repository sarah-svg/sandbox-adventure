import { getUser } from './localStorage.js';

export function renderHeader() {
    // grab the header from the DOM
    const header = document.querySelector('header');
    // grab the user from local storage
    const user = getUser();
    // make a div
    const div = document.createElement('div');
    // put info in the div
    div.textContent = `name: ${user.name}, class: ${user.class}, HP: ${user.hp}, gold: ${user.gold}`;
    // append that div to the header in the DOM
    header.append(div);
}