import React from "react";
import { shallow } from "enzyme";

// Own Imports
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("should render ExpenseDashboardPage Component", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
