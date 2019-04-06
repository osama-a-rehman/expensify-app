import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

// const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ""
    };
  }

  onDescriptionChange = event => {
    const description = event.target.value;

    this.setState(() => ({
      description
    }));
  };

  onAmountChange = event => {
    const amount = event.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calenderFocused: focused
    }));
  };

  onNoteChange = event => {
    const note = event.target.value;

    this.setState(() => ({
      note
    }));
  };

  onSubmit = event => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Plese provide description and amount"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      console.log("submitted!");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, // * 100 to convert into cents
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        <p>Expense Form</p>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus={true}
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            onChange={this.onNoteChange}
            value={this.state.note}
          />
          <button>{this.props.expense ? "Edit Expense" : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
