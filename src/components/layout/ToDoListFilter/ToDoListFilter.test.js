import React from "react";
import { shallow } from "enzyme";
import ToDoListFilter from "./ToDoListFilter";

describe("ToDoListFilter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ToDoListFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
