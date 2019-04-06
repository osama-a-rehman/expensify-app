class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I'm ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name = "Anonymous", age = 0, major) {
    super(name, age);
    this.major = major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }

  hasMajor() {
    // Convert a Truthy/Falsy value into a Boolean Value
    return !!this.major;
  }
}

const me = new Student("Osama Abdul Rehman", 21, "Computer Science");
const other = new Student();
console.log(me.getDescription());
// console.log(me.hasMajor());
console.log(other.getDescription());
// console.log(other.hasMajor());

// CHALLENGE

class Traveler extends Person {
  constructor(name = "Anonymous", age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const myTraveler = new Traveler("Osama", 21, "Karachi");
const otherTraveler = new Traveler(undefined, undefined, "Nowhere");
console.log(myTraveler.getGreeting());
console.log(otherTraveler.getGreeting());
