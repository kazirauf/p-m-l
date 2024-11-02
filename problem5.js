const people = [
  { name: "Abdullah", age: 18 },
  { name: "Foysal", age: 16 },
  { name: "Abid", age: 7 },
];

const modifyAge = (name, newAge) => {
  const person = people.find((p) => p.name === name);
  if (person) {
    person.age = newAge;
  }
};
modifyAge("Abid", 26);
console.log(people);
