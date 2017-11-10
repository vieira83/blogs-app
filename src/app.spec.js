/**
 * Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.5/introduction}
 */

import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import App from "./app/App";

describe("App test suite", function() {
  let component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(<App />);
  });

  it("contains spec that returns true", function() {
    expect(true).toBe(true);
  });
});
