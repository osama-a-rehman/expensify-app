import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
    <h2>Expense: </h2>
    Description: {description} <br />
    Note: {note} <br />
    Amount: {amount} <br />
    Created At: {createdAt} <br />
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
