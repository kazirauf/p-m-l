const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composedFunction = x => {
    const mySquare = square(x);
    const myDouble = double(mySquare);
    const myAddFive = addFive(myDouble);
    return myAddFive;
}
console.log(composedFunction(2)); 