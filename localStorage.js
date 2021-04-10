
import quests from './data.js';
const USER = 'USER';

export function getUser(){
    const user = localStorage.getItem(USER);
    if (!user) return {};
    return JSON.parse(user);
}

export function setUser(user){
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function updateUserGivenChoice(questId, choice){
    const user = getUser();
    console.log(user);
    user.hp += choice.hp;
    user.gold += choice.gold;

    user.completed[questId] = true;

    setUser(user);
}

export function areAllQuestsCompleted() {
    const user = getUser();
    console.log(user);
    for (let quest of quests) {

        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;
}