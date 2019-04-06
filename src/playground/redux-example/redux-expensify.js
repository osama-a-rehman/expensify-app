import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Actions
// 1) ADD_EXPENSE
// 2) REMOVE_EXPENSE
// 3) EDIT_EXPENSE
// 4) SET_TEXT_FILTER
// 5) SORT_BY_DATE
// 6) SORT_BY_AMOUNT
// 7) SET_START_DATE
// 8) SET_END_DATE

// 1) ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// 2) REMOVE_EXPENSE
const removeExpense = ({ id = "" } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// 3) EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// 4) SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// 5) SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// 6) SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// 7) SET_START_DATE
const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});
// 8) SET_END_DATE
const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// dispatch function returns the action it was called with
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -160 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 400, createdAt: 200 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "Rent Two", amount: 300, createdAt: 150 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(180));
// store.dispatch(setEndDate());

// store.dispatch(setTextFilter("Re"));

const demoState = {
  expenses: [
    {
      id: "adasdasdad",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500, // US Penies/Cents+
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// SPREAD OPERATOR ON OBJECTS
// const user = {
//   name: "Jen",
//   age: 24
// };

// console.log({ ...user, location: "Philadelphia", age: 27 });
