let user = {
        name: 'Andrei',
        surname: 'Ivanov',
        age: 18,
        position: 'developer',
    },
    key = "surname";

function isKeyInObj(str, obj) {
    return str in obj;
}

console.log(isKeyInObj(key, user));