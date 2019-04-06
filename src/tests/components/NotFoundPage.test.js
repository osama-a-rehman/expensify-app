import React from "react";
import { shallow } from "enzyme";

// Own Imports
import NotFoundPage from "../../components/NotFoundPage";

test("should render NotFoundPage Component", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
