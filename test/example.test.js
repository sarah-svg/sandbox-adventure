// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getUser, setUser, updateUserGivenChoice } from '../localStorage.js';

const test = QUnit.test;

test('time to test a set item function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const user = {
        hp: 35,
        gold: 0,
        name: 'sarah',
        class: 'fairy',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});
test('time to test a function gettem', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const user = {
        hp: 35,
        gold: 0,
        name: 'sarah',
        class: 'fairy',
        completed: {}
    };
    setUser(user);

    
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('time to test a function gettem', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const user = {
        hp: 35,
        gold: 0,
        name: 'sarah',
        class: 'fairy',
        completed: {}
    };
    localStorage.setItem('USER', JSON.stringify(user));
    const choice = {
        hp: 10,
        gold: -30
    };

    const expected = {
        hp: 45,
        gold: -30,
        name: 'sarah',
        class: 'fairy',
        completed: {
            dragon: true
        }
    };
    updateUserGivenChoice('dragon', choice);

    const actual = JSON.parse(localStorage.getItem('USER'));
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
