import React from "react";
import { connect } from "react-redux";

// Own Imports
import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = props => (
  <div>
    {props.expenses.length == 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
