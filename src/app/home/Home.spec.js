/**
 * Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.5/introduction}
 */

import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import { Home } from "./Home";

xdescribe("Home", function() {
  let component;

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Home />);
    component = renderer.getRenderOutput();
  });

  it("contains spec that returns true", function() {
    expect(true).toBe(true);
  });
});
