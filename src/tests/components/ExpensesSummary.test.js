import React from "react";
import { shallow } from "enzyme";

// Own Imports
import { ExpenseSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary Component correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expensesTotal={235} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary Component correctly with multiple expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={23} expensesTotal={2351231243} />
  );

  expect(wrapper).toMatchSnapshot();
});
