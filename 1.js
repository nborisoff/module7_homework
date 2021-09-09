let user = {
        name: 'Andrei',
        surname: 'Ivanov',
        age: 18,
        position: 'developer',
    };

function getObjectKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, значение: ${obj[key]}`);
        }   
    }
}

getObjectKeys(user);