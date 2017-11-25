/**
 * Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.5/introduction}
 */

import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import { About } from "./About";

describe("About", function() {
  let component;

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<About />);
    component = renderer.getRenderOutput();
  });

  it("About component contains title", function() {
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h2'
    );
    expect(h1.getDOMNode().textContent).toEqual("About us");
  });
  });
});
