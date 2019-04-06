var nameVar = "Osama Abdul Rehman";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Osama Abdul Rehman";
nameLet = "Mike";

console.log("nameLet", nameLet);

const nameConst = "Frank";
// const nameConst = "Osama";

console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Shadow";

  return petName;
}

console.log("getPetName()", getPetName());
// console.log("petName", petName);

// let/const are Block Scoped & var is Function Scoped
var fullName = "Osama Abdul Rehman";
let firstName;

if (fullName) {
  //   var firstName = fullName.split(" ")[0];
  //   const firstName = fullName.split(" ")[0]; // ERROR

  firstName = fullName.split(" ")[0];
  console.log("firstName", firstName);
}

console.log("Outside firstName", firstName);
