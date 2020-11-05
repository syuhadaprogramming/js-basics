// array
const number = [1, 2, 3];

// Appends new elements to end an array
number.push(4);
console.log(number);

// Inserts new elements at the start of an array.
number.unshift(0);
console.log(number);

// Inserts new elements in their place.
number.splice(3, 0, 2.5);
console.log(number);
