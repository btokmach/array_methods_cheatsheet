// 1. indexOf() - find an items index

// const myPets = ['dog', 'cat', 'fox'];
// myPets.indexOf('fox') --> 2


// 2. join() - create a string from array items

// const myPets = ['dog', 'cat', 'fox'];
// myPets.join(' and '); --> 'dog and cat and fox'


// 3. slice() - split an array at given index(es)

// const myPets = ['dog', 'cat', 'fox'];
// myPets.slice(1); --> [ 'cat', 'fox' ]
// myPets.slice(1, 2); --> [ 'cat' ]


// 4. splice() - split an array and/or insert new items

// const myPets = ['dog', 'cat', 'fox'];
// myPets.splice(1, 2, 'lizard') --> [ 'dog', 'lizard' ]


// 5. concat() - concatenate one or more arrays

// const myPets = ['dog', 'cat', 'fox'];
// const myFlyingPets = ['bird'];
// const myWaterPets = ['fish'];

// const allPets = myPets.concat(myFlyingPets, myWaterPets); 
// --> [ 'dog', 'cat', 'fox', 'bird', 'fish' ]


// 6. forEach() - loop over an array and access each item

// const myPets = ['dog', 'cat', 'fox'];
// myPets.forEach(pet => console.log(pet));
                                        // dog
                                        // cat
                                        // fox


// 7. filter() - create a new array based on a filter

// const myPets = ['dog', 'cat', 'fox', 'hamster', 'lizard'];
// const threeLetterPets = myPets.filter(pet => pet.length === 3) 
// --> [ 'dog', 'cat', 'fox' ]


// 8. map() - loop over an array and run some operation
//            on each item without mutating the original array

// const myPets = ['dog', 'cat', 'fox'];
// const lovedPets = myPets.map(pet => `${pet}♥`) --> [ 'dog♥', 'cat♥', 'fox♥' ]


// 9. flat() - flatten an array to a single dimension

// const values = [1, 2, [7], 3, [1, 2], 4];
// console.log(values.flat()); --> [1, 2, 7, 3, 1, 2, 4]


// 10. reduce() - run a callback on each item and reduce the array to a single value

// const values = [1, 6, 7, 1, 3, 4];
// const total = values.reduce((total, currentVal) => total + currentVal); --> 22


// 11. findIndex() - finds the index of an item based on a condition

// const people = [{ name: 'John Cena'}, {name: 'Randy Orton'}, {name: 'Triple H'}];
// const johnCenaIndex = people.findIndex(person => person.name === 'John Cena');
// console.log(johnCenaIndex) --> 0


// 12. every() - check if every item meets a condition

// const values = [1, 6, 7, 1, 3, 4];
// console.log(values.every(val => val < 8)); --> true


// 13. find() - find first value that meets a condition

// const values = [4, 1, 7, 2, 5, 7, 9, 25];
// const firstValueOverSeven = values.find(val => val > 7);

// console.log(firstValueOverSeven) --> 9


// 14. some() - check if some values meet a condition

// const values = [1, 6, 7, 1, 3, 4];
// console.log(values.some(val => val > 7)); --> false


// 15. sort() - sorts an array

// const values = [4, 1, 7, 2, 5];
// const names = ['Naruto', 'Sasuke', 'Itachi'];

// console.log(values.sort((a, b) => a - b)); --> [ 1, 2, 4, 5, 7 ]
// console.log(names.sort()); --> [ 'Itachi', 'Naruto', 'Sasuke' ]

