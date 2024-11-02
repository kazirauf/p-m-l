const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2018 },
    { make: 'Honda', model: 'Civic', year: 2019 },
    { make: 'BMW', model: 'i8', year: 2023 },
   
];

const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log(sortedCars);
