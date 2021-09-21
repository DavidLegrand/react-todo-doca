import React from "react";
import { shallow } from "enzyme";
import TaskItem from "./TaskItem";

describe("TaskItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaskItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
