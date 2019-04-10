import React from "react";
import { shallow } from "enzyme";

// Own Imports
import { Header } from "../../components/Header";

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();

  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("should render Header Component correctly", () => {
  //   expect(wrapper.find("h1").text()).toBe("Expensify");

  expect(wrapper).toMatchSnapshot();

  // Using ReactShallowRenderer
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});

test("should call startLogout on button click", () => {
  wrapper.find("button").simulate("click");

  expect(startLogout).toHaveBeenCalled();
});
