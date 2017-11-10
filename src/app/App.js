import React from "react";

// Our app
import { Navigation } from "./Navigation";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="mx-3">
          {this.props.children}
        </div>
      </div>
    );
  }
}
