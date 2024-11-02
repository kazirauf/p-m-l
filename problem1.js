const people = [
    { name: 'rauf', age: 18, gender: 'male' },
    { name: 'kazi', age: 16, gender: 'male' },
    { name: 'kafi', age: 7, gender: 'male' },
    { name: 'safius', age: 3, gender: 'female' }
];

const filteredNames = people.filter(person => person.gender !== 'female').map(person => person.name);
console.log(filteredNames);