/**
 * Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.5/introduction}
 */

import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import { Home } from "./Home";

describe("Home", function() {
  let component;

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Home />);
    component = renderer.getRenderOutput();
  });

  it("contains spec that returns true", function() {
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h2'
    );
    expect(h1.getDOMNode().textContent).toEqual("Telnyx Blog!");
  });

  it('fetches right number of posts', () => {
    const home = TestUtils.renderIntoDocument(
        component
    );
    waitsFor(() => {
        return rendered.state.posts.length > 0;
    },  2000);

    runs(() => {
        var posts = TestUtils.scryRenderedDOMComponentsWithClass(home, 'post');
        expect(posts.length).toEqual(10);
    });
  });
});
