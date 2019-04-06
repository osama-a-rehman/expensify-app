import expensesReducer from "../../reducers/expenses";

// Test Fixtures Imports
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense to the expense list", () => {});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should add expense to the expense list", () => {});

test("should not remove expenses if id isn't found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    description: "Laptop",
    note: "",
    amount: 30000,
    createdAt: 20000
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);

  //   console.log(state);
});

test("should edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
  //   console.log(state);
});

test("should not edit an expense if id not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);

  //   console.log(state);
});
