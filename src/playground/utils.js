console.log("utils.js is running");

// Alternate way for Named Exports
// export const square = s => s * s;
// export const add = (a, b) => a + b;


const square = s => s * s;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Alternative way for Default Exports
export default subtract;

// There are two kinds of exports:
// 1) default export - Can only be 1
// 2) named export - Can be more than 1
export { square, add, subtract as default };
