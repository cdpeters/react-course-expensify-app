/////////////////////////////////////////////////////
/////////////////////// Object Destructuring

// const person = {
//   name: 'Chris',
//   age: 30,
//   location: {
//     city: 'San Diego',
//     temp: 60
//   }
// };

// // name = 'Anonymous' creates a default for name if it is undefined in person

// // name: firstName = 'Anonymous' does same thing but creates a const firstName as
// // opposed to a const name.
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// // temp: temperature renames temp to a const temperature
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

/////////////// challenge

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


///////////////////////////////////////////////////////////
//////////////////////////// Array Destructuring

// const address = ['1234 Ashford St', 'San Diego', 'California', '92111'];

// const [, city, state='New York'] = address;

// console.log(`You are in ${state}.`);

//////////// challenge

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
