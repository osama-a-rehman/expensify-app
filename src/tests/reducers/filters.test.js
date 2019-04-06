import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set textFilter to provided text", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "Rent"
  });
  expect(state.text).toBe("Rent");
});

test("should set startDate to provided startDate", () => {
  const startDate = moment(0);
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test("should set endDate to provided endDate", () => {
  const endDate = moment(0);
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: endDate
  });
  expect(state.endDate).toEqual(endDate);
});
