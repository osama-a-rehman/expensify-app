// 4) SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// 5) SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// 6) SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// 7) SET_START_DATE
export const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});
// 8) SET_END_DATE
export const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});
