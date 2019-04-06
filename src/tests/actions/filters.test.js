import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("should setup setTextFilter action object with provided text", () => {
  const action = setTextFilter("Rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Rent"
  });
});

test("should setup setTextFilter action object with default text", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should setup setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});

test("should setup setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});

test("should setup sortByDate action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should setup sortByAmount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
