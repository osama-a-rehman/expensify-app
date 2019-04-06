// Own Imports
import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("should return 0 if no expenses", () => {
  const sum = selectExpensesTotal();
  expect(sum).toBe(0);
});

test("should correctly add up a single expense", () => {
  const sum = selectExpensesTotal([expenses[0]]);

  expect(sum).toBe(expenses[0].amount);
});

test("should correctly add up a multiple expenses", () => {
  const sum = selectExpensesTotal(expenses);

  expect(sum).toBe(114195);
});
