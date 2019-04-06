import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

// Own Imports
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm Component", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm Component with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission in ExpenseForm Component", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "This is new Description";

  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: {
        value
      }
    });

  expect(wrapper.state("description")).toBe(value);
});

test("should set note on input change", () => {
  const value = "This is new Note";

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: {
      value
    }
  });

  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const value = "23.50";

  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        value
      }
    });

  expect(wrapper.state("amount")).toBe(value);
});

test("should set amount if invalid input", () => {
  const value = "12.112";

  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        value
      }
    });

  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  });
});

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);

  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendarFocus on focus change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });

  expect(wrapper.state("calenderFocused")).toBe(focused);
});
