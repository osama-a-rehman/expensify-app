// import subtract, { square, add } from "./utils";

// DEFAULT EXPORTS CAN HAVE ANY NAME
// import anything, { square, add } from "./utils";

// console.log("app.js is running");
// console.log(square(6));
// console.log(add(5, 6));
// console.log(subtract(5, 6));
// console.log(anything(5, 6));

// CHALLENGE
// import isSen, { isAdult, canDrink } from "./person";

// console.log(isAdult(17));
// console.log(isAdult(18));
// console.log(isAdult(19));

// console.log(canDrink(20));
// console.log(canDrink(21));
// console.log(canDrink(22));

// console.log(isSen(64));
// console.log(isSen(65));
// console.log(isSen(66));

// USAGE WITH NPM MODULES
// import validator from "validator";

// console.log(validator.isEmail("test@test.com"));

import React from "react";
import ReactDOM from "react-dom";

// const template = React.createElement("p", null, "Testing 123");
const template = <p>Testing 123</p>;
ReactDOM.render(template, document.getElementById("app"));
