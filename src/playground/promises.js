console.log("Promise");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Osama",
      age: 21
    });

    // reject({
    //   error: "Something went wrong"
    // });
  }, 2500);
});

console.log("Before Promise");

promise
  .then(data => {
    console.log(data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 2500);
    });
  })
  .then(str => {
    console.log("2:", str);
  })
  .catch(error => console.log(error));

// Another Syntax
// promise.then(
//   data => {
//     console.log(data);
//   },
//   error => console.log(error)
// );

console.log("After Promise");
