/*
 *
 * OBJECT DESTRUCTURING
 *
 */

// const person = {
//   name: "Osama",
//   age: 21,
//   location: {
//     city: "Karachi",
//     temo: 80
//   }
// };

// const { name: firstName = "Anonymous", age = 0 } = person;
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age} years old`);

// if (temperature && city) {
//   console.log(`Its ${temperature}°F in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(`The publisher of book ${book.title} is ${publisherName}`);

/*
 *
 * ARRAY DESTRUCTURING
 *
 */

// const address = [
//   "1299 South Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];

// const [, city = "NYC", state = "New York"] = address;

// console.log(`You're in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
