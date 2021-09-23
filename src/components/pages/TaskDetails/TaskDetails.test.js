import React from "react";
import { shallow } from "enzyme";
import TaskDetails from "./TaskDetails";

describe("TaskDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaskDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
