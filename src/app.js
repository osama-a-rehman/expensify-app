import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Own Imports
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

// CSS Imports
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";

const store = configureStore();
// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addExpense({
    description: "Water Bill",
    note: "This is water bill.",
    amount: 1000,
    createdAt: 100
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    note: "This is gas bill.",
    amount: 500,
    createdAt: 200
  })
);

store.dispatch(
  addExpense({
    description: "Electricity Bill",
    note: "",
    amount: 1500,
    createdAt: 1020
  })
);

// store.dispatch(setTextFilter("bill"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("water"));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
