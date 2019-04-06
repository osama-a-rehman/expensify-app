// // ------ OLD SYNTAX ------ //

// class OldSyntax {
//   constructor() {
//     this.name = "Osama";
//     this.getGreeting = this.getGreeting.bind(this);
//   }

//   getGreeting() {
//     return `Hi. My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // ------ NEW SYNTAX ------ //
// class NewSyntax {
//   name = "Mike";
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}`;
//   };
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
