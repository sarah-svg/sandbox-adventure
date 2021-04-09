// import functions and grab DOM elements

import { setUser } from './localStorage.js';

// initialize state

// set event listeners to update state and DOM

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const classForm = data.get('class');
   

    const user = {
        hp: 35,
        gold: 0,
        name: name,
        class: classForm,
    }; console.log(user, classForm);
    setUser(user);
    window.location = './map';
});console.log('hey from app.js');