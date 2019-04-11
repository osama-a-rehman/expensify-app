import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Own Imports
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
// import { addExpense } from "./actions/expenses";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
// import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";
import { firebase } from "./firebase/firebase";
// import "./playground/promises.js";
import LoadingPage from "./components/LoadingPage";

// CSS Imports
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";

const store = configureStore();
// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(
//   addExpense({
//     description: "Water Bill",
//     note: "This is water bill.",
//     amount: 1000,
//     createdAt: 100
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Gas Bill",
//     note: "This is gas bill.",
//     amount: 500,
//     createdAt: 200
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Electricity Bill",
//     note: "",
//     amount: 1500,
//     createdAt: 1020
//   })
// );

// store.dispatch(setTextFilter("bill"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("water"));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById("app"));
// });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("User is logged in ");
    console.log("uid", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        console.log('history.push(" / dashboard")');
        history.push("/dashboard");
      }
    });
  } else {
    console.log("User is not logged in ");
    renderApp();
    history.push("/");
    store.dispatch(logout());
  }
});
