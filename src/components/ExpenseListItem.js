import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
    <h2>Expense: </h2>
    Description: {description} <br />
    Note: {note} <br />
    Amount: {numeral(amount / 100).format("$0,0.00")} <br />
    Created At: {moment(createdAt).format("MMMM Do, YYYY")} <br />
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
