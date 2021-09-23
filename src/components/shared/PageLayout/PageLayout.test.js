import React from "react";
import { shallow } from "enzyme";
import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
