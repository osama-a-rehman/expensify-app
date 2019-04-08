// This * as firebase syntax moves all named exports into the object named after 'as' keyword
import * as firebase from "firebase";

// Own Imports
// import expenses from "../tests/fixtures/expenses";

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// CREATING ARRAY OF DATA IN FIREBASE DATABASE
// const notes = [
//   {
//     id: "123",
//     title: "First note!",
//     body: "This is my note"
//   },
//   {
//     id: "1234",
//     title: "Another Note",
//     body: "This is my 2nd note"
//   }
// ];

// notes.forEach(note => {
//   // console.log(note);
//   database
//     .ref("notes")
//     .child(note.id)
//     .set(note);
// });

// database.ref("notes/123").update({
//   body: "Buy Food"
// });

// database.ref().set({ notes });

// expenses.forEach(expense => {
//   database.ref("expenses").push(expense);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(dataSnapshot => {
//     // const val = dataSnapshot.val();
//     // console.log(val);

//     const mExpenses = [];
//     let i = 1;

//     dataSnapshot.forEach(childSnapshot => {
//       const key = childSnapshot.key;
//       const childSnapshotVal = childSnapshot.val();

//       console.log(`i: ${i++}`);
//       console.log(`Key: ${key}`);
//       console.log(childSnapshotVal);

//       mExpenses.push({
//         ...childSnapshotVal,
//         id: key
//       });
//     });

//     console.log("EXPENSES");
//     console.log(mExpenses);
//   })
//   .catch(error => console.log(error));

// database.ref("expenses").on("value", dataSnapshot => {
//   const myExpenses = [];

//   dataSnapshot.forEach(childSnapshot => {
//     myExpenses.push({
//       ...childSnapshot.val(),
//       id: childSnapshot.key
//     });
//   });

//   console.log(myExpenses);
// });

// CHILD_REMOVED LISTENER
// database.ref("expenses").on("child_removed", dataSnapshot => {
//   console.log(dataSnapshot.key, dataSnapshot.val());
// });

// // CHILD_CHANGED LISTENER
// database.ref("expenses").on("child_changed", dataSnapshot => {
//   console.log(dataSnapshot.key, dataSnapshot.val());
// });

// // CHILD_ADDED LISTENER, Its executed once when the app runs
// database.ref("expenses").on("child_added", dataSnapshot => {
//   console.log(dataSnapshot.key, dataSnapshot.val());
// });

// setTimeout(() => {
//   database.ref("expenses").push(expenses[1]);
// }, 3000);

// CREATING DATA
// database
//   .ref()
//   .set({
//     name: "Osama A Rehman",
//     age: 23,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     stressLevel: 6,
//     isSingle: true,
//     location: {
//       city: "Karachi",
//       country: "Pakistan"
//     }
//   })
//   .then(() => {
//     console.log("Data was saved successfully:");
//   })
//   .catch(error => console.log("Error:", error));

// database.ref().set("This is my data");

// database
//   .ref()
//   .child("age")
//   .set(27);

// database.ref("location/city").set("Lahore");

// CREATING DATA
// database
//   .ref("attributes")
//   .set({
//     height: 64,
//     weight: 47
//   })
//   .then(() => {
//     console.log("2nd data saved");
//   })
//   .catch(error => console.log(error));

// REMOVING DATA
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => console.log("removed successfully"))
//   .catch(error => console.log(error));

// Alternative Way to Remove Data
// database.ref("isSingle").set(null);

// UPDAING DATA
// database
//   .ref()
//   .update({
//     name: "Umair",
//     age: 25,
//     degree: "Bachelors in Electronics Engr",
//     isSingle: null
//   })
//   .then(() => console.log("Updated successfully"))
//   .catch(error => console.log(error));

// database.ref().update({
//   job: "Manager",
//   // location: {
//   //   city: "Lahore"
//   // } // THIS OVERRIDES LOCATION KEY WITH THIS OBJECT, REMOVING OTHER VALUES IN LOCATION OBJECT LIKE COUNTRY

//   "location/city": "Lahore"
// });

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   })
//   .then(() => console.log("Updated Successfully"))
//   .catch(error => console.log(error));

// READING DATA

// 1) Reading data once
// database
//   .ref("location/city")
//   .once("value")
//   .then(dataSnapshot => {
//     console.log(dataSnapshot.val());
//   })
//   .catch(error => console.log(error));

// 2) Reading data everytime data changes, i.e. attaching an onValueChangeListener
// const onValueChange = dataSnapshot => {
//   console.log(dataSnapshot.val());
// };

// database.ref().on("value", onValueChange, error => console.log(error));

// setTimeout(() => {
//   database.ref("age").set(21);
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(23);
// }, 10500);

// database.ref().on("value", dataSnapshot => {
//   const val = dataSnapshot.val();

//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
