import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should remove expenses from firebase", done => {
  const store = createMockStore();
  const id = expenses[2].id;

  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });

      return database.ref(`expenses/${id}`).once("value");
    })
    .then(snapshot => {
      // This snapshot would be null because the expense with this id would have been deleted from firebase
      expect(snapshot.val()).toBeFalsy();
      done();
    })
    .catch(error => {
      console.log(error);

      expect(error).toBe(2);
      done();
    });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  // const expenseData = {
  //   description: "Rent",
  //   note: "This was last months next",
  //   amount: 109500,
  //   createdAt: 1000
  // };

  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Test Desc",
    note: "This is test note",
    amount: 3000,
    createdAt: 1234567
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // expect(1).toBe(2);
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      const val = snapshot.val();

      expect(val).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const store = createMockStore({});
  const expenseDefaultData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      // expect(1).toBe(2);
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaultData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      const val = snapshot.val();

      expect(val).toEqual(expenseDefaultData);
      done();
    });
});

// test("should setup add expense action object with default values", () => {
//   const defaultExpenseData = {
//     description: "",
//     note: "",
//     amount: 0,
//     createdAt: 0
//   };

//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       ...defaultExpenseData,
//       id: expect.any(String)
//     }
//   });
// });

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch expenses from firebase", done => {
  const store = createMockStore();

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });

    done();
  });
});
