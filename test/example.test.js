// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getUser } from '../localStorage.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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
