for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Iris', 'Anna', 'Jess'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Iris',
    age: 17,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]); // = loggedInUser.name
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('do u want to quit?');
}

console.log('Done')