// 1) Arguments Object - No Longer Bound with Arrow Functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

const add = (a, b) => {
  // console.log(arguments); // ERROR: arguments is not defined
  return a + b;
};

console.log(add(2, 3, 5));

// 2) this Keyword - No Longer Bound
const user = {
  name: "Osama",
  cities: ["Karachi", "Quetta", "Peshawar", "Lahore"],
  printPlacesLived: function() {
    // console.log(this.name);
    // console.log(this.cities);

    // Workaround for this = undefined
    // const that = this;

    return this.cities.map(city => `${this.name} has lived in ${city}`);

    /*this.cities.forEach(city => {
      console.log(`${this.name} has lived in ${city}`);
    });*/
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply: function() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
