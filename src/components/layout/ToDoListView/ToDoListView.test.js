import React from "react";
import { shallow } from "enzyme";
import ToDoListView from "./ToDoListView";

describe("ToDoListView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ToDoListView />);
    expect(wrapper).toMatchSnapshot();
  });
});
