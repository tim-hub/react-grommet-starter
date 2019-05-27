import React from "react";
import { configure, shallow } from "enzyme";
import { ResponsiveContext } from "grommet";
import { expect } from "chai";
import App from "../App";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App component testing", function() {
  it("has an app bar", function() {
    const wrapper = shallow(<App />);

    expect(
      wrapper.containsMatchingElement(ResponsiveContext.Consumer)
    ).to.equal(true);
  });
});
