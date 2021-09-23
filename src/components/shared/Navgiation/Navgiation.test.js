import React from "react";
import { shallow } from "enzyme";
import Navgiation from "./Navgiation";

describe("Navgiation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Navgiation />);
    expect(wrapper).toMatchSnapshot();
  });
});
