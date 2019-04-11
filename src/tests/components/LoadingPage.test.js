import React from "react";
import { shallow } from "enzyme";

// Own Imports
import LoadingPage from "../../components/LoadingPage";

test("should render LoadingPage", () => {
  const wrapper = shallow(<LoadingPage />);

  expect(wrapper).toMatchSnapshot();
});
