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
export const addExpense = ({
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
export const removeExpense = ({ id = "" } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// 3) EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
